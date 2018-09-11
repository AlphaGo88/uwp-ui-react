import React from 'react';
import Code from '../util/code';

export default class Install extends React.Component {
  render() {
    return (
      <div>
        <section>
          <h4>Install via npm</h4>
          <Code disableToggle>
{`$ npm install --save uwp-ui-react`}
          </Code>
        </section>
      </div>
    );
  }
}