// Progress Ring
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function ProgressRing(props) {

	let rootStyle = {};
	let itemStyle = {};

	if (props.height) {
		rootStyle = {
			width: props.height,
			height: props.height
		};
		itemStyle = {
			width: props.height / 10,
			height: props.height / 10,
			transformOrigin: `0px ${props.height/2}px`
		};
	}

    return (
    	<div 
            className={cx(
                'f-ProgressRing',
                props.className
            )}
    		style={rootStyle}
    	>
            <div 
                className="f-ProgressRing-item0"
                style={itemStyle} />
            <div 
                className="f-ProgressRing-item1"
                style={itemStyle} />
            <div 
                className="f-ProgressRing-item2"
                style={itemStyle} />
            <div 
                className="f-ProgressRing-item3"
                style={itemStyle} />
            <div 
                className="f-ProgressRing-item4"
                style={itemStyle} />
    	</div>
    );
}

ProgressRing.propTypes = {
    className: PropTypes.string,

    height: PropTypes.number
};