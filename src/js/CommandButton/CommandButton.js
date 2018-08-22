// CommandButton
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';

export default class CommandButton extends React.Component {

    handleKeyDown = (event) => {
        // Enter
        if (event.which === 13) {
            this.props.onClick();
        }
    }

    render() {
        const { 
            className,
            style,
            icon,
            label,
            labelPosition,
            onClick
        } = this.props;

        const iconProps = typeof icon === 'string' ?
            { name: icon } : icon;

        return (
            <div
                className={cx(
                    'f-CmdBtn',
                    className
                )}
                style={style}
                tabIndex={0}
                onClick={onClick}
                onKeyDown={this.handleKeyDown}
            >
                <Icon {...iconProps} />
                {label &&
                    <div 
                        className={cx(
                            'f-CmdBtn-label',
                            labelPosition
                        )}
                    >
                        {label}
                    </div>
                }
            </div>
        );
    }
}

CommandButton.propTypes = {

    // Overwrite or extend the styles
    className: PropTypes.string,

    style: PropTypes.object,

    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    label: PropTypes.string,

    labelPosition: PropTypes.oneOf(['right', 'bottom']),

    onClick: PropTypes.func
};

CommandButton.defaultProps = {
    labelPosition: 'bottom',
    onClick: () => {}
};