import React from 'react';
import Code from '../util/code';
import { Checkbox, CheckboxGroup } from '../../src/js/uwp-ui-react';

export default class CheckboxDemo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      checked1: true,
      checked2: false,
      fruits: [],
      cities: []
    };
  }

  checkboxChange = (name, checked) => {
    this.setState({
      [name]: checked
    });
  }

  fruitsChange = (value) => {
    console.log(value);
    this.setState({
      fruits: value
    });
  }

  citiesChange = (value) => {
    console.log(value);
    this.setState({
      cities: value
    });
  }

  render() {
    const { checked1, checked2, fruits, cities } = this.state;

    return (
      <div>
        <h2>Checkbox</h2>
        <section>
          <h4>Basic</h4>
          <Checkbox
            name="checked1"
            label="Checked"
            checked={checked1}
            onChange={this.checkboxChange}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Checkbox
            name="checked2"
            label="Unchecked"
            checked={checked2}
            onChange={this.checkboxChange}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Checkbox
            label="Indeterminate"
            checked
            indeterminate
          />
        </section>
        <section>
          <h4>Disabled</h4>
          <Checkbox label="Disabled" disabled />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Checkbox label="Disabled" disabled checked />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Checkbox label="Disabled" disabled checked indeterminate />
        </section>
        <br />
        <h3>Checkbox Group</h3>
        <section>
          <CheckboxGroup
            header="Horizontal"
            value={fruits}
            onChange={this.fruitsChange}
          >
            <Checkbox label="Pepperoni" value="1" />
            <Checkbox label="Beef" value="2" />
            <Checkbox label="Mushrooms" value="3" />
            <Checkbox label="Onions" value="4" />
          </CheckboxGroup>
        </section>
        <section>
          <CheckboxGroup
            header="Vertical"
            align="vertical"
            value={cities}
            onChange={this.citiesChange}
          >
            <Checkbox label="Beijing" value="bj" />
            <Checkbox label="New York" value="ny" />
            <Checkbox label="London" value="ld" />
            <Checkbox label="Paris" value="pr" />
          </CheckboxGroup>
        </section>
        <Code>
{`import React from 'react';
import { Checkbox, CheckboxGroup } from 'uwp-ui-react';

export default class CheckboxDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked1: true,
      checked2: false,
      fruits: [],
      cities: []
    };
  }

  checkboxChange = (name, checked) => {
    this.setState({
      [name]: checked
    });
  }

  fruitsChange = (value) => { 
    console.log(value);
    this.setState({
      fruits: value
    });
  }

  citiesChange = (value) => {
    console.log(value);
    this.setState({
      cities: value
    });
  }

  render() {
    const { checked1, checked2, fruits, cities } = this.state;

    return (
      <div>
        <h2>Checkbox</h2>
        <section>
          <h4>Basic</h4>
          <Checkbox 
            name="checked1"
            label="Checked" 
            checked={checked1}
            onChange={this.checkboxChange}
          />
          <Checkbox 
            name="checked2"
            label="Unchecked" 
            checked={checked2}
            onChange={this.checkboxChange}
          />
          <Checkbox 
            label="Indeterminate" 
            checked
            indeterminate
          />
        </section>
        <section>
          <h4>Disabled</h4>
          <Checkbox label="Disabled" disabled/>
          <Checkbox label="Disabled" disabled checked/>
          <Checkbox label="Disabled" disabled checked indeterminate/>
        </section>
        <br/>
        <h3>Checkbox Group</h3>
        <section>
          <CheckboxGroup 
            header="Horizontal" 
            value={fruits} 
            onChange={this.fruitsChange}
          >
            <Checkbox label="Pepperoni" value="1" />
            <Checkbox label="Beef" value="2" />
            <Checkbox label="Mushrooms" value="3" />
            <Checkbox label="Onions" value="4" />
          </CheckboxGroup>
        </section>
        <section>
          <CheckboxGroup 
            header="Vertical" 
            align="vertical"
            value={cities} 
            onChange={this.citiesChange}
          >
            <Checkbox label="Beijing" value="bj" />
            <Checkbox label="New York" value="ny" />
            <Checkbox label="London" value="ld" />
            <Checkbox label="Paris" value="pr" />
          </CheckboxGroup>
        </section>
      </div>
    );
  }
}`}
        </Code>
        <br/>
        <h3>Props of Checkbox</h3>
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
              <td>The html name for the input[type="checkbox"].</td>
            </tr>
            <tr>
              <td>label</td>
              <td>string</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>bool</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>checked</td>
              <td>bool</td>
              <td></td>
              <td></td>
              <td>If true, the Checkbox is checked.</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>function</td>
              <td></td>
              <td></td>
              <td>
                Called when checked or unchecked.
                <br/>
                @param [string] `name` The name prop of the Checkbox
                <br/>
                @param [boolean] `checked`
              </td>
            </tr>
          </tbody>          
        </table>
        <br/>
        <h3>Props of CheckboxGroup</h3>
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
              <td>align</td>
              <td>string</td>
              <td></td>
              <td>'horizontal'</td>
              <td>
                One of ['horizontal', 'vertical']
              </td>
            </tr>
            <tr>
              <td>value</td>
              <td>array</td>
              <td></td>
              <td>[]</td>
              <td>The checked values.</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>function</td>
              <td></td>
              <td></td>
              <td>
                Called when the value changes.
                <br/>
                @param [array] `value` The checked values.
              </td>
            </tr>
          </tbody>          
        </table>
      </div>
    )
  }
}