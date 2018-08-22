// Icon
// ---------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class Icon extends React.Component {

	render() {
		const {
			className,
			name,
            size,
            color,
            rotate,
			flip,
			spin,
            onClick
		} = this.props;
        
        return (
            <i 
            	className={cx(
                    'f-Icon',
                    'fa',
            		`fa-${name}`,
            		{
            			[`fa-flip-${rotate}`]: !!rotate,
                        [`fa-flip-${flip}`]: !!flip,
            			'fa-spin': spin,
            		},
            		className
            	)}
                style={{
                    fontSize: size,
                    color
                }}
                onClick={onClick}
            >
            </i>
        );
    }
}

Icon.propTypes = {

    // Overwrite or extend the styles
    className: PropTypes.string,

    name: PropTypes.string,

    size: PropTypes.number,

    color: PropTypes.string,

    rotate: PropTypes.number,

    flip: PropTypes.oneOf(['horizontal', 'vertical']),

    spin: PropTypes.bool
};

Icon.defaultProps = {};