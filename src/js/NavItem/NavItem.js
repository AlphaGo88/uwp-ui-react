// Navigation Item
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class NavItem extends React.Component {

    componentDidUpdate(prevProps, prevState) {
        if (this.props.focus) {
            this.el.focus();
        }
    }

    focus() {
        this.el.focus();
    }

    render() {
        const { 
            _name,
            className,
            tabIndex,
            active,
            focus,
            children,
            ...other
        } = this.props;

        return (
        	<a
                ref={el => this.el = el}
        		className={cx(
        			'f-nav-item',
        			{ 
                        active
                    },
        			className
        		)}
                tabIndex={tabIndex}
                {...other}
        	>
        		{children}
        	</a>
        );
    }
}

NavItem.propTypes = {

    // Overwrite or extend the styles
    className: PropTypes.string,

    tabIndex: PropTypes.number,

    focus: PropTypes.bool,

    active: PropTypes.bool
};

NavItem.defaultProps = {
    _name: 'NavItem',
    tabIndex: 0
};