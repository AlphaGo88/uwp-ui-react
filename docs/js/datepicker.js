import React from 'react';
import Code from '../util/code';
import { DatePicker } from '../../src/js/uwp-ui-react';

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
import { DatePicker } from 'uwp-ui-react';

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
              <td>name</td>
              <td>string</td>
              <td></td>
              <td></td>
              <td>The name that identifies the DatePicker.</td>
            </tr>
            <tr>
              <td>width</td>
              <td>number | string</td>
              <td></td>
              <td></td>
              <td>Set the width e.g. 200, '50%'</td>
            </tr>
            <tr>
              <td>header</td>
              <td>string</td>
              <td></td>
              <td></td>
              <td>The header text.</td>
            </tr>
            <tr>
              <td>placehoder</td>
              <td>string</td>
              <td></td>
              <td>''</td>
              <td></td>
            </tr>
            <tr>
              <td>underlined</td>
              <td>bool</td>
              <td></td>
              <td>false</td>
              <td>True to display underlined style.</td>
            </tr>
            <tr>
              <td>required</td>
              <td>bool</td>
              <td></td>
              <td>false</td>
              <td></td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>bool</td>
              <td></td>
              <td>false</td>
              <td></td>
            </tr>
            <tr>
              <td>fullWidth</td>
              <td>bool</td>
              <td></td>
              <td>false</td>
              <td>If true, the button will take up the full width of the horizontal space.</td>
            </tr>
            <tr>
              <td>value</td>
              <td>string</td>
              <td></td>
              <td>''</td>
              <td>The date value, e.g. '2016-08-08'.</td>
            </tr>
            <tr>
              <td>disableClear</td>
              <td>bool</td>
              <td></td>
              <td>false</td>
              <td>If true, the clear button is disabled.</td>
            </tr>            
            <tr>
              <td>disableDates</td>
              <td>function</td>
              <td></td>
              <td></td>
              <td>
                Disable dates that satisfy the test function.
                <br/>
                @param [Date] `date` The date object.
                <br/>
                @return [bool]
              </td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>function</td>
              <td></td>
              <td></td>
              <td>
                Called when the value changes.
                <br/>
                @param [string] `name` The 'name' prop.
                <br/>
                @param [string] `value` The date value.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}