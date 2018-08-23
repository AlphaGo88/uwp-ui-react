import React from 'react';
import Code from '../util/code';
import { HyperLink } from '../../src/js/uwp-ui-react';

export default class LinkDemo extends React.Component {

    render() {

        return (
            <div>
                <h2>HyperLink</h2>
                <section>
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
                </section>
            </div>
        )
    }
}