import React from 'react';
import Code from '../util/code';
import { HyperLink, Dialog } from '../../src/js/fui';

export default class DialogDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dlg1Open: false,
            dlg2Open: false,
            dlg3Open: false
        }
    }

    openDialog1 = () => {
        this.setState({ dlg1Open: true });
    }

    openDialog2 = () => {
        this.setState({ dlg2Open: true });
    }

    openDialog3 = () => {
        this.setState({ dlg3Open: true });
    }

    dlg1Click = (result) => {
        console.log(result);
        this.setState({ dlg1Open: false });
    }

    dlg2Click = (result) => {
        console.log(result);
        this.setState({ dlg2Open: false });
    }

    dlg3Click = (result) => {
        console.log(result);
        this.setState({ dlg3Open: false });
    }

    render() {
        return (
            <div>
                <h2>Dialog</h2>
                <section>
                    <HyperLink onClick={this.openDialog1}>Basic dialog</HyperLink>
                </section>
                <section>
                    <HyperLink onClick={this.openDialog2}>Three buttons</HyperLink>
                </section>
                <section>
                    <HyperLink onClick={this.openDialog3}>Long Dialog</HyperLink>
                </section>
                <Dialog 
                    isOpen={this.state.dlg1Open} 
                    title='Allow App to access your location?' 
                    primaryButtonText="Allow"
                    closeButtonText="Deny"
                    onButtonClick={this.dlg1Click}
                >
                    App uses this information to help you find places, connect with frends and more.
                </Dialog>
                <Dialog 
                    isOpen={this.state.dlg2Open} 
                    title='Three buttons' 
                    primaryButtonText="Primary"
                    secondaryButtonText="Secondary"
                    closeButtonText="Close"
                    onButtonClick={this.dlg2Click}
                >
                    啊三季度来看房萨芬的， 啊释放了空间撒反对。阿斯蒂芬撒旦发你离开雷克萨减肥的按说反击率。
                    啊三季度来看房萨芬的， 啊释放了空间撒反对。阿斯蒂芬撒旦发你离开雷克萨减肥的按说反击率。
                    啊三季度来看房萨芬的， 啊释放了空间撒反对。阿斯蒂芬撒旦发你离开雷克萨减肥的按说反击率。
                </Dialog>
                <Dialog 
                    title="Long Dialog" 
                    isOpen={this.state.dlg3Open} 
                    primaryButtonText="OK"
                    onButtonClick={this.dlg3Click}
                >
                    <p>Passage 1</p>
                    <p>Passage 2</p>
                    <p>Passage 3</p>
                    <p>Passage 4</p>
                    <p>Passage 5</p>
                    <p>Passage 6</p>
                    <p>Passage 7</p>
                    <p>Passage 8</p>
                    <p>Passage 9</p>
                    <p>Passage 10</p>
                    <p>Passage 11</p>
                    <p>Passage 12</p>
                    <p>Passage 13</p>
                    <p>Passage 14</p>
                    <p>Passage 15</p>
                    <p>Passage 16</p>
                    <p>Passage 17</p>
                    <p>Passage 18</p>
                    <p>Passage 19</p>
                    <p>Passage 20</p>
                </Dialog>
                <Code>
{`import React from 'react';
import { HyperLink, Dialog } from 'fui';

export default class DialogDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dlg1Open: false,
            dlg2Open: false,
            dlg3Open: false
        }
    }

    openDialog1 = () => {
        this.setState({ dlg1Open: true });
    }

    openDialog2 = () => {
        this.setState({ dlg2Open: true });
    }

    openDialog3 = () => {
        this.setState({ dlg3Open: true });
    }

    dlg1Click = (result) => {
        console.log(result);
        this.setState({ dlg1Open: false });
    }

    dlg2Click = (result) => {
        console.log(result);
        this.setState({ dlg2Open: false });
    }

    dlg3Click = (result) => {
        console.log(result);
        this.setState({ dlg3Open: false });
    }

    render() {
        return (
            <div>
                <section>
                    <HyperLink onClick={this.openDialog1}>Basic dialog</HyperLink>
                </section>
                <section>
                    <HyperLink onClick={this.openDialog2}>Three buttons</HyperLink>
                </section>
                <section>
                    <HyperLink onClick={this.openDialog3}>Long Dialog</HyperLink>
                </section>
                <Dialog 
                    isOpen={this.state.dlg1Open} 
                    title='Allow App to access your location?' 
                    primaryButtonText="Allow"
                    closeButtonText="Deny"
                    onButtonClick={this.dlg1Click}
                >
                    App uses this information to help you find places, connect with frends and more.
                </Dialog>
                <Dialog 
                    isOpen={this.state.dlg2Open} 
                    title='Three buttons' 
                    primaryButtonText="Primary"
                    secondaryButtonText="Secondary"
                    closeButtonText="Close"
                    onButtonClick={this.dlg2Click}
                >
                    啊三季度来看房萨芬的， 啊释放了空间撒反对。阿斯蒂芬撒旦发你离开雷克萨减肥的按说反击率。
                    啊三季度来看房萨芬的， 啊释放了空间撒反对。阿斯蒂芬撒旦发你离开雷克萨减肥的按说反击率。
                    啊三季度来看房萨芬的， 啊释放了空间撒反对。阿斯蒂芬撒旦发你离开雷克萨减肥的按说反击率。
                </Dialog>
                <Dialog 
                    title="Long Dialog" 
                    isOpen={this.state.dlg3Open} 
                    primaryButtonText="OK"
                    onButtonClick={this.dlg3Click}
                >
                    <p>Passage 1</p>
                    <p>Passage 2</p>
                    <p>Passage 3</p>
                    <p>Passage 4</p>
                    <p>Passage 5</p>
                    <p>Passage 6</p>
                    <p>Passage 7</p>
                    <p>Passage 8</p>
                    <p>Passage 9</p>
                    <p>Passage 10</p>
                    <p>Passage 11</p>
                    <p>Passage 12</p>
                    <p>Passage 13</p>
                    <p>Passage 14</p>
                    <p>Passage 15</p>
                    <p>Passage 16</p>
                    <p>Passage 17</p>
                    <p>Passage 18</p>
                    <p>Passage 19</p>
                    <p>Passage 20</p>
                </Dialog>
            <div>
        );
    }
}`}
                </Code>
            </div>
        )
    }
}