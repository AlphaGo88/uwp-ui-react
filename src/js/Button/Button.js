// Button
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';

export default class Button extends React.Component {

    render() {
        const { 
            className,
            primary,
            fullWidth,
            children,
            ...other
        } = this.props;

        return (
            <button
                className={cx(
                    'f-Button',
                    primary ? 'primary' : 'default',
                    { fullWidth },
                    className
                )}
                {...other}
            >
                {children}
            </button>
        );
    }
}

Button.propTypes = {

    // Overwrite or extend the styles
    className: PropTypes.string,

    primary: PropTypes.bool,

    // If true, the button will take up the full width of its container.
    fullWidth: PropTypes.bool,
};

Button.defaultProps = {};