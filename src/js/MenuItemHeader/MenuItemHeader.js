// Menu Item Header
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';

export default function MenuItemHeader(props) {
  const { 
    className,
    text,
    icon
  } = props;
  
  const iconProps = typeof props.icon === 'string' ?
    { name: icon } : icon;

  return (
    <div 
      className={cx(
        'f-MenuItem-header',
        className
      )}
    >
      {icon &&
        <Icon 
          {...iconProps}
        />
      }
      <div>{text}</div>
    </div>
  );
}

MenuItemHeader.propTypes = {

  // Overwrite or extend the styles
  className: PropTypes.string,

  text: PropTypes.node,

  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};