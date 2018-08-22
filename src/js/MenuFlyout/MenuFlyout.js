// Menu Flyout
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Flyout from '../Flyout';

export default class MenuFlyout extends React.Component {

	constructor(props) {
	    super(props);

	    this.itemCount = 0;
	    this.state = {
	        focusIndex: -1
	    };
	}

	componentDidMount() {
		console.log(this.props.anchorEl)
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			focusIndex: -1 
		});
	}

	handleKeyDown = (event) => {
		const { focusIndex } = this.state;

	    switch (event.which) {
	        // Right
	        // Down
	        // Focus next item
	        case 39:
	        case 40:
	        	event.preventDefault();
        		this.setState({
        		    focusIndex: focusIndex === this.itemCount - 1 ? 0 : focusIndex + 1
        		});
	            break;

	        // Left
	        // Up
	        // Foucs previous item
	        case 37:
	        case 38:
	        	event.preventDefault();
	        	this.setState({
	        	    focusIndex: focusIndex <= 0 ? this.itemCount - 1 : focusIndex - 1
	        	});
	            break;
	        default:
	    }
	}

	render() {
		const {
			className,
			style,
			anchorEl,
			isOpen,
			onClose,
			children
		} = this.props;

		const { 
			focusIndex 
		} = this.state;

		let itemCount = 0;
		let itemIndex = -1;

		const processedChildren = React.Children.map(children, (child) => {
			// If child is `MenuItem`
			if (child.props._name === 'MenuItem') {
				itemCount++;
				itemIndex++;

				return React.cloneElement(child, {
					focus: focusIndex === itemIndex
				});
			} else {
				return child;
			}
		});

		this.itemCount = itemCount;

		return (
			<Flyout
				className={cx(
					'f-MenuFlyout',
					className
				)}
				style={style}
				anchorEl={anchorEl}
				isOpen={isOpen}
				onClose={onClose}
				onKeyDown={this.handleKeyDown}
			>
				{processedChildren}
			</Flyout>
		);
	}
}

MenuFlyout.propTypes = {

    // Overwrite or extend the styles
    className: PropTypes.string,

    style: PropTypes.object,

    anchorEl: PropTypes.object,

    isOpen: PropTypes.bool,

    onClose: PropTypes.func
};

MenuFlyout.defaultProps = {
	isOpen: false
};