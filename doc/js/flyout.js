import React from 'react';
import ReactDOM from 'react-dom';
import Code from '../util/code';
import { Button, HyperLink, Flyout } from '../../src/js/fui';

export default class FlyoutDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            flyoutOpen: false
        };
    }

    toggleFlyout = () => {
        this.setState({ 
            flyoutOpen: !this.state.flyoutOpen 
        });
    }

    closeFlyout = () => {
        this.setState({ 
            flyoutOpen: false 
        });
    }

    render() {
        return (
            <div>
                <h2>Flyout</h2>
                <section>
                    <h4>Flyout with custom content</h4>
                    <Button 
                        ref={el => this.button = ReactDOM.findDOMNode(el)}
                        onClick={this.toggleFlyout}
                    >
                        OPEN
                    </Button>
                    <Flyout
                        anchorEl={this.button}
                        isOpen={this.state.flyoutOpen}
                        onClose={this.closeFlyout}
                        style={{padding: '10px 20px'}}
                    >
                        <p>Confirm to delete?</p>
                        <div 
                            style={{
                                marginTop: 10,
                                textAlign: 'right'
                            }}
                        >
                        	<HyperLink onClick={this.closeFlyout}>Yes</HyperLink>
                            &nbsp;&nbsp;
                        	<HyperLink onClick={this.closeFlyout}>Cancel</HyperLink>
                        </div>
                    </Flyout>
                </section>
                <Code>
{`import React from 'react';
import ReactDOM from 'react-dom';
import { Button, HyperLink, Flyout } from 'fui';

export default class FlyoutDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            flyoutOpen: false
        };
    }

    toggleFlyout = () => {
        this.setState({ 
            flyoutOpen: !this.state.flyoutOpen 
        });
    }

    closeFlyout = () => {
        this.setState({ 
            flyoutOpen: false 
        });
    }

    render() {
        return (
            <div>
                <h2>Flyout</h2>
                <section>
                    <h4>Flyout with custom content</h4>
                    <Button 
                        ref={el => this.button = ReactDOM.findDOMNode(el)}
                        onClick={this.toggleFlyout}
                    >
                        OPEN
                    </Button>
                    <Flyout
                        anchorEl={this.button}
                        isOpen={this.state.flyoutOpen}
                        onClose={this.closeFlyout}
                        style={{padding: '10px 20px'}}
                    >
                        <p>Confirm to delete?</p>
                        <div 
                            style={{
                                marginTop: 10,
                                textAlign: 'right'
                            }}
                        >
                            <HyperLink onClick={this.closeFlyout}>Yes</HyperLink>
                            &nbsp;&nbsp;
                            <HyperLink onClick={this.closeFlyout}>Cancel</HyperLink>
                        </div>
                    </Flyout>
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