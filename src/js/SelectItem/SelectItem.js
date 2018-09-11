// Select Item
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';

export default class SelectItem extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if (this.props.focus) {
      this.el.focus();
    }
  }

  handleClick = () => {
    this.props.onClick(this.props.value);
  }

  render() {
    const { 
      className,
      style,
      text,
      icon,
      focus,
      onClick
    } = this.props;

    const iconProps = typeof icon === 'string' ?
      { name: icon } : icon;

    return (
      <button
        ref={(el) => this.el = el}
        className={cx(
          'f-SelectItem',
          { focus },
          className
        )}
        style={style}
        tabIndex={-1}
        onClick={this.handleClick}
      >
        {icon && 
          <Icon {...iconProps} />
        }
        {text}
      </button>
    );
  }
}

SelectItem.propTypes = {

  // Overwrite or extend the styles
  className: PropTypes.string,

  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  text: PropTypes.node,

  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  // Set focus state.
  focus: PropTypes.bool,

  onClick: PropTypes.func
};

SelectItem.defaultProps = {
  onClick: () => {}
};