// CommandBar Content
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class CommandBarContent extends React.Component {

    render() {
        const { 
            className,
            style,
            children
        } = this.props;

        return (
            <div
                className={cx(
                    'f-CmdBar-content',
                    className
                )}
                style={style}
            >
                {children}
            </div>
        );
    }
}

CommandBarContent.propTypes = {

    // Overwrite or extend the styles
    className: PropTypes.string,

    style: PropTypes.object,
};

CommandBarContent.defaultProps = {};