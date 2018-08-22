// Menu Item
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';

export default class MenuItem extends React.Component {

	componentDidUpdate(prevProps, prevState) {
		if (this.props.focus) {
			this.el.focus();
		}
	}

	render() {
		const { 
			className,
			style,
			href,
			target,
			icon,
			text,
			secondaryText,
			reserveSpace,
			onClick
		} = this.props;

		const iconProps = typeof icon === 'string' ?
		    { name: icon } : icon;

		const renderProps = {
			ref: (el) => this.el = el,
			className: cx(
				'f-MenuItem',
				{ 'reserve': reserveSpace },
				className
			),
			tabIndex: -1,
			style,
			href,
			target,
			onClick
		};

		const _children = (
			<React.Fragment>
				{icon && 
					<Icon {...iconProps} />
				}
				<div>
					<div className="f-MenuItem-text">
						{text}
					</div>
					{secondaryText &&
						<div className="f-MenuItem-second-text">
							{secondaryText}
						</div>
					}
				</div>
			</React.Fragment>
		);

		return (
			href ?
			<a {...renderProps}>
				{_children}
			</a>
			:
			<button {...renderProps}>
				{_children}
			</button>
		);
	}
}

MenuItem.propTypes = {

    // Overwrite or extend the styles
    className: PropTypes.string,

    text: PropTypes.node,

    secondaryText: PropTypes.node,

    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // Reserve the icon space on the left.
    reserveSpace: PropTypes.bool,

    // Makes the menu item a hyperlink.
    href: PropTypes.string,

    // Target of the hyperlink.
    target: PropTypes.string,

    onClick: PropTypes.func,
};

MenuItem.defaultProps = {
	_name: 'MenuItem'
};