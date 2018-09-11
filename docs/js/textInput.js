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
      </div>
    )
  }
}