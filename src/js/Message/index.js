import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';

export default {

    // loading(content) {
    //     // create message layer if not been created.
    //     let layer = document.getElementById('f-loading-layer');

    //     if (!layer) {
    //         layer = document.createElement('div');
    //         layer.id = 'f-loading-layer';
    //         layer.addEventListener('transitionend', () => {
    //             ReactDOM.unmountComponentAtNode(layer);
    //         });
    //         document.body.appendChild(layer);
    //     }

    //     layer.content = content;
    //     ReactDOM.render(
    //         <LoadingMessage content={content}/>,
    //         layer
    //     );
    // },

    // unLoading() {
    //     let layer = document.getElementById('f-loading-layer');

    //     if (layer && layer.childNodes.length) {
    //         ReactDOM.render(
    //             <LoadingMessage content={layer.content} exit={true}/>,
    //             layer
    //         );
    //     }
    // },

    show(type, content, duration) {
        // create message layer if not been created.
        let layer = document.getElementById('f-Msg-layer');

        if (!layer) {
            layer = document.createElement('div');
            layer.id = 'f-Msg-layer';
            layer.addEventListener('transitionend', (event) => {
                const container = event.target.parentNode;

                ReactDOM.unmountComponentAtNode(container);
                layer.removeChild(container);
            });
            document.body.appendChild(layer);
        }

        const container = document.createElement('div');
        layer.appendChild(container);

        ReactDOM.render(
            <Message type={type} duration={duration}>
                {content}
            </Message>,
            container
        );
    },

    msg(content, duration) {
        this.show('msg', content, duration);
    },

    dark(content, duration) {
        this.show('dark', content, duration);
    },

    success(content, duration) {
        this.show('success', content, duration);
    },

    info(content, duration) {
        this.show('info', content, duration);
    },

    warning(content, duration) {
        this.show('warning', content, duration);
    },

    error(content, duration) {
        this.show('error', content, duration);
    }
}