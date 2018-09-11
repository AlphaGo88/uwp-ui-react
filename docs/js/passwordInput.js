import React from 'react';
import Code from '../util/code';
import { PasswordInput } from '../../src/js/uwp-ui-react';

export default class PasswordInputDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pw1: '',
      pw2: '',
    }
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <h2>Password Input</h2>
          <section>
            <PasswordInput 
              header="Password" 
              name="pw1" 
              value={this.state.pw1}
              onChange={this.handleChange} 
            />
          </section>
          <section>
            <PasswordInput 
              header="Disabled" 
              value="000000" 
              disabled 
            />
          </section>
          <section>
            <PasswordInput 
              header="Underlined" 
              name="pw2" 
              value={this.state.pw2}
              underlined 
              onChange={this.handleChange} 
            />
          </section>
          <section>
            <PasswordInput 
              header="Underlined disabled" 
              value="000000" 
              underlined 
              disabled 
            />
          </section>
          <Code>
{`import React from 'react';
import { PasswordInput } from 'uwp-ui-react';

export default class PasswordInputDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pw1: '',
      pw2: '',
    }
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  render() {

    return (
      <div>
        <h2>Password Input</h2>
        <section>
          <PasswordInput 
            header="Password" 
            name="pw1" 
            value={this.state.pw1}
            onChange={this.handleChange} 
          />
        </section>
        <section>
          <PasswordInput 
            header="Disabled" 
            value="000000" 
            disabled 
          />
        </section>
        <section>
          <PasswordInput 
            header="Underlined" 
            name="pw2" 
            value={this.state.pw2}
            underlined 
            onChange={this.handleChange} 
          />
        </section>
        <section>
          <PasswordInput 
            header="Underlined disabled" 
            value="000000" 
            underlined 
            disabled 
          />
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