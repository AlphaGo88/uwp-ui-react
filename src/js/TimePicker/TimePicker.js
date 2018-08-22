// Time Picker
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import InputField from '../internal/InputField';
import Flyout from '../Flyout';
import Icon from '../Icon';

const CYCLE = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];
const ITEM_HEIGHT = 32;

function getTimeStr(number) {
    return number > 9 ? number : `0${number}`;
}

// Calculate hours and minutes from time value
function getHM(timeStr) {
    const _timeStr = timeStr || '00:00';
    const hh = parseInt(_timeStr.slice(0, 2));

    return {
        hh: hh > 11 ? hh - 12 : hh,
        mm: parseInt(_timeStr.slice(3, 5)),
        pm: hh > 11
    };
}



/**
 * Legal time format is '00:00'
 * 
 */
export default class TimePicker extends React.Component {

	constructor(props) {
	    super(props);

        const HM = getHM(props.value);

	    this.state = {
	        isOpen: false,
            hh: HM.hh,
            mm: HM.mm,
            pm: HM.pm
	    };
	}

    componentWillReceiveProps(nextProps) {
        const HM = getHM(nextProps.value);

        this.setState({
            hh: HM.hh,
            mm: HM.mm,
            pm: HM.pm
        });
    }

	componentDidUpdate(prevProps, prevState) {
        const { isOpen, hh, mm, pm } = this.state;

	    if (this.state.isOpen) {
	    	this.hoursUl.scrollTop = ITEM_HEIGHT * hh;
            this.minutesUl.scrollTop = ITEM_HEIGHT * mm;
	    	this.pmUl.scrollTop = pm ? ITEM_HEIGHT : 0;
	    }
	}

    open = () => {
        const HM = getHM(this.props.value);

        this.setState({
            isOpen: true,
            hh: HM.hh,
            mm: HM.mm,
            pm: HM.pm
        });
    }

    close = () => {
        this.setState({
            isOpen: false
        });
    }

    // Confirm selection
    confirm = () => {
        const { hh, mm, pm } = this.state;
        const _hh = pm ? hh + 12 : hh;
        const timeStr = `${getTimeStr(_hh)}:${getTimeStr(mm)}`

        this.setState({
            isOpen: false 
        });
        if (timeStr !== this.props.value) {
            this.props.onChange(this.props.name, timeStr);
        }
    }

	handleTriggerClick = () => {
	    if (!this.props.disabled) {
	        return this.state.isOpen ? this.close() : this.open();
	    }
	}

	handleTriggerKeyDown = (event) => {
	    switch (event.which) {
	        // Enter or Space - Open the panel
	        case 13:
	        case 32:
	            event.preventDefault();
	            this.open();
	            break;

	        // BackSpace - clear value
	        case 8:
	            if (!this.props.disableClear) {
                    this.clear();
                }
	            break;

	        default:
	    }
	}

	handleHoursClick = (hh) => {
		this.setState({ hh });
	}

	handleMinutesClick = (mm) => {
		this.setState({ mm });
	}

    handleAMClick = () => {
        this.setState({
            pm: false 
        });
    }

    handlePMClick = () => {
        this.setState({
            pm: true 
        });
    }

    render() {
        const { 
            className,
            width,
            fullWidth,
            underlined,
            header,
            required,
            disabled,
            value,
        } = this.props;

        const { 
        	isOpen,
            hh,
            mm,
            pm
        } = this.state;

        // Get hours text and minutes text from value
        const HM = getHM(value);

        return (
            <InputField
                className={className}
                width={width}
                fullWidth={fullWidth}
                header={header}
                required={required}
                disabled={disabled}
            >
            	<div className="f-TmPk">
            	    <div 
            	        ref={el => this.trigger = el}
            	        className={cx(
            	            'f-Input-wrapper',
            	            'f-TmPk-trigger',
            	            { 
            	                underlined,
            	                disabled
            	            }
            	        )}
            	        tabIndex={disabled ? void 0 : 0}
            	        onClick={this.handleTriggerClick}
            	        onKeyDown={this.handleTriggerKeyDown}
            	    >
                        <div className="f-TmPk-field">
                            {getTimeStr(HM.hh)}
                        </div>
                        <div className="f-TmPk-field">
                            {getTimeStr(HM.mm)}
                        </div>
                        <div className="f-TmPk-field">
                            {HM.pm ? 'PM' : 'AM'}
                        </div>
            	    </div>
            	    <Flyout 
            	        className="f-TmPk-panel"
            	        anchorEl={this.trigger}
                        style={{
                            width: this.trigger ? this.trigger.offsetWidth : 0
                        }}
            	        isOpen={isOpen}
            	        onClose={this.close}
            	    >
                        <div className="f-TmPk-panel-main">
                	        <ul 
                	        	ref={el => this.hoursUl = el}
                	        >
                	        	{CYCLE.slice(0, 12).map((it, i) => 
                	        		<li
                	        			key={i}
                                        className={cx(
                                            { 'selected': i === hh }
                                        )}
                	        			onClick={() => this.handleHoursClick(i)}
                	        		>
                	        			{it}
                	        		</li>
                	        	)}
                	        </ul>
                	        <ul 
                	        	ref={el => this.minutesUl = el}
                	        >
                	        	{CYCLE.map((it, i) => 
                	        		<li
                	        			key={i}
                                        className={cx(
                                            { 'selected': i === mm }
                                        )}
                	        			onClick={() => this.handleMinutesClick(i)}
                	        		>
                	        			{it}
                	        		</li>
                	        	)}
                	        </ul>
                            <ul
                                ref={el => this.pmUl = el}
                            >
                                <li
                                    className={cx(
                                        { 'selected': pm === false }
                                    )}
                                    onClick={this.handleAMClick}
                                >
                                    AM
                                </li>
                                <li
                                    className={cx(
                                        { 'selected': pm === true }
                                    )}
                                    onClick={this.handlePMClick}
                                >
                                    PM
                                </li>
                            </ul>
                        </div>
                        <div className="f-TmPk-panel-foot">
                            <button 
                                className="f-TmPk-btn"
                                tabIndex={-1}
                                onClick={this.confirm}
                            >
                                <Icon name="check" />
                            </button>
                            <button 
                                className="f-TmPk-btn"
                                tabIndex={-1}
                                onClick={this.close}
                            >
                                <Icon name="times" />
                            </button>
                        </div>
            	    </Flyout>
            	</div>
            </InputField>
        );
    }
}

TimePicker.propTypes = {

    // Overwrite or extend the styles
    className: PropTypes.string,

    // Identify the TimePicker
    name: PropTypes.string,

    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    header: PropTypes.node,

    placeholder: PropTypes.string,

    // Underlined style
    underlined: PropTypes.bool,

    disabled: PropTypes.bool,

    fullWidth: PropTypes.bool,

    // The time value, e.g. '10:30:22'.
    value: PropTypes.string,

    // If seconds selection is enabled
    enableSeconds: PropTypes.bool,

    // If true, clear button will not show.
    disableClear: PropTypes.bool,

    /**
     * Called when the time changes.
     * 
     * @param {string} `name`
     * @param {string} `value`
     */
    onChange: PropTypes.func
};

TimePicker.defaultProps = {
    value: '',
	onChange: () => {}
};