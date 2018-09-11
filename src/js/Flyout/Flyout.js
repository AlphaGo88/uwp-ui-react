// Flyout
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

function isDescendant(el, target) {
  if (target !== null) {
    return el === target || isDescendant(el, target.parentNode);
  }
  return false;
};

export default class Flyout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      top: -10000,
      left: -10000,
      height: 0
    };
  }

  componentDidMount() {
    if ('ontouchstart' in window) {
      window.addEventListener('touchstart', this.handleClickAway);
    } else {
      window.addEventListener('click', this.handleClickAway);
    }
    window.addEventListener('scroll', this.handleResizeOrScroll);
    window.addEventListener('resize', this.handleResizeOrScroll);
  }

  componentWillUnmount() {
    if ('ontouchstart' in window) {
      window.removeEventListener('touchstart', this.handleClickAway);
    } else {
      window.removeEventListener('click', this.handleClickAway);
    }
    window.removeEventListener('scroll', this.handleResizeOrScroll);
    window.removeEventListener('resize', this.handleResizeOrScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    // Open - ajust position
    if (!prevProps.isOpen && this.props.isOpen) {
      this.ajustPosition();
    }

    // Close - hide
    if (prevProps.isOpen && !this.props.isOpen) {
      this.setState({
        top: -10000,
        left: -10000,
        height: 0
      });
    }
  }

  // If click away, close
  handleClickAway = (event) => {
    if (this.props.isOpen &&
      !isDescendant(this.props.anchorEl, event.target) &&
      !isDescendant(this.el, event.target)) {
      this.props.onClose();
    }
  }

  handleResizeOrScroll = () => {
    if (this.props.isOpen) {
      this.props.onClose();
    }
  }

  handleKeyDown = (event) => {
    const {
      anchorEl,
      onClose,
      onKeyDown
    } = this.props;

    switch (event.which) {
      // ESC - close and focus anchor element.
      case 27:
        onClose();
        anchorEl.focus();
        break;

      // Tab - focus away, close
      case 9:
        onClose();
        break;

      default:
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  }

  ajustPosition() {
    const elWidth = this.el.scrollWidth;
    const elHeight = this.el.scrollHeight;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;

    // https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
    const rectObj = this.props.anchorEl.getBoundingClientRect();

    const spaceLeft = rectObj.right;
    const spaceRight = clientWidth - rectObj.left;
    const spaceTop = rectObj.top;
    const spaceBottom = clientHeight - rectObj.bottom;
    let top;
    let left;
    let height = 'auto';

    if (spaceBottom >= elHeight + 10) { // bottom space enough
      top = rectObj.bottom + 4;
    } else if (spaceTop >= elHeight + 10) { // top space enough
      top = rectObj.top - elHeight - 4;
    } else {
      if (clientHeight >= elHeight + 12) { // client height enough
        top = (clientHeight - elHeight) / 2;
      } else { // client height not enough
        height = clientHeight - 12;
        top = 6;
      }
    }

    if (spaceRight <= elWidth && spaceLeft > elWidth) {
      // aligh the flyout right
      left = rectObj.right - elWidth;
    } else {
      // aligh the flyout left
      left = rectObj.left;
    }

    this.setState({
      top,
      left,
      height
    }, () => {
      this.props.focus && this.el.focus();
    });
  }

  render() {
    const {
      className,
      style,
      anchorEl,
      isOpen,
      focus,
      children
    } = this.props;

    const {
      top,
      left,
      height
    } = this.state;

    const _style = {
      ...style,
      top,
      left,
      height
    }

    return (
      <div 
        ref={el => this.el = el}
        className={cx(
          'f-Flyout',
          { 'open': isOpen },
          className
        )}
        style={_style}
        tabIndex={-1}
        onKeyDown={this.handleKeyDown}
      >
        {children}
      </div>
    );
  }
}

Flyout.propTypes = {

  // Overwrite or extend the styles
  className: PropTypes.string,

  style: PropTypes.object,

  // The anchor dom node
  anchorEl: PropTypes.object,

  isOpen: PropTypes.bool,

  // Focus the flyout element after open it.
  focus: PropTypes.bool,

  onClose: PropTypes.func
};

Flyout.defaultProps = {
  isOpen: false,
  focus: true,
  onClose: () => {}
};