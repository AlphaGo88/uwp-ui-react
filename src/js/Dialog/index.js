import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './Dialog';

export default class DialogControl extends React.Component {

    appendDialogToDoc() {
        ReactDOM.render(
            <Dialog {...this.props}/>,
            this.layer
        );
    }

    componentDidMount() {
        this.layer = document.createElement('div');
        document.body.appendChild(this.layer);
        this.appendDialogToDoc();
    }

    componentDidUpdate() {
        this.appendDialogToDoc();
    }

    componentWillUnmount() {
        document.body.removeChild(this.layer);
    }

    render() {
        return null;
    }
};