// Input Base
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import InputField from './InputField';
import Icon from '../Icon';

export default class InputBase extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      focus: false
    };
  }

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  handleFocus = () => {
    this.setState({
      focus: true
    });
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  handleBlur = () => {
    this.setState({
      focus: false
    });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  handleChange = (event) => {
    this.props.onChange(this.props.name, event.target.value);
  }

  render() {
    const {
      className,
      fullWidth,
      header,
      width,
      required,
      type,
      name,
      value,
      underlined,
      error,
      disabled,
      leftIcon,
      rightIcon,
      prefix,
      suffix,
      ...other
    } = this.props;

    const {
      focus
    } = this.state;

    const leftIconProps = typeof leftIcon === 'string' ? {
      name: leftIcon
    } : leftIcon;

    const rightIconProps = typeof rightIcon === 'string' ? {
      name: rightIcon
    } : rightIcon;

    return (
      <InputField
        className={className}
        width={width}
        fullWidth={fullWidth}
        header={header}
        required={required}
        disabled={disabled}
      >
        <div 
          className={cx(
            'f-Input-wrapper',
            { 
              underlined,
              focus,
              error,
              disabled
            }
          )}
        >
          {leftIcon &&
            <div className="f-Input-prefix">
              <Icon 
                {...leftIconProps}
              />
            </div>
          }
          {prefix &&
            <div className="f-Input-prefix">
              {prefix}
            </div>
          }
          <input
            ref={el => this.input = el}
            type={type}
            name={name}
            value={value}
            required={required}
            disabled={disabled}
            {...other}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
          />
          {suffix &&
              <div className="f-Input-suffix">
                  {suffix}
              </div>
          }
          {rightIcon &&
              <div className="f-Input-suffix">
                  <Icon 
                      {...rightIconProps}
                  />
              </div>
          }
        </div>
      </InputField>
    );
  }
}

InputBase.propTypes = {
  
  className: PropTypes.string,

  header: PropTypes.node,
  
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  
  name: PropTypes.string,
  
  value: PropTypes.string,

  // Underlined style
  underlined: PropTypes.bool,

  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  // Show error status
  error: PropTypes.bool,

  fullWidth: PropTypes.bool,

  /**
   * Called when the input's value changes
   * 
   * @param {string} `name` The name of the input
   * @param {string} `value` The value of the input
   */
  onChange: PropTypes.func
};

InputBase.defaultProps = {
  value: '',
  onChange: () => {}
};