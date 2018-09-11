import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { atomDark } from 'react-syntax-highlighter/styles/prism';

export default class Code extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const { disableToggle } = this.props;
    const { visible } = this.state;

    return (
      <div>
        {!disableToggle &&
          <div className="code-header">
            <span
              className="code-toggle"
              onClick={this.toggle}
            >
              <i className="fa fa-code"></i>
              {visible ? 'Hide Code' : 'Show Code'}
            </span>
          </div>
        }
        {(disableToggle || visible) &&
          <SyntaxHighlighter
            language='jsx' style={atomDark}
          >
            {this.props.children}
          </SyntaxHighlighter>
        }
      </div>
    );
  }
}