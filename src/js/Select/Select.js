// Select
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import InputField from '../internal/InputField';
import Flyout from '../Flyout';
import Icon from '../Icon';

export default class Select extends React.Component {

  constructor(props) {
    super(props);

    this.getItemCount(props);
    this.state = {
      isOpen: false,
      focusIndex: this.selectedIndex
    };
  }

  componentWillReceiveProps(nextProps) {
    this.getItemCount(nextProps);
    this.setState({
      focusIndex: this.selectedIndex
    });
  }

  // Get item count and the selected item's index, icon, and text
  getItemCount(props) {
    let i = -1;
    let selectedIndex = -1;
    let selectedText = '';
    let selectedIconProps;

    React.Children.forEach(props.children, child => {
      const value = child.props.value;

      // If child is a `SelectItem`
      if (value !== undefined) {
        i++;
        if (value === props.value) {
          const _icon = child.props.icon;

          selectedIndex = i;
          selectedText = child.props.text;
          selectedIconProps = typeof _icon === 'string' ? 
            { name: _icon } : _icon;
        }
      }
    });
    this.itemCount = i + 1;
    this.selectedIndex = selectedIndex;
    this.selectedText = selectedText;
    this.selectedIconProps = selectedIconProps;
  }

  cancel = () => {
    this.setState({
      isOpen: false,
      focusIndex: this.selectedIndex
    });
  }

  handleTriggerClick = () => {
    if (this.state.isOpen) {
      this.cancel();
    } else {
      this.setState({
        isOpen: true
      });
    }
  }

  handleTriggerKeyDown = (event) => {
    // Enter or Space - open
    if (event.which === 13 || event.which === 32) {
      event.preventDefault();
      this.setState({
        isOpen: true
      });
    }
  }

  // Select the item
  handleItemClick = (value) => {
    this.setState({
      isOpen: false
    });
    this.trigger.focus();

    if (value !== this.props.value) {
      this.props.onChange(this.props.name, value);
    }
  }

  handleOptionsKeyDown = (event) => {
    const {
      focusIndex
    } = this.state;

    switch (event.which) {
      // Right
      // Down
      // Focus next item
      case 39:
      case 40:
        event.preventDefault();
        this.setState({
          focusIndex: focusIndex === this.itemCount - 1 ? 0 : focusIndex + 1
        });
        break;

        // Left
        // Up
        // Foucs previous item
      case 37:
      case 38:
        event.preventDefault();
        this.setState({
          focusIndex: focusIndex <= 0 ? this.itemCount - 1 : focusIndex - 1
        });
        break;
      default:
    }
  }

  render() {
    const {
      className,
      name,
      width,
      header,
      required,
      value,
      disabled,
      underlined,
      fullWidth,
      children
    } = this.props;

    const {
      isOpen,
      focusIndex
    } = this.state;

    let itemIndex = -1;

    const items = React.Children.map(children, (child) => {
      // Child is not a `SelectItem`
      if (child.props.value === undefined) {
        return child;
      }

      itemIndex++;

      // `SelectItem`
      return React.cloneElement(child, {
        focus: isOpen && itemIndex === focusIndex,
        onClick: this.handleItemClick
      });
    });

    return (
      <InputField
        className={className}
        width={width}
        fullWidth={fullWidth}
        header={header}
        required={required}
        disabled={disabled}
      >
        <div className="f-Select">
          <div 
            ref={el => this.trigger = el}
            className={cx(
              'f-Input-wrapper',
              'f-Select-trigger',
              { 
                underlined,
                disabled
              }
            )}
            tabIndex={disabled ? void 0 : 0}
            onClick={this.handleTriggerClick}
            onKeyDown={this.handleTriggerKeyDown}
          >
            {this.selectedIconProps &&
              <Icon {...this.selectedIconProps} />
            }
            {this.selectedText}
          </div>
          <Flyout 
            className="f-Select-options"
            anchorEl={this.trigger}
            style={{
              width: this.trigger ? this.trigger.offsetWidth : 0
            }}
            isOpen={isOpen}
            focus={false}
            onClose={this.cancel}
            onKeyDown={this.handleOptionsKeyDown}
          >
            {items}
          </Flyout>
        </div>
      </InputField>
    );
  }
}

Select.propTypes = {

  // Overwrite or extend the styles
  className: PropTypes.string,

  // Identify the select
  name: PropTypes.string,

  header: PropTypes.node,

  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),

  // selected value
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  disabled: PropTypes.bool,

  // Underlined style
  underlined: PropTypes.bool,

  fullWidth: PropTypes.bool,

  /**
   * called when the selected value changes
   *
   * @param {string} `name`
   * @param {string|number} `value`
   * @param {string} `text`
   */
  onChange: PropTypes.func
};

Select.defaultProps = {
  onChange: () => {}
};