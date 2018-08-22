// Password Input
// ------------------------

import React from 'react';
import InputBase from '../internal/InputBase';

export default class PasswordInput extends React.Component {

	focus() {
		this.node.focus();
	}

	blur() {
		this.node.blur();
	}

	render() {
		return (
		    <InputBase
		    	ref={node => this.node = node}
		        type="password"
		        {...this.props}
		    />
		);
	}
}