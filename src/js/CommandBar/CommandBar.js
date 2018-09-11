// CommandBar
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CommandBarContent from './CommandBarContent';

export default class CommandBar extends React.Component {

  render() {
    const { 
      className,
      style,
      children
    } = this.props;

    return (
      <div
        className={cx(
          'f-CmdBar',
          className
        )}
        style={style}
      >
        {children}
      </div>
    );
  }
}

CommandBar.propTypes = {
  // Overwrite or extend the styles
  className: PropTypes.string,

  style: PropTypes.object,
};

CommandBar.Content = CommandBarContent;