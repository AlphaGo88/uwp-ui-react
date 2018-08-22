import React from 'react';
import Code from '../util/code';
import { PasswordInput } from '../../src/js/fui';

export default class PasswordInputDemo extends React.Component {

    render() {

        return (
            <div>
                <h2>Password Input</h2>
                <section>
                    <h4>Usage</h4>
                    <Code disableToggle>
{`import { PasswordInput } from 'fui';`}
                    </Code>
                </section>
                <section>
                    <PasswordInput header="Password" />
                    <Code>
{`<PasswordInput header="Password" />`}
                    </Code>
                </section>
                <section>
                    <PasswordInput header="Disabled" value="000000" disabled />
                    <Code>
{`<PasswordInput header="Disabled" value="000000" disabled />`}
                    </Code>
                </section>
                <section>
                    <PasswordInput header="Underlined" underlined />
                    <Code>
{`<PasswordInput header="Underlined" underlined />`}
                    </Code>
                </section>
                <section>
                    <PasswordInput header="Underlined disabled" value="000000" underlined disabled />
                    <Code>
{`<PasswordInput header="Underlined disabled" value="000000" underlined disabled />`}
                    </Code>
                </section>
            </div>
        )
    }
}