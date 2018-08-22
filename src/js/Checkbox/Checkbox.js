// Checkbox
// ---------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class Checkbox extends React.Component {

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
            label,
            disabled,
            checked,
            indeterminate
        } = this.props;

        const {
            focusHidden
        } = this.state;

        return (
            <label 
                className={cx(
                    'f-Chkbx', 
                    className
                )}
            >
                <input 
                    type="checkbox"
                    name={name}
                    disabled={disabled}
                    checked={checked}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                />
                <span 
                    className={cx(
                        'f-Chkbx-label',
                        { 
                            checked,
                            disabled,
                            indeterminate,
                            'f-focus-hidden': focusHidden,
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

Checkbox.propTypes = {

    // Overwrite or extend the styles
    className: PropTypes.string,

    // The name of the checkbox.
    name: PropTypes.string,

    // The checkbox's text label.
    label: PropTypes.string,

    disabled: PropTypes.bool,

    checked: PropTypes.bool,

    indeterminate: PropTypes.bool,

    /**
     * Fires when checked or unchecked.
     * 
     * @param {boolean} `checked`
     */
    onChange: PropTypes.func,
};

Checkbox.defaultProps = {
    onChange: () => {}
};