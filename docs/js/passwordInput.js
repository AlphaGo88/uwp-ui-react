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
              <td>header</td>
              <td>node</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>width</td>
              <td>number | string</td>
              <td></td>
              <td></td>
              <td>Set the width e.g. 200, '50%'.</td>
            </tr>
            <tr>
              <td>name</td>
              <td>string</td>
              <td></td>
              <td></td>
              <td>The name that identifies the input.</td>
            </tr>
            <tr>
              <td>value</td>
              <td>string</td>
              <td></td>
              <td>''</td>
              <td></td>
            </tr>
            <tr>
              <td>underlined</td>
              <td>bool</td>
              <td></td>
              <td>false</td>
              <td>True to display underlined style.</td>
            </tr>
            <tr>
              <td>leftIcon</td>
              <td>string | object</td>
              <td></td>
              <td></td>
              <td>Icon name or object of icon props.</td>
            </tr>
            <tr>
              <td>rightIcon</td>
              <td>string | object</td>
              <td></td>
              <td></td>
              <td>Icon name or object of icon props.</td>
            </tr>
            <tr>
              <td>error</td>
              <td>bool</td>
              <td></td>
              <td></td>
              <td>True to display error style.</td>
            </tr>
            <tr>
              <td>fullWidth</td>
              <td>bool</td>
              <td></td>
              <td>false</td>
              <td>If true, the button will take up the full width of the horizontal space.</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>function</td>
              <td></td>
              <td></td>
              <td>
                Called when the value changes.
                <br/>
                @param [string] `name` The 'name' prop.
                <br/>
                @param [string] `value` The input's value.
              </td>
            </tr>
            <tr>
              <td>...</td>
              <td></td>
              <td></td>
              <td></td>
              <td>Other props that html &lt;input type="password"&gt; supports.</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}