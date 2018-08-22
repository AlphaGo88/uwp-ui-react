// TextInput
// ------------------------

import React from 'react';
import InputBase from '../internal/InputBase';

export default class TextInput extends React.Component {

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
		        type="text"
		        {...this.props}
		    />
		);
	}
}