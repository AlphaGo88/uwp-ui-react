import React from 'react';
import Code from '../util/code';
import { HyperLink, Message } from '../../src/js/fui';

export default class MessageDemo extends React.Component {

    showMsg1() {
        Message.msg('Normal message')
    }

    showMsg2() {
        Message.dark('Dark message')
    }

    showMsg3() {
        Message.success('Success message')
    }

    showMsg4() {
        Message.info('Info message')
    }

    showMsg5() {
        Message.warning('Warning message')
    }

    showMsg6() {
        Message.error('Error message')
    }

    render() {

        return (
            <div>
                <h2>Message</h2>
                <section><HyperLink onClick={this.showMsg1}>Normal message</HyperLink></section>
                <section><HyperLink onClick={this.showMsg2}>Dark message</HyperLink></section>
                <section><HyperLink onClick={this.showMsg3}>Success message</HyperLink></section>
                <section><HyperLink onClick={this.showMsg4}>Info message</HyperLink></section>
                <section><HyperLink onClick={this.showMsg5}>Warning message</HyperLink></section>
                <section><HyperLink onClick={this.showMsg6}>Error message</HyperLink></section>
                <Code>
{`import React from 'react';
import { HyperLink, Message } from 'fui';

export default class MessageDemo extends React.Component {

    showMsg1() {
        Message.msg('Normal message')
    }

    showMsg2() {
        Message.dark('Dark message')
    }

    showMsg3() {
        Message.success('Success message')
    }

    showMsg4() {
        Message.info('Info message')
    }

    showMsg5() {
        Message.warning('Warning message')
    }

    showMsg6() {
        Message.error('Error message')
    }

    render() {

        return (
            <div>
                <h3>Message</h3>
                <section><HyperLink onClick={this.showMsg1}>Normal message</HyperLink></section>
                <section><HyperLink onClick={this.showMsg2}>Dark message</HyperLink></section>
                <section><HyperLink onClick={this.showMsg3}>Success message</HyperLink></section>
                <section><HyperLink onClick={this.showMsg4}>Info message</HyperLink></section>
                <section><HyperLink onClick={this.showMsg5}>Warning message</HyperLink></section>
                <section><HyperLink onClick={this.showMsg6}>Error message</HyperLink></section>
            </div>
        );
    }
}`}
                </Code>
            </div>
        )
    }
}