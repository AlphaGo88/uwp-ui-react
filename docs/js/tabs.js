import React from 'react';
import Code from '../util/code';
import { Tabs, TabItem, Icon } from '../../src/js/uwp-ui-react';

export default class TabsDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab1: '1',
            activeTabIndex2: 0,
            activeTabIndex3: 0,
            activeTab4: '1'
        };
    }

    handleActiveTab1Change = (value, index) => {
        this.setState({ activeTab1: value });
    }

    handleActiveTab2Change = (value, index) => {
        this.setState({ activeTabIndex2: index });
    }

    handleActiveTab3Change = (value, index) => {
        this.setState({ activeTabIndex3: index });
    }

    handleActiveTab4Change = (value, index) => {
        this.setState({ activeTab4: value });
    }

    render() {
        const { activeTab1, activeTabIndex2, activeTabIndex3, activeTab4 } = this.state;

        return (
            <div>
                <h2>Tabs</h2>
                <section>
                    <h4>Default</h4>
                    <Tabs 
                        value={activeTab1} 
                        onChange={this.handleActiveTab1Change}
                    >
                        <TabItem value="1" header="Tab Item1">
                            Content1
                        </TabItem>
                        <TabItem value="2" header="Tab Item2">
                            Content2
                        </TabItem>
                        <TabItem value="3" header="Tab Item3">
                            Content3
                        </TabItem>
                        <TabItem value="4" header="Disabled" disabled>
                            Content4
                        </TabItem>
                    </Tabs>
                </section>
                <section>
                    <h4>Icon</h4>
                    <Tabs 
                        activeIndex={activeTabIndex2}
                        onChange={this.handleActiveTab2Change}
                    >
                        <TabItem header="Item1" icon="phone">
                            Content1
                        </TabItem>
                        <TabItem header="Item2" icon="heart">
                            Content2
                        </TabItem>
                        <TabItem header="Item3" icon="question">
                            Content3
                        </TabItem>
                    </Tabs>
                </section>
                <section>
                    <h4>Strech</h4>
                    <Tabs 
                        activeIndex={activeTabIndex3}
                        stretch
                        onChange={this.handleActiveTab3Change}
                    >
                        <TabItem header="San Francisco">
                            Content1
                        </TabItem>
                        <TabItem header="Seattle">
                            Content2
                        </TabItem>
                        <TabItem header="Log Angeles">
                            Content3
                        </TabItem>
                    </Tabs>
                </section>
                <section>
                    <h4>Underlined</h4>
                    <Tabs 
                        underlined
                        value={activeTab4}
                        onChange={this.handleActiveTab4Change}
                    >
                        <TabItem value="1" header="Tab Item1">
                            Content1
                        </TabItem>
                        <TabItem value="2" header="Tab Item2">
                            Content2
                        </TabItem>
                        <TabItem value="3" header="Tab Item3">
                            Content3
                        </TabItem>
                    </Tabs>
                </section>
                <Code>
{`import React from 'react';
import { Tabs, TabItem, Icon } from 'uwp-ui-react';

export default class TabsDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab1: '1',
            activeTab2: 'sf',
            activeTab3: 'sf'
        };
    }

    handleActiveTab1Change = (value) => {
        this.setState({ activeTab1: value });
    }

    handleActiveTab2Change = (value) => {
        this.setState({ activeTab2: value });
    }

    handleActiveTab3Change = (value) => {
        this.setState({ activeTab3: value });
    }

    render() {
        const { activeTab1, activeTab2, activeTab3 } = this.state;

        return (
        );
    }
}`}
                </Code>
            </div>
        )
    }
}