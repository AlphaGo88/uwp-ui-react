import React from 'react';
import Code from '../util/code';
import { HyperLink } from '../../src/js/uwp-ui-react';

export default class LinkDemo extends React.Component {

  render() {
    return (
      <div>
        <h2>HyperLink</h2>
        <section>
          <h4>Usage</h4>
          <Code disableToggle>
            {`import { HyperLink } from 'uwp-ui-react';`}
          </Code>
          <h4>HyperLink</h4>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Read the <HyperLink target="_blank" underlined href="https://docs.microsoft.com/zh-cn/windows/uwp/design/basics/design-and-ui-intro">Contoso Privacy Statement</HyperLink> in your browser.
            Donec pharetra, enim sit amet mattis tincidunt, felis nisi semper lectus, vel porta diam nisi in augue.
          </div>
          <Code>
            {`<div>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Read the <HyperLink target="_blank" underlined href="https://docs.microsoft.com/zh-cn/windows/uwp/design/basics/design-and-ui-intro">Contoso Privacy Statement</HyperLink> in your browser.
  Donec pharetra, enim sit amet mattis tincidunt, felis nisi semper lectus, vel porta diam nisi in augue.
</div>`}
          </Code>
        </section>
        <section>
          <h4>Disabled HyperLink</h4>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Read the <HyperLink target="_blank" href="https://docs.microsoft.com/zh-cn/windows/uwp/design/basics/design-and-ui-intro" disabled>Contoso Privacy Statement</HyperLink> in your browser.
            Donec pharetra, enim sit amet mattis tincidunt, felis nisi semper lectus, vel porta diam nisi in augue.
          </div>
          <Code>
            {`<div>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Read the <HyperLink target="_blank" href="https://docs.microsoft.com/zh-cn/windows/uwp/design/basics/design-and-ui-intro" disabled>Contoso Privacy Statement</HyperLink> in your browser.
  Donec pharetra, enim sit amet mattis tincidunt, felis nisi semper lectus, vel porta diam nisi in augue.
</div>`}
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
                <td>underlined</td>
                <td>bool</td>
                <td></td>
                <td>false</td>
                <td>If true, the link text will have an underline.</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>bool</td>
                <td></td>
                <td>false</td>
                <td></td>
              </tr>
              <tr>
                <td>...</td>
                <td></td>
                <td></td>
                <td></td>
                <td>Other props that html &lt;a&gt; supports.</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}