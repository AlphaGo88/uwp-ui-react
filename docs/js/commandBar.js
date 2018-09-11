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
      </div>
    )
  }
}