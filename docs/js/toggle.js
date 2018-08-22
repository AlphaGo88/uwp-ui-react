import React from 'react';
import Code from '../util/code';
import { Toggle } from '../../src/js/fui';

export default class ToggleDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toggleOn: true
        };
    }

    toggle = (name, isOn) => {
        this.setState({
            [name]: isOn
        });
    }

    render() {
        const { toggleOn } = this.state;

        return (
        	<div>
                <h2>Toggle</h2>
                <section>
                    <h4>Usage</h4>
                    <Code disableToggle>
{`import { Toggle } from 'fui';`}
                    </Code>
                </section>
                <section>
                    <Toggle 
                        name="toggleOn"
                        header="Toggle"
                        isOn={toggleOn} 
                        onChange={this.toggle}
                    />
                    <Code>
{`<Toggle 
    name="toggleOn"
    header="Toggle"
    isOn={toggleOn} 
    onChange={this.toggle}
/>`}
                    </Code>
                </section>
                <section>
                    <Toggle header="Disabled" disabled/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Toggle header="Disabled" isOn={true} disabled/>
                    <Code>
{`<Toggle header="Disabled" disabled/>
<Toggle header="Disabled" isOn={true} disabled/>`}
                    </Code>
                </section>
            </div>
        )
    }
}