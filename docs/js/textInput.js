import React from 'react';
import Code from '../util/code';
import { TextInput } from '../../src/js/uwp-ui-react';

export default class TextInputDemo extends React.Component {

    render() {

        return (
            <div>
                <h2>Text Input</h2>
                <section>
                    <h4>Usage</h4>
                    <Code disableToggle>
{`import { TextInput } from 'uwp-ui-react';`}
                    </Code>
                </section>
                <h4>Default Text Input</h4>
                <section>
                    <TextInput header="Basic" placeholder="I'm placeholder"/>
                    <Code>
{`<TextInput header="Basic" placeholder="I'm placeholder"/>`}
                    </Code>
                </section>
                <section>
                    <TextInput header="Read only" readOnly value="I'm readonly"/>
                    <Code>
{`<TextInput header="Read only" readOnly value="I'm readonly"/>`}
                    </Code>
                </section>
                <section>
                    <TextInput header="Disabled" disabled value="I'm disabled"/>
                    <Code>
{`<TextInput header="Disabled" disabled value="I'm disabled"/>`}
                    </Code>
                </section>
                <section>
                    <TextInput header="Required" required/>
                    <Code>
{`<TextInput header="Required" required/>`}
                    </Code>
                </section>
                <section>
                	<TextInput header="Icon" leftIcon="user-o"/>
                    <Code>
{`<TextInput header="Icon" leftIcon="user-o"/>`}
                    </Code>
                </section>
                <section>
                	<TextInput header="Icon on the right" rightIcon="key" />
                    <Code>
{`<TextInput header="Icon on the right" rightIcon="key" />`}
                    </Code>
                </section>
                <section>
                    <TextInput header="Prefix" prefix="https://"/>
                    <Code>
{`<TextInput header="Prefix" prefix="https://"/>`}
                    </Code>
                </section>
                <section>
                    <TextInput header="Suffix" suffix="kg"/>
                    <Code>
{`<TextInput header="Suffix" suffix="kg"/>`}
                    </Code>
                </section>
                <section>
                    <TextInput header="Error" defaultValue="Error" error/>
                    <Code>
{`<TextInput header="Error" defaultValue="Error" error/>`}
                    </Code>
                </section>
                <section>
                    <TextInput header="Full width" fullWidth/>
                    <Code>
{`<TextInput header="Full width" fullWidth/>`}
                    </Code>
                </section>
                <br/>
                <h4>Underlined Text Input</h4>
                <section>
                    <TextInput header="Underlined" underlined/>
                    <Code>
{`<TextInput header="Underlined" underlined/>`}
                    </Code>
                </section>
                <section>
                    <TextInput header="Icon" underlined leftIcon="search"/>
                    <Code>
{`<TextInput header="Icon" underlined leftIcon="search"/>`}
                    </Code>
                </section>
                <section>
                    <TextInput header="Read only" underlined readOnly value="I'm readonly"/>
                    <Code>
{`<TextInput header="Read only" underlined readOnly value="I'm readonly"/>`}
                    </Code>
                </section>
                <section>
                    <TextInput header="Disabled" underlined disabled value="I'm disabled"/>
                    <Code>
{`<TextInput header="Disabled" underlined disabled value="I'm disabled"/>`}
                    </Code>
                </section>
            </div>
        )
    }
}