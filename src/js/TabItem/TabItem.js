// Tab Item
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';

export default class TabItem extends React.Component {

  handleClick = () => {
    const {
      disabled,
      active,
      onActive
    } = this.props;

    if (!disabled && !active) {
      onActive();
    }
  }

  render() {
    const {
      className,
      header,
      icon,
      active,
      disabled
    } = this.props;

    const iconProps = typeof icon === 'string' ? 
      { name: icon } : icon;

    return (
      <button
        className={cx(
          'f-TabItem',
          { active },
          className
        )}
        disabled={disabled}
        onClick={this.handleClick}
      >
        {icon &&
          <div>
            <Icon {...iconProps} />
          </div>
        }
        {header}
      </button>
    );
  }
};

TabItem.propTypes = {

  className: PropTypes.string,

  // The value to identify the TabItem.
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  header: PropTypes.node,

  // Whether the TabItem is active.
  active: PropTypes.bool,

  disabled: PropTypes.bool,

  /**
   * Fires when self is set active.
   */
  onActive: PropTypes.func
};

TabItem.defaultProps = {
  onActive: () => {}
};