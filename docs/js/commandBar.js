import React from 'react';
import ReactDOM from 'react-dom';
import Code from '../util/code';
import {
  CommandBar,
  CommandButton,
  Seperator,
  MenuFlyout,
  MenuItem
} from '../../src/js/uwp-ui-react';

export default class CommandBarDemo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  closeMenu = () => {
    this.setState({
      menuOpen: false
    });
  }

  handleClick = (event) => {
    alert('clicked!');
  }

  render() {

    return (
      <div>
        <h2>CommandBar</h2>
        <section>
          <h4>Basic</h4>
          <CommandBar>
            <CommandButton icon="pencil" onClick={this.handleClick} />
            <CommandButton icon="trash" onClick={this.handleClick} />
            <CommandButton icon="save" onClick={this.handleClick} />
          </CommandBar>
        </section>
        <section>
          <h4>Complex</h4>
          <CommandBar>
            <CommandBar.Content>
              Now playing...
            </CommandBar.Content>
            <CommandButton icon="random" label="Shuffle" />
            <CommandButton icon="repeat" label="Repeat" />
            <Seperator />
            <CommandButton icon="backward" label="Back" />
            <CommandButton icon="stop" label="Stop" />
            <CommandButton icon="play" label="Play" />
            <CommandButton icon="forward" label="Forward" />
            <CommandButton
              ref={el => this.moreButton = ReactDOM.findDOMNode(el)}
              icon="ellipsis-h"
              onClick={this.toggleMenu}
            />
            <MenuFlyout
              anchorEl={this.moreButton}
              isOpen={this.state.menuOpen}
              onClose={this.closeMenu}
            >
              <MenuItem text="Menu Item1" onClick={this.closeMenu} />
              <MenuItem text="Menu Item2" onClick={this.closeMenu} />
              <MenuItem text="Menu Item3" onClick={this.closeMenu} />
            </MenuFlyout>
          </CommandBar>
        </section>
        <Code>
{`import React from 'react';
import ReactDOM from 'react-dom';
import { 
  CommandBar, 
  CommandButton, 
  Seperator, 
  MenuFlyout,
  MenuItem
} from 'uwp-ui-react';

export default class CommandBarDemo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState({ 
      menuOpen: !this.state.menuOpen 
    });
  }

  closeMenu = () => {
    this.setState({ 
      menuOpen: false 
    });
  }

  handleClick = (event) => {
    alert('clicked!');
  }

  render() {
    return (
      <div>
        <h2>CommandBar</h2>
        <section>
          <h4>Basic</h4>
          <CommandBar>
            <CommandButton icon="pencil" onClick={this.handleClick} />
            <CommandButton icon="trash" onClick={this.handleClick} />
            <CommandButton icon="save" onClick={this.handleClick} />
          </CommandBar>
        </section>
        <section>
          <h4>Complex</h4>
          <CommandBar>
            <CommandBar.Content>
              Now playing...
            </CommandBar.Content>
            <CommandButton icon="random" label="Shuffle" />
            <CommandButton icon="repeat" label="Repeat" />
            <Seperator />
            <CommandButton icon="backward" label="Back" />
            <CommandButton icon="stop" label="Stop" />
            <CommandButton icon="play" label="Play" />
            <CommandButton icon="forward" label="Forward" />
            <CommandButton 
              ref={el => this.moreButton = ReactDOM.findDOMNode(el)}
              icon="ellipsis-h" 
              onClick={this.toggleMenu}
            />
            <MenuFlyout 
              anchorEl={this.moreButton}
              isOpen={this.state.menuOpen}
              onClose={this.closeMenu}
            >
              <MenuItem text="Menu Item1" onClick={this.closeMenu} />
              <MenuItem text="Menu Item2" onClick={this.closeMenu} />
              <MenuItem text="Menu Item3" onClick={this.closeMenu} />
            </MenuFlyout>
          </CommandBar>
        </section>
      </div>
    )
  } 
}`}
        </Code>
        <br/>
        <h3>Props of CommandBar</h3>
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
              <td>Inline styles.</td>
            </tr>
          </tbody>          
        </table>
        <br/>
        <h3>Props of CommandBarContent</h3>
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
              <td>Inline styles.</td>
            </tr>
          </tbody>          
        </table>
        <br/>
        <h3>Props of CommandButton</h3>
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
              <td>Inline styles.</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>string | object</td>
              <td>yes</td>
              <td></td>
              <td>Icon name or icon props.</td>
            </tr>
            <tr>
              <td>label</td>
              <td>string</td>
              <td></td>
              <td></td>
              <td>The button's label</td>
            </tr>
            <tr>
              <td>labelPosition</td>
              <td>string</td>
              <td></td>
              <td>'bottom'</td>
              <td>One of ['right, bottom'].</td>
            </tr>
            <tr>
              <td>onClick</td>
              <td>function</td>
              <td></td>
              <td></td>
              <td>Called when clicking the button.</td>
            </tr>
          </tbody>          
        </table>
        <br/>
      </div>
    )
  }
}