// Toggle
// ---------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import InputField from '../internal/InputField';

export default class Toggle extends React.Component {

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
    this.props.onChange(this.props.name, event.target.checked);
  }

  render() {
    const {
      className,
      name,
      header,
      disabled,
      isOn,
      onText,
      offText
    } = this.props;

    const {
      focusHidden
    } = this.state;

    return (
      <InputField
        className={cx('f-Toggle-field', className)}
        header={header}
        disabled={disabled}
      >
        <label 
            className="f-Toggle"
        >
          <input 
            type="checkbox"
            name={name}
            disabled={disabled}
            checked={isOn}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <span 
            className={cx(
                'f-Toggle-label',
                {'f-focus-hidden': focusHidden}
            )}
            onClick={this.handleClick}
          >
          <span 
            className={cx(
              'f-Toggle-lever',
              {'on': isOn}
            )}
          />
          {isOn ? onText : offText}
          </span>
        </label>
      </InputField>
    );
  }
};

Toggle.propTypes = {

  // Overwrite or extend the styles
  className: PropTypes.string,

  header: PropTypes.node,

  name: PropTypes.string,

  disabled: PropTypes.bool,

  isOn: PropTypes.bool,

  onText: PropTypes.string,

  offText: PropTypes.string,

  /**
   * Called when toggled.
   * 
   * @param {string} `name`
   * @param {boolean} `isOn`
   */
  onChange: PropTypes.func,
};

Toggle.defaultProps = {
  onText: 'On',
  offText: 'Off',
  onChange: () => {}
};