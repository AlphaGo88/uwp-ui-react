// Dialog
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { default as Button } from '../Button';

export default class Dialog extends React.Component {

    componentDidMount() {
        window.addEventListener('resize', this.positionDialog);
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.isOpen && this.props.isOpen) {
            document.body.classList.add('f-scrollbar-hidden');
            this.positionDialog();
            this.dialog.focus();
        } 
        if (prevProps.isOpen && !this.props.isOpen) {
            document.body.classList.remove('f-scrollbar-hidden');
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.positionDialog);
    }

    positionDialog = () => {
        if (!this.props.isOpen) return;

        const minPaddingY = 12;
        const containerHeight = this.container.offsetHeight;
        const dialogHeight = this.dialog.offsetHeight;
        let paddingTop = (containerHeight - dialogHeight) / 2;

        if (paddingTop < minPaddingY) {
            paddingTop = minPaddingY;
        }
        this.container.style.padding = `${paddingTop}px 0 ${minPaddingY}px`;
    }

    handleKeyUp = (event) => {
        // ESC
        if (event.which === 27) {
            this.props.onButtonClick('close');
        }
    }

    render() {
        const { 
            className, 
            width,
            isOpen, 
            title, 
            children,  
            closeButtonText,
            primaryButtonText,
            secondaryButtonText,
            onButtonClick
        } = this.props;

        return (
            <div 
                ref={el => this.container = el}
                className={cx(
                    'f-Dialog-mask', 
                    { 'open': isOpen }
                )}
            >
                <div 
                    ref={el => this.dialog = el}
                    tabIndex={isOpen ? 0 : void 0}
                    style={{width}}
                    className={cx(
                        'f-Dialog', 
                        { 'open': isOpen },
                        className
                    )}
                    onKeyUp={this.handleKeyUp}
                >
                    {isOpen &&
                        <div>
                            {title && 
                                <div className="f-Dialog-title">
                                    {title}
                                </div>
                            }
                            <div className="f-Dialog-content">
                                {children}
                            </div>
                            <div className="f-Dialog-foot">
                                {closeButtonText &&
                                    <Button
                                        onClick={() => onButtonClick('close')}
                                    >
                                        {closeButtonText}
                                    </Button>
                                }
                                {secondaryButtonText &&
                                    <Button
                                        onClick={() => onButtonClick('secondary')}
                                    >
                                        {secondaryButtonText}
                                    </Button>
                                }
                                {primaryButtonText &&
                                    <Button
                                        primary
                                        onClick={() => onButtonClick('primary')}
                                    >
                                        {primaryButtonText}
                                    </Button>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
};

Dialog.propTypes = {

    // Overwrite or extend the styles
    className: PropTypes.string,

    // The dialog's width
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    isOpen: PropTypes.bool,

    title: PropTypes.node,

    closeButtonText: PropTypes.node,

    primaryButtonText: PropTypes.node,

    secondaryButtonText: PropTypes.node,

    /**
     * Called when a button is clicked.
     * 
     * @param {string} `result` The clicked button: 'primary', 'secondary' or 'close'
     */
    onButtonClick: PropTypes.func
};

Dialog.defaultProps = {
    isOpen: false,
    onButtonClick: () => {}
};