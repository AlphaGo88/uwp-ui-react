// Overlay
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class Overlay extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.isOpen && this.props.isOpen) {
      document.body.classList.add('f-scrollbar-hidden');
      this.el.focus();
    }
    if (prevProps.isOpen && !this.props.isOpen) {
      document.body.classList.remove('f-scrollbar-hidden');
    }
  }

  handleKeyDown = (event) => {
    // ESC - close
    if (event.which === 27) {
      this.props.onClose();
    }
  }

  render() {
    const {
      className,
      style,
      isOpen,
      onClose,
      children
    } = this.props;

    return (
      <div>
        <div 
          className={cx(
            'f-Overlay-mask',
            { open: isOpen }
          )}
          onClick={onClose}
        >
        </div>
        <div
          ref={el => this.el = el}
          className={cx(
            'f-Overlay',
            { open: isOpen },
            className
          )}
          style={style}
          tabIndex={-1}
          onKeyDown={this.handleKeyDown}
        >
          {children}
        </div>
      </div>
    );
  }
}

Overlay.propTypes = {

  // Overwrite or extend the styles
  className: PropTypes.string,

  style: PropTypes.object,

  isOpen: PropTypes.bool,

  onClose: PropTypes.func
};

Overlay.defaultProps = {
  isOpen: false,
  onClose: () => {}
};