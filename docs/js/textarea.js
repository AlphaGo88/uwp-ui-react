import React from 'react';
import Code from '../util/code';
import { TextArea } from '../../src/js/fui';

export default class TextAreaDemo extends React.Component {

    render() {

        return (
            <div>
                <h2>TextArea</h2>
                <section>
                    <h4>Usage</h4>
                    <Code disableToggle>
{`import { TextArea } from 'fui';`}
                    </Code>
                </section>
                <section>
                    <TextArea header="Basic" />
                    <Code>
{`<TextArea header="Basic" />`}
                    </Code>
                </section>
                <section>
                    <TextArea header="Min height" minHeight={70} />
                    <Code>
{`<TextArea header="Min height" minHeight={70} />`}
                    </Code>
                </section>
                <section>
                    <TextArea header="Rows" rows={4} />
                    <Code>
{`<TextArea header="Rows" rows={4} />`}
                    </Code>
                </section>
                <section>
                    <TextArea header="Not resizeable" resize="none" />
                    <Code>
{`<TextArea header="Not resizeable" resize="none" />`}
                    </Code>
                </section>
                <section>
                    <TextArea header="Auto adjust height" autoHeight />
                    <Code>
{`<TextArea header="Auto adjust height" autoHeight />`}
                    </Code>
                </section>
                <section>
                    <TextArea header="Required" required />
                    <Code>
{`<TextArea header="Required" required />`}
                    </Code>
                </section>
                <section>
                    <TextArea header="Error status" status="error" />
                    <Code>
{`<TextArea header="Error status" status="error" />`}
                    </Code>
                </section>
                <section>
                    <TextArea header="Disabled" disabled value="I'm disabled" />
                    <Code>
{`<TextArea header="Disabled" disabled value="I'm disabled" />`}
                    </Code>
                </section>
                <section>
                    <TextArea header="Full width" fullWidth />
                    <Code>
{`<TextArea header="Full width" fullWidth />`}
                    </Code>
                </section>
            </div>
        )
    }
}