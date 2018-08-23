import React from 'react';
import Code from '../util/code';
import { Button, Icon } from '../../src/js/uwp-ui-react';

export default class ButtonDemo extends React.Component {

    render() {

        return (
            <div>
                <h2>Button</h2>
                <section>
                    <h4>Usage</h4>
                    <Code disableToggle>
{`import { Button } from 'uwp-ui-react';`}
                    </Code>
                </section>
                <section>
                    <h4>Default</h4>
                    <div>
                        <Button>Default</Button>&nbsp;&nbsp;
                        <Button primary>Primary</Button>&nbsp;&nbsp;
                    </div>
                    <Code>
{`<Button>Default</Button>
<Button primary>Primary</Button>`}
                    </Code>
                </section>
                <section>
                    <h4>With icon</h4>
                    <div>
                        <Button primary>
                            <Icon name="heart"/>Follow
                        </Button>&nbsp;&nbsp;
                        <Button>
                            <Icon name="comment"/>Comment
                        </Button>
                    </div>
                    <Code>
{`<Button primary>
    <Icon name="heart"/>Follow
</Button>
<Button>
    <Icon name="comment"/>Comment
</Button>`}
                    </Code>
                </section>
                <section>
                    <h4>Text wrap</h4>
                    <div>
                        <Button style={{width:180}}>Button with text that would wrap</Button>&nbsp;&nbsp;
                        <Button primary style={{width:180}}>Button with text that would wrap</Button>&nbsp;&nbsp;
                    </div>
                    <Code>
{`<Button style={{width:180}}>
    Button with text that would wrap
</Button>
<Button primary style={{width:180}}>
    Button with text that would wrap
</Button>`}
                    </Code>
                </section>
                <section>
                    <h4>Disabled</h4>
                    <Button disabled>Search</Button>&nbsp;&nbsp;
                    <Button primary disabled>Search</Button>&nbsp;&nbsp;
                    <Code>
{`<Button disabled>Search</Button>
<Button primary disabled>Search</Button>`}
                    </Code>
                </section>
                <section>
                    <h4>Full width</h4>
                    <Button fullWidth>Full width</Button>
                    <Code>
{`<Button fullWidth>Full width</Button>`}
                    </Code>
                </section>
            </div>
        )
    }
}