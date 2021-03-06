// Select Item Header
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';

export default function SelectItemHeader(props) {
  const { 
    className,
    style,
    text,
    icon
  } = props;
    
  const iconProps = typeof props.icon === 'string' ?
    { name: icon } : icon;

  return (
    <div 
      className={cx(
        'f-SelectItem-header',
        className
      )}
      style={style}
    >
      {icon &&
        <Icon 
          {...iconProps}
        />
      }
      {text}
    </div>
  );
}

SelectItemHeader.propTypes = {

  // Overwrite or extend the styles
  className: PropTypes.string,

  style: PropTypes.object,

  text: PropTypes.node,

  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};