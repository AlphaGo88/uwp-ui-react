import React from 'react';
import ReactDOM from 'react-dom';
import Code from '../util/code';
import { Button, HyperLink, Flyout } from '../../src/js/uwp-ui-react';

export default class FlyoutDemo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      flyoutOpen: false
    };
  }

  toggleFlyout = () => {
    this.setState({
      flyoutOpen: !this.state.flyoutOpen
    });
  }

  closeFlyout = () => {
    this.setState({
      flyoutOpen: false
    });
  }

  render() {
    return (
      <div>
        <h2>Flyout</h2>
        <section>
          <h4>Flyout with custom content</h4>
          <Button
            ref={el => this.button = ReactDOM.findDOMNode(el)}
            onClick={this.toggleFlyout}
          >
            OPEN
          </Button>
          <Flyout
            anchorEl={this.button}
            isOpen={this.state.flyoutOpen}
            onClose={this.closeFlyout}
            style={{ padding: '10px 20px' }}
          >
            <p>Confirm to delete?</p>
            <div
              style={{
                marginTop: 10,
                textAlign: 'right'
              }}
            >
              <HyperLink onClick={this.closeFlyout}>Yes</HyperLink>
              &nbsp;&nbsp;
              <HyperLink onClick={this.closeFlyout}>Cancel</HyperLink>
            </div>
          </Flyout>
        </section>
        <Code>
{`import React from 'react';
import ReactDOM from 'react-dom';
import { Button, HyperLink, Flyout } from 'uwp-ui-react';

export default class FlyoutDemo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      flyoutOpen: false
    };
  }

  toggleFlyout = () => {
    this.setState({ 
      flyoutOpen: !this.state.flyoutOpen 
    });
  }

  closeFlyout = () => {
    this.setState({ 
      flyoutOpen: false 
    });
  }

  render() {
    return (
      <div>
        <h2>Flyout</h2>
        <section>
          <h4>Flyout with custom content</h4>
          <Button 
            ref={el => this.button = ReactDOM.findDOMNode(el)}
            onClick={this.toggleFlyout}
          >
            OPEN
          </Button>
          <Flyout
            anchorEl={this.button}
            isOpen={this.state.flyoutOpen}
            onClose={this.closeFlyout}
            style={{padding: '10px 20px'}}
          >
            <p>Confirm to delete?</p>
            <div 
              style={{
                marginTop: 10,
                textAlign: 'right'
              }}
            >
              <HyperLink onClick={this.closeFlyout}>Yes</HyperLink>
              &nbsp;&nbsp;
              <HyperLink onClick={this.closeFlyout}>Cancel</HyperLink>
            </div>
          </Flyout>
        </section>
      </div>
    );
  }
}`}
        </Code>
        <br />
        <h3>Props</h3>
        <table className="prop-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Required</th>
              <th>Default</th>
              <th>Desc</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>className</td>
              <td>string</td>
              <td></td>
              <td></td>
              <td>Overwrite or extend the styles.</td>
            </tr>
            <tr>
              <td>style</td>
              <td>object</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>anchorEl</td>
              <td>object</td>
              <td></td>
              <td></td>
              <td>The anchor dom node. The flyout will be positioned according to it.</td>
            </tr>
            <tr>
              <td>isOpen</td>
              <td>bool</td>
              <td></td>
              <td>false</td>
              <td>Whether the flyout is open.</td>
            </tr>
            <tr>
              <td>focus</td>
              <td>bool</td>
              <td></td>
              <td>true</td>
              <td>Focus the flyout element after open it.</td>
            </tr>
            <tr>
              <td>onClose</td>
              <td>function</td>
              <td></td>
              <td></td>
              <td>
                Called when the the flyout is closed.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}