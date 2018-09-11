// Message
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';

export default class Message extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      exit: false
    };
  }

  componentDidMount() {
    this.exitTimeOut = setTimeout(this.exit, this.props.duration);
  }

  componentWillUnmount() {
    clearTimeout(this.exitTimeOut);
  }

  exit = () => {
    this.setState({
      exit: true
    });
  }

  render() {
    const {
      type,
      children
    } = this.props;
    const {
      exit
    } = this.state;

    let icon = null;
    switch (type) {
      case 'success':
        icon = 'check-circle';
        break;
      case 'info':
      case 'warning':
        icon = 'exclamation-circle';
        break;
      case 'error':
        icon = 'times-circle';
      default:
    }

    return (
      <div 
        className={cx(
          'f-Msg', 
          type,
          { exit }
        )} 
        onClick={this.exit}
      >
        {icon &&
          <Icon name={icon}/>
        }
        <span className="f-Msg-text">
          {children}
        </span>
      </div>
    );
  }
};

Message.propTypes = {
  type: PropTypes.oneOf(['msg', 'dark', 'success', 'info', 'warning', 'error']),
  duration: PropTypes.number
};

Message.defaultProps = {
  type: 'msg',
  duration: 4000
};