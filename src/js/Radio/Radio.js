// Radio
// ---------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class Radio extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      focusHidden: false
    };
  }

  handleBlur = () => {
    if (this.state.focusHidden) {
      this.setState({
        focusHidden: false
      });
    }
  }

  handleClick = () => {
    if (!this.state.focusHidden) {
      this.setState({
        focusHidden: true
      });
    }
  }

  handleChange = (event) => {
    if (event.target.checked) {
      this.props.onCheck(event.target.value);
    }
  }

  render() {
    const { 
        className,
        name,
        value,
        label,
        disabled,
        checked
    } = this.props;

    const {
        focusHidden
    } = this.state;

    return (
      <label 
        className="f-Radio"
      >
        <input
          type="radio"
          name={name}
          value={value}
          disabled={disabled}
          checked={checked}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        <span
          className={cx(
            'f-Radio-label',
            { 
              'f-focus-hidden': focusHidden
            }
          )}
          onClick={this.handleClick}
        >
          {label}
        </span>
      </label>
    );
  }
};

Radio.propTypes = {

  // Overwrite or extend the styles
  className: PropTypes.string,

  name: PropTypes.string,

  label: PropTypes.string,

  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  disabled: PropTypes.bool,

  checked: PropTypes.bool,

  /**
   * Fires when set checked.
   * 
   * @param {boolean} `checked`
   */
  onCheck: PropTypes.func,
};