import React from 'react';
import Code from '../util/code';
import { DatePicker } from '../../src/js/fui';

export default class DatePickerDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            date1: '',
            date2: '',
            date4: ''
        }
    }

    handleChange = (name, dateStr) => {
        this.setState({
            [name]: dateStr
        });
    }

    render() {
        const { date1, date2, date4 } = this.state;

        return (
            <div>
                <h2>Date Picker</h2>
                <section>
                    <DatePicker 
                        name="date1"
                        header="Basic"
                        placeholder="Select Date"
                        value={date1} 
                        onChange={this.handleChange}
                    />
                </section>
                <section>
                    <DatePicker 
                        name="date2"
                        header="Disable dates"
                        value={date2}
                        disableDates={date => date.getDay() === 4}
                        onChange={this.handleChange}
                    />
                </section>
                <section>
                    <DatePicker
                        name="date3"
                        header="Disabled"
                        value="2018/08/10" 
                        disabled
                    />
                </section>
                <section>
                    <DatePicker
                        name="date4"
                        header="Underlined"
                        value={date4}
                        underlined
                        onChange={this.handleChange}
                    />
                </section>
                <Code>
{`import React from 'react';
import { DatePicker } from 'fui';

export default class DatePickerDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            date1: '',
            date2: '',
            date4: '' 
        };
    }

    handleChange = (name, dateStr) => {
        this.setState({
            [name]: dateStr
        });
    }

    render() {
        const { date1, date2, date4 } = this.state;

        return (
            <div>
                <h2>Date Picker</h2>
                <section>
                    <DatePicker 
                        name="date1"
                        header="Basic"
                        placeholder="Select Date"
                        value={date1} 
                        onChange={this.handleChange}
                    />
                </section>
                <section>
                    <DatePicker 
                        name="date2"
                        header="Disable dates"
                        value={date2}
                        disableDates={date => date.getDay() === 4}
                        onChange={this.handleChange}
                    />
                </section>
                <section>
                    <DatePicker
                        name="date3"
                        header="Disabled"
                        value="2018/08/10" 
                        disabled
                    />
                </section>
                <section>
                    <DatePicker
                        name="date4"
                        header="Underlined"
                        value={date4}
                        underlined
                        onChange={this.handleChange}
                    />
                </section>
            </div>
        );
    }
}`}
                </Code>
            </div>
        )
    }
}