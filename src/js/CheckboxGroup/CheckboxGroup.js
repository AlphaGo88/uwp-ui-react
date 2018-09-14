// Checkbox Group
// ---------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class CheckboxGroup extends React.Component {
  
  handleChange = (itemValue, checked) => {
    const value = this.props.value.slice();

    if (checked) {
      value.push(itemValue);
    } else {
      value.splice(value.indexOf(itemValue), 1);
    }
    this.props.onChange(value);
  }

  render() {
    const { 
      className,
      header,
      align,
      value,
      children
    } = this.props;

    return (
      <div 
        className={cx(
          'f-ChkbxGrp', 
          className
        )}
      >
        {header &&
            <div className="f-ChkbxGrp-header">
                {header}
            </div>
        }
        <ul 
          className={cx(
            'f-ChkbxGrp-items', 
            align
          )}
        >
          {React.Children.map(children, (child) => {
            const itemValue = child.props.value;

            return (
              <li>
                {
                  React.cloneElement(child, {
                    checked: value.indexOf(itemValue) > -1,
                    onChange: (name, checked) => this.handleChange(itemValue, checked)
                  })
                }
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

CheckboxGroup.propTypes = {
  // Overwrite or extend the styles
  className: PropTypes.string,

  align: PropTypes.oneOf([
    'horizonal',
    'vertical'
  ]),

  value: PropTypes.array,

  /**
   * Called when values change
   * 
   * @param {array} `value`
   */
  onChange: PropTypes.func
};

CheckboxGroup.defaultProps = {
  align: 'horizonal',
  value: [],
  onChange: () => {}
};