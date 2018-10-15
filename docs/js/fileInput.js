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
        <section>
          <FileInput header="FullWidth" fullWidth />
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
              <td>width</td>
              <td>number | string</td>
              <td></td>
              <td></td>
              <td>Set the width e.g. 200, '50%'</td>
            </tr>
            <tr>
              <td>fullWidth</td>
              <td>bool</td>
              <td></td>
              <td>false</td>
              <td>If true, the button will take up the full width of the horizontal space.</td>
            </tr>
            <tr>
              <td>header</td>
              <td>node</td>
              <td></td>
              <td></td>
              <td>The header text.</td>
            </tr>
            <tr>
              <td>required</td>
              <td>bool</td>
              <td></td>
              <td>false</td>
              <td></td>
            </tr>
            <tr>
              <td>error</td>
              <td>bool</td>
              <td></td>
              <td>false</td>
              <td>True to display error style.</td>
            </tr>
            <tr>
              <td>underlined</td>
              <td>bool</td>
              <td></td>
              <td>false</td>
              <td>True to display underlined style.</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>bool</td>
              <td></td>
              <td>false</td>
              <td></td>
            </tr>
            <tr>
              <td>buttonText</td>
              <td>string</td>
              <td></td>
              <td>'Browse..'</td>
              <td></td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>function</td>
              <td></td>
              <td></td>
              <td>
                Called when the file(s) change.
                <br/>
                @param [object] `files` The files object.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}