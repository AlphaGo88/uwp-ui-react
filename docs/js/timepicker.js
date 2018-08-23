import React from 'react';
import Code from '../util/code';
import { TimePicker } from '../../src/js/uwp-ui-react';

export default class TimePickerDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            time1: '',
            time2: '',
            time3: ''
        }
    }

    handleChange = (name, time) => {
        this.setState({
            [name]: time
        });
    }

    render() {
        return (
            <div>
                <h2>Time Picker</h2>
                <section>
                    <h4>Usage</h4>
                    <Code disableToggle>
{`import { TimePicker } from 'uwp-ui-react';`}
                    </Code>
                </section>
                <section>
                    <TimePicker 
                        name="time1"
                        header="Basic"
                        placeholder="Select time"
                        value={this.state.time1} 
                        onChange={this.handleChange}
                    />
                    <Code>
{`<TimePicker 
    name="time1"
    header="Basic"
    placeholder="Select time"
    value={this.state.time1} 
    onChange={this.handleChange}
/>`}
                    </Code>
                </section>
                <section>
                    <TimePicker 
                        name="time2"
                        header="Enable seconds"
                        enableSeconds
                        value={this.state.time2} 
                        onChange={this.handleChange}
                    />
                    <Code>
{`<TimePicker 
    name="time2"
    header="Enable seconds"
    enableSeconds
    value={this.state.time2} 
    onChange={this.handleChange}
/>`}
                    </Code>
                </section>
                <section>
                    <TimePicker 
                        name="time3"
                        header="Disable clear button"
                        value={this.state.time3} 
                        disableClear
                        onChange={this.handleChange}
                    />
                    <Code>
{`<TimePicker 
    name="time3"
    header="Disable clear button"
    value={this.state.time3} 
    disableClear
    onChange={this.handleChange}
/>`}
                    </Code>
                </section>
                <section>
                    <TimePicker 
                        name="time4"
                        header="Disabled"
                        enableSeconds
                        disabled
                        value="04:00:20"
                    />
                    <Code>
{`<TimePicker 
    name="time4"
    header="Disabled"
    enableSeconds
    disabled
    value="04:00:20"
/>`}
                    </Code>
                </section>
            </div>
        )
    }
}