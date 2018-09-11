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
      </div>
    )
  }
}