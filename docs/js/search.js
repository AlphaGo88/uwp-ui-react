import React from 'react';
import Code from '../util/code';
import { Search } from '../../src/js/fui';

const suggestions = [ 
    'Afghanistan',
    'Aland Islands',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
];

export default class SearchDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            search1: '',
            search2: '',
            search3: ''
        };
    }

    search1Change = (value) => {
        this.setState({
            search1: value 
        });
    }

    search2Change = (value) => {
        this.setState({
            search2: value 
        });
    }

    search3Change = (value) => {
        this.setState({
            search3: value 
        });
    }

    handleSearch = (value) => {
        console.log(value)
    }

    render() {
        return (
            <div>
                <h2>Search</h2>
                <h4>Basic</h4>
                <section>
                    <Search 
                        placeholder="Search" 
                        value={this.state.search1}
                        onChange={this.search1Change}
                        onSearch={this.handleSearch} 
                    />
                </section>
                <section>
                    <Search placeholder="Search" disabled />
                </section>
                <h4>Auto Suggest</h4>
                <section>
                    <Search 
                        placeholder="Search" 
                        value={this.state.search2}
                        suggestions={suggestions} 
                        onChange={this.search2Change}
                        onSearch={this.handleSearch} 
                    />
                </section>
                <h4>Translucent Search in a background</h4>
                <section>
                    <img 
                        src="./img/bg.jpg" 
                        style={{ width:'100%' }} 
                    />
                    <Search 
                        style={{
                            position: 'absolute',
                            top: 40,
                            right: 40
                        }}
                        placeholder="Search" 
                        borderless
                        translucent
                        value={this.state.search3}
                        onChange={this.search3Change}
                        onSearch={this.handleSearch}
                    />
                </section>
                <Code>
{`import React from 'react';
import { Search } from 'fui';

const suggestions = [ 
    'Afghanistan',
    'Aland Islands',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
];

export default class SearchDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            search1: '',
            search2: '',
            search3: ''
        };
    }

    search1Change = (value) => {
        this.setState({
            search1: value 
        });
    }

    search2Change = (value) => {
        this.setState({
            search2: value 
        });
    }

    search3Change = (value) => {
        this.setState({
            search3: value 
        });
    }

    handleSearch = (value) => {
        console.log(value)
    }

    render() {
        return (
            <div>
                <h2>Search</h2>
                <h4>Basic</h4>
                <section>
                    <Search 
                        placeholder="Search" 
                        value={this.state.search1}
                        onChange={this.search1Change}
                        onSearch={this.handleSearch} 
                    />
                </section>
                <section>
                    <Search placeholder="Search" disabled />
                </section>
                <h4>Auto Suggest</h4>
                <section>
                    <Search 
                        placeholder="Search" 
                        value={this.state.search2}
                        suggestions={suggestions} 
                        onChange={this.search2Change}
                        onSearch={this.handleSearch} 
                    />
                </section>
                <h4>Translucent Search in a background</h4>
                <section>
                    <img 
                        src="./img/bg.jpg" 
                        style={{ width:'100%' }} 
                    />
                    <Search 
                        style={{
                            position: 'absolute',
                            top: 40,
                            right: 40
                        }}
                        placeholder="Search" 
                        borderless
                        translucent
                        value={this.state.search3}
                        onChange={this.search3Change}
                        onSearch={this.handleSearch}
                    />
                </section>
            </div>
        );
    }
}`}
                </Code>
            </div>
        );
    }
}