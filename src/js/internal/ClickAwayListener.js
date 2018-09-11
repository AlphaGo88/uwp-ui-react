// ClickAwayListener
// ------------------------

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const isDescendant = (el, target) => {
  if (target !== null) {
    return el === target || isDescendant(el, target.parentNode);
  }
  return false;
};

export default class ClickAwayListener extends React.Component {

  componentDidMount() {
    document.addEventListener('click', this.handleClickAway);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickAway);
  }

  handleClickAway = (event) => {
    if (event.defaultPrevented) return;

    const el = ReactDOM.findDOMNode(this);

    if (document.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
      this.props.onClickAway(event);
    }
  }

  render() {
    return this.props.children;
  }
}

ClickAwayListener.propTypes = {
  onClickAway: PropTypes.func
};

ClickAwayListener.defaultProps = {
  onClickAway: () => {}
}