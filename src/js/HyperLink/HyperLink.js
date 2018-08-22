// HyperLink
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class HyperLink extends React.Component {

	render() {
		const {
			className,
			underlined,
			disabled,
			children,
			...other
		} = this.props;

		return (
			<a 
				className={cx(
					'f-hyperlink', 
					{ 
						underlined, 
						disabled
					},
					className
				)}
				{...other}
				tabIndex={disabled ? null : 0}
			>
				{children}
			</a>
		);
	}
}

HyperLink.propTypes = {

    // Overwrite or extend the styles
    className: PropTypes.string,

    underlined: PropTypes.bool,

    disabled: PropTypes.bool
};

HyperLink.defaultProps = {};