// Progress Bar
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function ProgressBar(props) {

    return (
        props.indeterminate ?
        <div 
            className={cx(
                'f-ProgressBar-indeterminate',
                props.className
            )}
        >
            <div className="f-ProgressBar-item0" />
            <div className="f-ProgressBar-item1" />
            <div className="f-ProgressBar-item2" />
            <div className="f-ProgressBar-item3" />
            <div className="f-ProgressBar-item4" />
        </div>
        :
        <div 
            className={cx(
                'f-ProgressBar',
                props.className
            )}
        >
            <div 
                className="f-ProgressBar-percent"
                style={{
                    width: `${props.percent}%`
                }}
            />
        </div>
    );
}

ProgressBar.propTypes = {

    className: PropTypes.string,

    indeterminate: PropTypes.bool,

    percent: PropTypes.number
};

ProgressBar.defaultProps = {
    percent: 0
};