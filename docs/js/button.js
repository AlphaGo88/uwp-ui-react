import React from 'react';
import Code from '../util/code';
import { Button, Icon } from '../../src/js/uwp-ui-react';

export default class ButtonDemo extends React.Component {

  render() {
    return (
      <div>
        <h2>Button</h2>
        <section>
          <h4>Default</h4>
          <div>
            <Button>Default</Button>&nbsp;&nbsp;
            <Button primary>Primary</Button>
          </div>
        </section>
        <section>
          <h4>With icon</h4>
          <div>
            <Button primary>
              <Icon name="heart" />Follow
            </Button>&nbsp;&nbsp;
            <Button>
              <Icon name="comment" />Comment
            </Button>
          </div>
        </section>
        <section>
          <h4>Text wrap</h4>
          <div>
            <Button style={{ width: 180 }}>Button with text that would wrap</Button>&nbsp;&nbsp;
            <Button primary style={{ width: 180 }}>Button with text that would wrap</Button>
          </div>
        </section>
        <section>
          <h4>Disabled</h4>
          <div>
            <Button disabled>Search</Button>&nbsp;&nbsp;
            <Button primary disabled>Search</Button>
          </div>
        </section>
        <section>
          <h4>Full width</h4>
          <div>
            <Button fullWidth>Full width</Button>
          </div>
        </section>
        <Code>
          {`import React from 'react';
import { Button, Icon } from 'uwp-ui-react';

export default class ButtonDemo extends React.Component {
  render() {
    return (
      <div>
        <h2>Button</h2>
        <section>
          <h4>Default</h4>
          <div>
            <Button>Default</Button>
            <Button primary>Primary</Button>
          </div>
        </section>
        <section>
          <h4>With icon</h4>
          <div>
            <Button primary>
              <Icon name="heart"/>Follow
            </Button>
            <Button>
              <Icon name="comment"/>Comment
            </Button>
          </div>
        </section>
        <section>
          <h4>Text wrap</h4>
          <div>
            <Button style={{width:180}}>Button with text that would wrap</Button>
            <Button primary style={{width:180}}>Button with text that would wrap</Button>
          </div>
        </section>
        <section>
          <h4>Disabled</h4>
          <div>
            <Button disabled>Search</Button>
            <Button primary disabled>Search</Button>
          </div>
        </section>
        <section>
          <h4>Full width</h4>
          <div>
            <Button fullWidth>Full width</Button>
          </div>
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
              <td>primary</td>
              <td>bool</td>
              <td></td>
              <td>false</td>
              <td>If true, the button's color style is 'primary'.</td>
            </tr>
            <tr>
              <td>fullWidth</td>
              <td>bool</td>
              <td></td>
              <td>false</td>
              <td>If true, the button will take up the full width of the horizontal space.</td>
            </tr>
            <tr>
              <td>...</td>
              <td></td>
              <td></td>
              <td></td>
              <td>Other props that html button supports.</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}