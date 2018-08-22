import React from 'react';
import Code from '../util/code';
import { Select, SelectItem, SelectItemHeader, Seperator } from '../../src/js/fui';

const emps = [
    { value: '', text: '--'}, 
    { value: '1', text: 'Max' }, 
    { value: '2', text: 'Abby' }, 
    { value: '3', text: 'Jim' }, 
    { value: '4', text: 'Michael' },
    { value: '5', text: 'Alice', disabled: true }, 
    { value: '6', text: 'Rachel' }, 
    { value: '7', text: 'Nicholas' }, 
    { value: '8', text: 'Desmond' },
    { value: '9', text: 'Lucy' }, 
    { value: '10', text: 'Carl' }, 
    { value: '11', text: 'Hana' }
];

const empOptions = emps.map((it, i) => (
    <SelectItem key={i} value={it.value} text={it.text}/>
));

export default class SelectDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            emp: '',
            vendor: 'QQ',
            city: 'Beijing'
        };
    }

    handleChange = (name, value, text) => {
        this.setState({
            [name]: value 
        });
    }

    render() {
        let { emp, vendor, city } = this.state;

        return (
            <div>
                <h2>Select</h2>
                <section>
                    <Select 
                        name="emp"
                        header="Basic"
                        value={emp} 
                        onChange={this.handleChange}
                    >
                        {empOptions}
                    </Select>
                </section>
                <section>
                    <Select
                        name="vendor"
                        header="Icon"
                        value={vendor}
                        onChange={this.handleChange}
                    >
                        <SelectItem icon={{name:'qq',color:'skyblue'}} value="QQ" text="QQ"/>
                        <SelectItem icon={{name:'weibo',color:'red'}} value="weibo" text="Weibo"/>
                        <SelectItem icon={{name:'weixin',color:'green'}} value="Weixin" text="Weixin"/>
                    </Select>
                </section>
                <section>
                    <Select
                        name="city"
                        header="Items with header"
                        value={city}
                        onChange={this.handleChange}
                    >
                        <SelectItemHeader text="China"/>
                        <SelectItem value="Beijing" text="Beijing"/>
                        <SelectItem value="Shanghai" text="Shanghai"/>
                        <SelectItem value="Hongkong" text="Hongkong"/>
                        <Seperator/>
                        <SelectItemHeader text="United States"/>
                        <SelectItem value="New York" text="New York"/>
                        <SelectItem value="Los Angeles" text="Los Angeles"/>
                        <SelectItem value="Chicago" text="Chicago"/>
                    </Select>
                </section>
                <section>
                    <Select 
                        header="Disabled"
                        value="2"
                        disabled 
                    >
                        {empOptions}
                    </Select>
                </section>
                <Code>
{`import React from 'react';
import { Select, SelectItem, SelectItemHeader, Seperator } from 'fui';

const emps = [
    { value: '', text: '--'}, 
    { value: '1', text: 'Max' }, 
    { value: '2', text: 'Abby' }, 
    { value: '3', text: 'Jim' }, 
    { value: '4', text: 'Michael' },
    { value: '5', text: 'Alice', disabled: true }, 
    { value: '6', text: 'Rachel' }, 
    { value: '7', text: 'Nicholas' }, 
    { value: '8', text: 'Desmond' },
    { value: '9', text: 'Lucy' }, 
    { value: '10', text: 'Carl' }, 
    { value: '11', text: 'Hana' }
];

const empOptions = emps.map((it, i) => (
    <SelectItem key={i} value={it.value} text={it.text}/>
));

export default class SelectDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            emp: '',
            vendor: 'QQ',
            city: 'Beijing'
        };
    }

    handleChange = (name, value, text) => {
        this.setState({
            [name]: value 
        });
    }

    render() {
        let { emp, vendor, city } = this.state;

        return (
            <div>
                <section>
                    <Select 
                        name="emp"
                        header="Basic"
                        value={emp} 
                        onChange={this.handleChange}
                    >
                        {empOptions}
                    </Select>
                </section>
                <section>
                    <Select
                        name="vendor"
                        header="Icon"
                        value={vendor}
                        onChange={this.handleChange}
                    >
                        <SelectItem icon={{name:'qq',color:'skyblue'}} value="QQ" text="QQ"/>
                        <SelectItem icon={{name:'weibo',color:'red'}} value="weibo" text="Weibo"/>
                        <SelectItem icon={{name:'weixin',color:'green'}} value="Weixin" text="Weixin"/>
                    </Select>
                </section>
                <section>
                    <Select
                        name="city"
                        header="Items with header"
                        value={city}
                        onChange={this.handleChange}
                    >
                        <SelectItemHeader text="China"/>
                        <SelectItem value="Beijing" text="Beijing"/>
                        <SelectItem value="Shanghai" text="Shanghai"/>
                        <SelectItem value="Hongkong" text="Hongkong"/>
                        <Seperator/>
                        <SelectItemHeader text="United States"/>
                        <SelectItem value="New York" text="New York"/>
                        <SelectItem value="Los Angeles" text="Los Angeles"/>
                        <SelectItem value="Chicago" text="Chicago"/>
                    </Select>
                </section>
                <section>
                    <Select 
                        header="Disabled"
                        value="2"
                        disabled 
                    >
                        {empOptions}
                    </Select>
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