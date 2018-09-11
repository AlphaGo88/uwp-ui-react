// Grid Cell
// ---------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function GridCell(props) {
	const { 
		className, 
		style, 
		width,
		col,
		mdCol,
		smCol,
		offset,
		mdOffset,
		smOffset,
		children 
	} = props;

	return (
		<div 
			className={cx(
				'f-GridCell',
				{
					'fixed': !!width,
					[`col-${col}`]: col,
					[`md-col-${mdCol}`]: mdCol,
					[`sm-col-${smCol}`]: smCol,
					[`col-offset-${offset}`]: offset,
					[`md-col-offset-${mdOffset}`]: mdCol,
					[`sm-col-offset-${smOffset}`]: smCol,
				},
				className
			)}
			style={{
				...style,
				width
			}}
		>
			{children}
		</div>
	);
}

GridCell.propTypes = {
	// Overwrite or extend the styles
	className: PropTypes.string,

	style: PropTypes.object,

	// If set, the cell's width is fixed by [px].
	width: PropTypes.number,

	col: PropTypes.number,

	mdCol: PropTypes.number,

	smCol: PropTypes.number,

	offset: PropTypes.number,

	mdOffset: PropTypes.number,

	smOffset: PropTypes.number,
};