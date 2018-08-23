import React from 'react';
import Code from '../util/code';
import { RadioGroup, Radio } from '../../src/js/uwp-ui-react';

export default class RadioDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            city1: 'bj',
            city2: 'ny'
        };
    }

    radioChange = (name, value) => {
        this.setState({
            [name]: value
        });
    }

    render() {
        const { city1, city2 } = this.state;

        return (
            <div>
                <h2>Radio Group</h2>
                <section>
                    <RadioGroup
                        header="Horizontal" 
                        name="city1"
                        value={city1}
                        onChange={this.radioChange}
                    >
                    	<Radio value="bj" label="Beijing" />
                    	<Radio value="ny" label="New York" />
                    	<Radio value="ld" label="London" />
                    	<Radio value="pr" label="Paris" disabled />
                    </RadioGroup>
                </section>
                <section>
                    <RadioGroup 
                        header="Vertical"
                        name="city2"
                        value={city2}
                        align="vertical"
                        onChange={this.radioChange}
                    >
	                    <Radio value="bj" label="Beijing" />
	                    <Radio value="ny" label="New York" />
	                    <Radio value="ld" label="London" />
	                    <Radio value="pr" label="Paris" />
                    </RadioGroup>
                </section>
                <Code>
{`import React from 'react';
import { RadioGroup, Radio } from 'uwp-ui-react';

export default class RadioDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            city1: 'bj',
            city2: 'ny'
        };
    }

    radioChange = (name, value) => {
        this.setState({
            [name]: value
        });
    }

    render() {
        const { city1, city2 } = this.state;

        return (
            <div>
                <h3>Radio Group</h3>
                <section>
                    <RadioGroup
                        header="Horizontal" 
                        name="city1"
                        value={city1}
                        onChange={this.radioChange}
                    >
                    	<Radio value="bj" label="Beijing" />
                    	<Radio value="ny" label="New York" />
                    	<Radio value="ld" label="London" />
                    	<Radio value="pr" label="Paris" disabled />
                    </RadioGroup>
                </section>
                <section>
                    <RadioGroup 
                        header="Vertical"
                        name="city2"
                        value={city2}
                        align="vertical"
                        onChange={this.radioChange}
                    >
	                    <Radio value="bj" label="Beijing" />
	                    <Radio value="ny" label="New York" />
	                    <Radio value="ld" label="London" />
	                    <Radio value="pr" label="Paris" />
                    </RadioGroup>
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