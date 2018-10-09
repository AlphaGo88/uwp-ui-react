import React from 'react';
import Code from '../util/code';
import { FileInput } from '../../src/js/uwp-ui-react';

export default class FileInputDemo extends React.Component {

  render() {

    return (
      <div>
        <h2>File Input</h2>
        <section>
          <FileInput header="Basic" />
        </section>
        <section>
          <FileInput header="Accept" accept="image/gif,image/jpeg" />
        </section>
        <section>
          <FileInput header="Multiple" multiple />
        </section>
        <section>
          <FileInput header="Disabled" disabled />
        </section>
        <section>
          <FileInput header="Underlined" underlined />
        </section>
        <section>
          <FileInput header="Underlined disabled" underlined disabled />
        </section>
        <section>
          <FileInput header="Error" error />
        </section>
        <section>
          <FileInput header="FullWidth" fullWidth />
        </section>
        <Code>
{`import React from 'react';
import { FileInput } from 'uwp-ui-react';

export default class FileInputDemo extends React.Component {
  render() {
    return (
      <div>
        <h3>File Input</h3>
        <section>
          <FileInput header="Basic" />
        </section>
        <section>
          <FileInput header="Accept" accept="image/gif,image/jpeg" />
        </section>
        <section>
          <FileInput header="Multiple" multiple />
        </section>
        <section>
          <FileInput header="Disabled" disabled />
        </section>
        <section>
          <FileInput header="Underlined" underlined />
        </section>
        <section>
          <FileInput header="Underlined disabled" underlined disabled />
        </section>
        <section>
          <FileInput header="Error" error />
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