// Grid
// ---------------------------

import React from 'react';
import cx from 'classnames';

export default function Grid(props) {
  const { className, style, children } = props;

  return (
    <div 
      className={cx('f-Grid', className)}
      style={style}
    >
      {children}
    </div>
  );
}