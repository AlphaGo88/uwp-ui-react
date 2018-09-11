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
            checked={true}
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
            checked={true}
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
      </div>
    )
  }
}