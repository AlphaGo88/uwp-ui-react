// Navigation
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class Nav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            focusIndex: -1
        };
    }

    componentWillMount() {
        this.update(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.update(nextProps);
    }

    update(props) {        
        let itemCount = 0;

        React.Children.forEach(props.children, (child) => {
            if (child.props._name === 'NavItem') {
                itemCount++;
            }
        });
        this.itemCount = itemCount;
        this.setState({
            focusIndex: -1 
        });
    }

    handleItemFocus(itemIndex) {
        this.setState({
            focusIndex: itemIndex 
        });
    }

    handleItemClick(itemIndex) {
        this.setState({
            activeIndex: itemIndex 
        });
    }

    handleKeyDown = (event) => {
        const { focusIndex } = this.state;

        switch (event.which) {
            // Enter
            case 13:
                if (!event.target.href) {
                    event.target.click();
                }
                break;

            // Down
            case 40:
                event.preventDefault();
                if (focusIndex < this.itemCount - 1) {
                    this.setState({
                        focusIndex: focusIndex + 1
                    });
                }
                break;

            // Up
            case 38:
                event.preventDefault();
                if (focusIndex > 0) {
                    this.setState({
                        focusIndex: focusIndex - 1
                    });
                }
                break;
            default:
        }
    }

    render() {
        const { 
            className,
            style,
            children
        } = this.props;

        const { 
            activeIndex, 
            focusIndex
        } = this.state;

        let itemIndex = -1;
        const _children = React.Children.map(children, (child) => {
            if (child.props._name === 'NavItem') {
                itemIndex++;

                // The active nav item can be tab focused.
                // If there is no active nav item, the first nav item can be tab focused.
                let tabIndex = -1;
                if (itemIndex === activeIndex || activeIndex === -1 && itemIndex === 0) {
                    tabIndex = 0;
                }

                const idx = itemIndex;
                return React.cloneElement(child, {
                    tabIndex,
                    focus: focusIndex === itemIndex,
                    active: activeIndex === itemIndex,
                    onKeyDown: this.handleKeyDown,
                    onFocus: () => this.handleItemFocus(idx),
                    onClick: () => {
                        child.props.onClick && child.props.onClick();
                        this.handleItemClick(idx);
                    }
                });
            } else {
                return child;
            }
        });        

        return (
            <div
                className={cx(
                    'f-nav',
                    className
                )}
                style={style}
            >
                {_children}
            </div>
        );
    }
}

Nav.propTypes = {

    // Overwrite or extend the styles
    className: PropTypes.string,

    style: PropTypes.object
};

Nav.defaultProps = {};