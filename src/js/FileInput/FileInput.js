// File Input
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import InputField from '../internal/InputField';
import Button from '../Button';
import Icon from '../Icon';

export default class FileInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      filenames: ''
    };
  }

  handleBtnClick = () => {
    this.fileInput.click();
  }

  handleChange = (event) => {
    const files = event.target.files;

    this.setState({
      value: event.target.value,
      filenames: Array.prototype.map.call(files, f => f.name).join(', ')
    });
    this.props.onChange(files);
  }

  handleClearBtnClick = () => {
    this.clear();
  }

  clear() {
    this.setState({
      value: '',
      filenames: ''
    }, () => {
      this.props.onChange(this.fileInput.files);
    });
  }

  render() {
    const { 
      className,
      width,
      fullWidth,
      header,
      required,
      name,
      underlined,
      error,
      disabled,
      buttonText,
      onChange,
      ...other
    } = this.props;

    const { 
      value,
      filenames
    } = this.state;

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
          className="f-FileInput-wrapper"
        >
          <div 
            className={cx(
              'f-Input-wrapper',
              { 
                underlined,
                error,
                disabled
              }
            )}
          >
            <input 
              type="text"
              tabIndex={-1}
              readOnly
              value={filenames}
              disabled={disabled}
            />
            <input 
              {...other}
              ref={el => this.fileInput = el}
              name={name}
              type="file"
              value={value}
              tabIndex={-1}
              required={required}
              disabled={disabled}
              onChange={this.handleChange}
            />
            <Icon 
              name="times"
              className={cx(
                'f-FileInput-clear',
                { 'f-hidden': !filenames }
              )}
              onClick={this.handleClearBtnClick}
            />
          </div>
          <Button
            className="f-FileInput-btn"
            disabled={disabled}
            onClick={this.handleBtnClick}
          >
            {buttonText}
          </Button>
        </div>
      </InputField>
    );
  }
}

FileInput.propTypes = {

  // Overwrite or extend the styles
  className: PropTypes.string,

  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),

  fullWidth: PropTypes.bool,

  header: PropTypes.node,

  required: PropTypes.bool,

  underlined: PropTypes.bool,

  error: PropTypes.bool,

  disabled: PropTypes.bool,

  buttonText: PropTypes.node,

  onChange: PropTypes.func
};

FileInput.defaultProps = {

  buttonText: 'Browse...',

  /**
   * Called when files change
   * 
   * @param {object} `files`
   */
  onChange: () => {}
};