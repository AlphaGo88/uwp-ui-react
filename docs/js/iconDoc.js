import React from 'react';
import Code from '../util/code';
import { HyperLink, Icon } from '../../src/js/uwp-ui-react';

export default class IconDoc extends React.Component {

	render() {
		return (
			<div>
				<div>
					Uwp-ui-react uses <HyperLink href="https://fontawesome.com/v4.7.0/">font-awesome-v4.7.0</HyperLink> as iconfont.
				</div>
				<div>
					Please include it in your html:
					<Code disableToggle>
{`<link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">`}
					</Code>
				</div>
			</div>
		)
	}
}