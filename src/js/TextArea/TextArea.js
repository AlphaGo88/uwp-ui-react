// TextArea
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import InputField from '../internal/InputField';

export default class TextArea extends React.Component {

    handleChange = (event) => {
        const { autoHeight, onChange } = this.props;

        if (autoHeight) {
            this.el.style.height = 'auto';
            if (event.target.offsetHeight < event.target.scrollHeight + 2) {
                this.el.style.height = event.target.scrollHeight + 3 + 'px';
            }
        }
        onChange(this.props.name, event.target.value);
    }

    render() {
        const { 
            className,
            fullWidth,
            header,
            width,
            height,
            minHeight,
            required,
            name,
            value,
            underlined,
            error,
            disabled,
            autoHeight,
            resize,
            ...other
        } = this.props;

        return (
            <InputField
                className={className}
                width={width}
                fullWidth={fullWidth}
                header={header}
                required={required}
                disabled={disabled}
            >
                <textarea 
                    ref={el => this.el = el}
                	className={cx(
                        'f-TextArea',
                        { 
                            underlined,
                            error
                        }
                    )}
                    name={name}
                    value={value}
                    required={required}
                    disabled={disabled}
                    {...other}
                    style={{
                        height,
                        minHeight,
                        resize
                    }}
                    onChange={this.handleChange}
                />
            </InputField>
        );
    }
}

TextArea.propTypes = {

    className: PropTypes.string,

    fullWidth: PropTypes.bool,

    header: PropTypes.node,

    name: PropTypes.string,

    value: PropTypes.string,

    required: PropTypes.bool,

    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    height: PropTypes.number,

    minHeight: PropTypes.number,

    underlined: PropTypes.bool,

    // Ajust height automatically
    autoHeight: PropTypes.bool,

    error: PropTypes.bool,

    /**
     * Called when the input value changes
     * 
     * @param {string} `name`
     * @param {string} `value`
     */
    onChange: PropTypes.func
};

TextArea.defaultProps = {
    value: '',
    onChange: () => {}
};