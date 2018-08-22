// Radio Group
// ---------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class RadioGroup extends React.Component {

    render() {
        const { 
            className,
            name,
            header,
            align,
            value,
            onChange,
            children
        } = this.props;

        return (
            <div 
                className={cx(
                    'f-RadioGrp', 
                    className
                )}
            >
                {header &&
                    <div className="f-RadioGrp-header">
                        {header}
                    </div>
                }
                <ul 
                    className={cx(
                        'f-RadioGrp-items', 
                        align
                    )}
                >
                    {React.Children.map(children, (child) => (
                        <li>
                            {React.cloneElement(child, {
                                name,
                                checked: child.props.value === value,
                                onCheck: (itemValue) => onChange(name, itemValue)
                            })}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

RadioGroup.propTypes = {

    // Overwrite or extend the styles
    className: PropTypes.string,

    name: PropTypes.string,

    align: PropTypes.oneOf(['horizonal', 'vertical']),

    // The checked value.
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * Fires when the state changes.
     * @param `value`
     */
    onChange: PropTypes.func,
};

RadioGroup.defaultProps = {
    align: 'horizonal',
    value: '',
    onChange: () => {}
};