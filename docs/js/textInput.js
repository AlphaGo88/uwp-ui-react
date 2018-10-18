import React from 'react';
import Code from '../util/code';
import { TextInput } from '../../src/js/uwp-ui-react';

export default class TextInputDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
      text7: '',
      text8: '',
      text9: '',
      text10: '',
    }
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    const {
      text1,
      text2,
      text3,
      text4,
      text5,
      text6,
      text7,
      text8,
      text9,
      text10,
    } = this.state;

    return (
      <div>
        <h2>Text Input</h2>
        <h4>Default Text Input</h4>
        <section>
          <TextInput 
            header="Basic" 
            placeholder="I'm placeholder"
            name="text1"
            value={text1}
            onChange={this.handleChange} 
          />
        </section>
        <section>
          <TextInput header="Read only" readOnly value="I'm readonly"/>
        </section>
        <section>
          <TextInput header="Disabled" disabled value="I'm disabled"/>
        </section>
        <section>
          <TextInput 
            header="Required" 
            required
            name="text2"
            value={text2}
            onChange={this.handleChange}
          />
        </section>
        <section>
          <TextInput 
            header="Icon" 
            leftIcon="user-o"
            name="text3"
            value={text3}
            onChange={this.handleChange}
          />
        </section>
        <section>
          <TextInput 
            header="Icon on the right" 
            rightIcon="key"
            name="text4"
            value={text4}
            onChange={this.handleChange}
          />
        </section>
        <section>
          <TextInput 
            header="Prefix" 
            prefix="https://"
            name="text5"
            value={text5}
            onChange={this.handleChange}
          />
        </section>
        <section>
          <TextInput 
            header="Suffix" 
            prefix="kg"
            name="text6"
            value={text6}
            onChange={this.handleChange}
          />
        </section>
        <section>
          <TextInput 
            header="Error" 
            name="text7"
            value={text7}
            error
            onChange={this.handleChange}
          />
        </section>
        <section>
          <TextInput 
            header="Full width" 
            name="text8"
            value={text8}
            fullWidth
            onChange={this.handleChange}
          />
        </section>
        <br/>
        <h4>Underlined Text Input</h4>
        <section>
          <TextInput 
            header="Underlined" 
            name="text9"
            value={text9}
            underlined
            onChange={this.handleChange}
          />
        </section>
        <section>
          <TextInput 
            header="Icon" 
            leftIcon="search"
            name="text10"
            value={text10}
            underlined
            onChange={this.handleChange}
          />
        </section>
        <section>
          <TextInput 
            header="Read only" 
            underlined 
            readOnly 
            value="I'm readonly" 
          />
        </section>
        <section>
          <TextInput 
            header="Disabled" 
            underlined 
            disabled 
            value="I'm disabled"
          />
        </section>
        <Code>
{`import React from 'react';
import { TextInput } from 'uwp-ui-react';

export default class TextInputDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
      text7: '',
      text8: '',
      text9: '',
      text10: '',
    }
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }
  
  render() {
    const {
      text1,
      text2,
      text3,
      text4,
      text5,
      text6,
      text7,
      text8,
      text9,
      text10,
    } = this.state;

    return (
      <div>
        <h2>Text Input</h2>
        <h4>Default Text Input</h4>
        <section>
          <TextInput 
            header="Basic" 
            placeholder="I'm placeholder"
            name="text1"
            value={text1}
            onChange={this.handleChange} 
          />
        </section>
        <section>
          <TextInput header="Read only" readOnly value="I'm readonly"/>
        </section>
        <section>
          <TextInput header="Disabled" disabled value="I'm disabled"/>
        </section>
        <section>
          <TextInput 
            header="Required" 
            required
            name="text2"
            value={text2}
            onChange={this.handleChange}
          />
        </section>
        <section>
          <TextInput 
            header="Icon" 
            leftIcon="user-o"
            name="text3"
            value={text3}
            onChange={this.handleChange}
          />
        </section>
        <section>
          <TextInput 
            header="Icon on the right" 
            rightIcon="key"
            name="text4"
            value={text4}
            onChange={this.handleChange}
          />
        </section>
        <section>
          <TextInput 
            header="Prefix" 
            prefix="https://"
            name="text5"
            value={text5}
            onChange={this.handleChange}
          />
        </section>
        <section>
          <TextInput 
            header="Suffix" 
            prefix="kg"
            name="text6"
            value={text6}
            onChange={this.handleChange}
          />
        </section>
        <section>
          <TextInput 
            header="Error" 
            name="text7"
            value={text7}
            error
            onChange={this.handleChange}
          />
        </section>
        <section>
          <TextInput 
            header="Full width" 
            name="text8"
            value={text8}
            fullWidth
            onChange={this.handleChange}
          />
        </section>
        <br/>
        <h4>Underlined Text Input</h4>
        <section>
          <TextInput 
            header="Underlined" 
            name="text9"
            value={text9}
            underlined
            onChange={this.handleChange}
          />
        </section>
        <section>
          <TextInput 
            header="Icon" 
            leftIcon="search"
            name="text10"
            value={text10}
            underlined
            onChange={this.handleChange}
          />
        </section>
        <section>
          <TextInput 
            header="Read only" 
            underlined 
            readOnly 
            value="I'm readonly" 
          />
        </section>
        <section>
          <TextInput 
            header="Disabled" 
            underlined 
            disabled 
            value="I'm disabled"
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
              <td>prefix</td>
              <td>node</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>suffix</td>
              <td>node</td>
              <td></td>
              <td></td>
              <td></td>
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
              <td>Other props that html &lt;input type="text"&gt; supports.</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}