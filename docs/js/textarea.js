import React from 'react';
import Code from '../util/code';
import { TextArea } from '../../src/js/uwp-ui-react';

export default class TextAreaDemo extends React.Component {

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
    }
  }

  onChange = (name, value) => {
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
    } = this.state;

    return (
      <div>
        <h2>TextArea</h2>
        <section>
          <TextArea
            header="Basic"
            value={text1}
            onChange={this.handleChange} />
        </section>
        <section>
          <TextArea
            header="Min height"
            minHeight={70}
            value={text2}
            onChange={this.handleChange} />
        </section>
        <section>
          <TextArea
            header="Rows"
            rows={4}
            value={text3}
            onChange={this.handleChange} />
        </section>
        <section>
          <TextArea
            header="Not resizeable"
            resize="none"
            value={text4}
            onChange={this.handleChange} />
        </section>
        <section>
          <TextArea
            header="Auto adjust height"
            autoHeight
            value={text5}
            onChange={this.handleChange} />
        </section>
        <section>
          <TextArea
            header="Required"
            required
            value={text6}
            onChange={this.handleChange} />
        </section>
        <section>
          <TextArea
            header="Error status"
            status="error"
            value={text7}
            onChange={this.handleChange} />
        </section>
        <section>
          <TextArea
            header="Disabled"
            disabled
            value="I'm disabled" />
        </section>
        <section>
          <TextArea
            header="Full width"
            fullWidth
            value={text8}
            onChange={this.handleChange} />
        </section>
        <Code>
{`import React from 'react';
import { TextArea } from 'uwp-ui-react';

export default class TextAreaDemo extends React.Component {
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
    }
  }

  onChange = (name, value) => {
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
    } = this.state;

    return (
      <div>
        <h2>TextArea</h2>
        <section>
          <TextArea
            header="Basic"
            value={text1}
            onChange={this.handleChange} />
        </section>
        <section>
          <TextArea
            header="Min height"
            minHeight={70}
            value={text2}
            onChange={this.handleChange} />
        </section>
        <section>
          <TextArea
            header="Rows"
            rows={4}
            value={text3}
            onChange={this.handleChange} />
        </section>
        <section>
          <TextArea
            header="Not resizeable"
            resize="none"
            value={text4}
            onChange={this.handleChange} />
        </section>
        <section>
          <TextArea
            header="Auto adjust height"
            autoHeight
            value={text5}
            onChange={this.handleChange} />
        </section>
        <section>
          <TextArea
            header="Required"
            required
            value={text6}
            onChange={this.handleChange} />
        </section>
        <section>
          <TextArea
            header="Error status"
            status="error"
            value={text7}
            onChange={this.handleChange} />
        </section>
        <section>
          <TextArea
            header="Disabled"
            disabled
            value="I'm disabled" />
        </section>
        <section>
          <TextArea
            header="Full width"
            fullWidth
            value={text8}
            onChange={this.handleChange} />
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