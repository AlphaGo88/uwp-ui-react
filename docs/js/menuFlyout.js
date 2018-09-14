import React from 'react';
import ReactDOM from 'react-dom';
import Code from '../util/code';
import {
  Button,
  MenuFlyout,
  MenuItem,
  MenuItemHeader,
  Seperator
} from '../../src/js/uwp-ui-react';

export default class MenuFlyoutDemo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menu1Open: false,
      menu2Open: false,
      menu3Open: false
    };
  }

  toggleMenu1 = () => {
    this.setState({ menu1Open: !this.state.menu1Open });
  }

  closeMenu1 = () => {
    this.setState({ menu1Open: false });
  }

  toggleMenu2 = () => {
    this.setState({ menu2Open: !this.state.menu2Open });
  }

  closeMenu2 = () => {
    this.setState({ menu2Open: false });
  }

  toggleMenu3 = () => {
    this.setState({ menu3Open: !this.state.menu3Open });
  }

  closeMenu3 = () => {
    this.setState({ menu3Open: false });
  }

  render() {
    return (
      <div>
        <h2>Menu Flyout</h2>
        <section>
          <h4>Basic</h4>
          <Button
            ref={el => this.button1 = ReactDOM.findDOMNode(el)}
            onClick={this.toggleMenu1}
          >
            OPEN
          </Button>
          <MenuFlyout
            anchorEl={this.button1}
            isOpen={this.state.menu1Open}
            onClose={this.closeMenu1}
          >
            <MenuItem icon="share" text="Share" onClick={this.closeMenu1} />
            <MenuItem icon="copy" text="Copy" onClick={this.closeMenu1} />
            <MenuItem icon="trash" text="Delete" onClick={this.closeMenu1} />
            <Seperator />
            <MenuItem text="Rename" reserveSpace onClick={this.closeMenu1} />
            <MenuItem text="Select" reserveSpace onClick={this.closeMenu1} />
          </MenuFlyout>
        </section>
        <section>
          <h4>Secondary Text</h4>
          <Button
            ref={el => this.button2 = ReactDOM.findDOMNode(el)}
            onClick={this.toggleMenu2}
          >
            OPEN
          </Button>
          <MenuFlyout
            anchorEl={this.button2}
            isOpen={this.state.menu2Open}
            onClose={this.closeMenu2}
          >
            <MenuItem
              icon={{ name: 'desktop', size: 16 }}
              text="Desktop"
              secondaryText="Build your app on desktop"
              onClick={this.closeMenu2}
            />
            <MenuItem
              icon={{ name: 'phone', size: 16 }}
              text="Moblie"
              secondaryText="Build your app on mobile devices"
              onClick={this.closeMenu2}
            />
          </MenuFlyout>
        </section>
        <section>
          <h4>Items with Header</h4>
          <Button
            ref={el => this.button3 = ReactDOM.findDOMNode(el)}
            onClick={this.toggleMenu3}
          >
            City
          </Button>
          <MenuFlyout
            anchorEl={this.button3}
            style={{ width: 180 }}
            isOpen={this.state.menu3Open}
            onClose={this.closeMenu3}
          >
            <MenuItemHeader text="China" />
            <MenuItem text="Beijing" onClick={this.closeMenu3} />
            <MenuItem text="Shanghai" onClick={this.closeMenu3} />
            <MenuItem text="Shenzhen" onClick={this.closeMenu3} />
            <Seperator />
            <MenuItemHeader text="United States" />
            <MenuItem text="San Francisco" onClick={this.closeMenu3} />
            <MenuItem text="Seattle" onClick={this.closeMenu3} />
            <MenuItem text="Log Angeles" onClick={this.closeMenu3} />
          </MenuFlyout>
        </section>
        <Code>
{`import React from 'react';
import ReactDOM from 'react-dom';
import { 
  Button, 
  MenuFlyout, 
  MenuItem,
  MenuItemHeader,
  Seperator 
} from 'uwp-ui-react';

export default class MenuFlyoutDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu1Open: false,
      menu2Open: false,
      menu3Open: false
    };
  }

  toggleMenu1 = () => {
    this.setState({ menu1Open: !this.state.menu1Open });
  }

  closeMenu1 = () => {
    this.setState({ menu1Open: false });
  }

  toggleMenu2 = () => {
    this.setState({ menu2Open: !this.state.menu2Open });
  }

  closeMenu2 = () => {
    this.setState({ menu2Open: false });
  }

  toggleMenu3 = () => {
    this.setState({ menu3Open: !this.state.menu3Open });
  }

  closeMenu3 = () => {
    this.setState({ menu3Open: false });
  }

  render() {
    return (
      <div>
        <h2>Menu Flyout</h2>
        <section>
          <h4>Basic</h4>
          <Button
            ref={el => this.button1 = ReactDOM.findDOMNode(el)}
            onClick={this.toggleMenu1}
          >
            OPEN
          </Button>
          <MenuFlyout
            anchorEl={this.button1}
            isOpen={this.state.menu1Open}
            onClose={this.closeMenu1}
          >
            <MenuItem icon="share" text="Share" onClick={this.closeMenu1} />
            <MenuItem icon="copy" text="Copy" onClick={this.closeMenu1} />
            <MenuItem icon="trash" text="Delete" onClick={this.closeMenu1} />
            <Seperator />
            <MenuItem text="Rename" reserveSpace onClick={this.closeMenu1} />
            <MenuItem text="Select" reserveSpace onClick={this.closeMenu1} />
          </MenuFlyout>
        </section>
        <section>
          <h4>Secondary Text</h4>
          <Button
            ref={el => this.button2 = ReactDOM.findDOMNode(el)}
            onClick={this.toggleMenu2}
          >
            OPEN
          </Button>
          <MenuFlyout
            anchorEl={this.button2}
            isOpen={this.state.menu2Open}
            onClose={this.closeMenu2}
          >
            <MenuItem
              icon={{ name: 'desktop', size: 16 }}
              text="Desktop"
              secondaryText="Build your app on desktop"
              onClick={this.closeMenu2}
            />
            <MenuItem
              icon={{ name: 'phone', size: 16 }}
              text="Moblie"
              secondaryText="Build your app on mobile devices"
              onClick={this.closeMenu2}
            />
          </MenuFlyout>
        </section>
        <section>
          <h4>Items with Header</h4>
          <Button
            ref={el => this.button3 = ReactDOM.findDOMNode(el)}
            onClick={this.toggleMenu3}
          >
            City
          </Button>
          <MenuFlyout
            anchorEl={this.button3}
            style={{ width: 180 }}
            isOpen={this.state.menu3Open}
            onClose={this.closeMenu3}
          >
            <MenuItemHeader text="China" />
            <MenuItem text="Beijing" onClick={this.closeMenu3} />
            <MenuItem text="Shanghai" onClick={this.closeMenu3} />
            <MenuItem text="Shenzhen" onClick={this.closeMenu3} />
            <Seperator />
            <MenuItemHeader text="United States" />
            <MenuItem text="San Francisco" onClick={this.closeMenu3} />
            <MenuItem text="Seattle" onClick={this.closeMenu3} />
            <MenuItem text="Log Angeles" onClick={this.closeMenu3} />
          </MenuFlyout>
        </section>
      </div>
    );
  }
}`}
        </Code>
      </div>
    )
  }
}