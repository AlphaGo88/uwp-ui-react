// Input Field
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function InputField(props) {

	const { 
    className, 
    width, 
    fullWidth, 
    header,
    disabled, 
    required,
    children 
  } = props;

  return (
    <div
      className={cx(
        'f-Input-field',
        { fullWidth },
        className
      )}
      style={{ width }}
    >
      {header &&
        <div 
          className={cx(
            'f-Input-header',
            { disabled }
          )}
        >
          {header}
          {required && 
            <span className="f-Input-asterisk">*</span>
          }
        </div>
      }
      {children}
    </div>
  )
}

InputField.propTypes = {

  // Overwrite or extend the styles
  className: PropTypes.string,

  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),

  fullWidth: PropTypes.bool,

  header: PropTypes.string,

  disabled: PropTypes.bool,

  required: PropTypes.bool
};