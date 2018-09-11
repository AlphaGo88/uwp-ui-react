// Tabs
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class Tabs extends React.Component {

  render() {
    const { 
      className,
      underlined,
      stretch,
      value,
      activeIndex,
      onChange,
      children 
    } = this.props;

    let tabs = [];
    let tabContents = [];

    React.Children.forEach(children, (child, i) => {
      const active = (value !== undefined && child.props.value === value)
        || i === activeIndex;
      const tab = React.cloneElement(child, {
        key: i,
        active,
        onActive: () => onChange(child.props.value, i)
      });
      const content = (
        <div 
          key={i}
          className={cx(
            'f-TabContent',
            { active }
          )}
        >
          {child.props.children}
        </div>
      );

      tabs.push(tab);
      tabContents.push(content);
    });

    return (
      <div>
        <div 
          className={cx(
            'f-Tabs',
            { 
              underlined,
              stretch 
            }, 
            className
          )}
        >
          {tabs}
        </div>
        <div>{tabContents}</div>
      </div>
    );  
  }
};

Tabs.propTypes = {

  className: PropTypes.string,

  underlined: PropTypes.bool,

  stretch: PropTypes.bool,

  // The active tab's value
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  // The active tab's index
  activeIndex: PropTypes.number,

  /**
   * Called when a new tab is selected.
   * 
   * @param {string|number} `value` The selected tab's value
   * @param {number} `index` The selected tab's index
   */
  onChange: PropTypes.func
};

Tabs.defaultProps = {
  onChange: () => {}
};