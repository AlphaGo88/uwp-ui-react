// Date Picker
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import InputField from '../internal/InputField';
import Icon from '../Icon';
import Flyout from '../Flyout';

const DEFAULT_WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const WEEKDAYS_DISPLAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Whether the year is a leap year
function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

// How many days does a month have
function getMonthDayCount(year, month) {
  return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (isLeapYear(year) ? 29 : 28);
}

function getDateStr(year, month, date) {
  const mm = month > 8 ? month + 1 : `0${month + 1}`;
  const dd = date > 9 ? date : `0${date}`;

  return `${year}/${mm}/${dd}`;
}

// Get year, month, date, and dateValue from a date string.
function getYMD(dateStr) {
  const dateObj = dateStr ? new Date(dateStr) : new Date();
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const date = dateObj.getDate();
  const value = new Date(year, month, date).valueOf();

  return {
    year,
    month,
    date,
    value
  };
}

export default class DatePicker extends React.Component {

  constructor(props) {
    super(props);

    const YMD = getYMD(props.value);

    this.state = {
      isOpen: false,
      view: 'month',
      year: YMD.year,
      month: YMD.month,
      focusDateValue: YMD.value
    };
  }

  componentWillReceiveProps(nextProps) {
    const YMD = getYMD(nextProps.value);

    this.setState({
      year: YMD.year,
      month: YMD.month,
      focusDateValue: YMD.value
    });
  }

  handleTriggerClick = () => {
    if (!this.props.disabled) {
      if (this.state.isOpen) {
        this.closeAndRestore();
      } else {
        this.open();
      }
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

  // Key down with panel open
  handleKeyDown = (event) => {
    const {
      view,
      year,
      month,
      focusDateValue
    } = this.state;
  
    switch (event.which) {
      // Enter - select the focused item
      case 13:
        if (view === 'month') {
          const obj = new Date(focusDateValue);
          const year = obj.getFullYear();
          const month = obj.getMonth();
          const date = obj.getDate();
  
          if (!this.isDateDisabled(year, month, date)) {
            this.close();
            this.props.onChange(this.props.name, getDateStr(year, month, date));
          }
        } else if (view === 'year') {
          this.setState({
            view: 'month'
          });
        }
        break;
  
        // ESC - close
      case 27:
        this.closeAndRestore();
        break;
  
        // Left Arrow
      case 37:
        event.preventDefault();
        if (view === 'month') {
          this.pressKeyToDate(-1);
        }
        break;
  
        // Up Arrow
      case 38:
        event.preventDefault();
        if (view === 'month') {
          this.pressKeyToDate(-7);
        } else if (view === 'year') {
          this.setState({
            year: year - 1
          });
        }
        break;
  
        // Right Arrow
      case 39:
        event.preventDefault();
        if (view === 'month') {
          this.pressKeyToDate(1);
        }
        break;
  
        // Down Arrow
      case 40:
        event.preventDefault();
        if (view === 'month') {
          this.pressKeyToDate(7);
        } else if (view === 'year') {
          this.setState({
            year: year + 1
          });
        }
        break;
  
      default:
    }
  }

  handleClearBtnClick = (event) => {
    event.stopPropagation();
    this.clear(); 
  }

  open() {
    this.setState({
      isOpen: true
    });
  }

  close() {
    this.setState({
      isOpen: false 
    }, () => {
      this.trigger.focus();
    });
  }

  // Restore the original state when no date is selected.
  closeAndRestore = () => {
    const YMD = getYMD(this.props.value);

    this.setState({
      isOpen: false,
      view: 'month',
      year: YMD.year,
      month: YMD.month,
      focusDateValue: YMD.value
    });
  }

  clear = () => {
    this.props.onChange(this.props.name, '');
  }

  switchToYearView = (event) => {
    event.stopPropagation();
    this.setState({ view: 'year' });
  }

  switchToDacadeView = () => {
    event.stopPropagation();
    this.setState({ view: 'dacade' });
  }

  toPrevDacade = () => {
    this.setState({
      year: this.state.year - 10 
    });
  }

  toNextDacade = () => {
    this.setState({
      year: this.state.year + 10
    });
  }

  toPrevYear = () => {
    this.setState({
      year: this.state.year - 1 
    });
  }

  toNextYear = () => {
    this.setState({
      year: this.state.year + 1 
    });
  }

  toPrevMonth = () => {
    const { year, month } = this.state;
    const prevMonth = month === 0 ? 11 : month - 1;

    this.setState({
      year: month === 0 ? year - 1 : year,
      month: prevMonth,
    });
  }

  toNextMonth = () => {
    const { year, month } = this.state;
    const nextMonth = month === 11 ? 0 : month + 1;
      
    this.setState({
      year: month === 11 ? year + 1 : year,
      month: nextMonth,
    });
  }

  // Select a year.
  selectYear(event, year) {
    event.stopPropagation();
    this.setState({
      view: 'month',
      year 
    });
  }

  // Select month.
  selectMonth(event, month, year) {
    event.stopPropagation();
    this.setState({
      view: 'month',
      year,
      month
    });
  }

  // Select a date.
  selectDate(year, month, date) {
    const dateStr = getDateStr(year, month, date);

    this.close();
    this.props.onChange(this.props.name, dateStr);
  }

  isDateDisabled(year, month, date) {
    return this.props.disableDates ? this.props.disableDates(new Date(year, month, date)) : false;
  }

  // Use keyboard to select a date.
  pressKeyToDate(offset) {
    const { year, month, focusDateValue } = this.state;
    const newFocusDateValue = focusDateValue + offset * 24 * 3600000;
    const dates = this.getDisplayDates();
    const firstDateValue = new Date(dates[0].year, dates[0].month, dates[0].value).valueOf();
    const lastDateValue = new Date(dates[41].year, dates[41].month, dates[41].value).valueOf();
    let newYear, newMonth;

    if (newFocusDateValue < firstDateValue) {
      newYear = month === 0 ? year - 1 : year;
      newMonth = month === 0 ? 11 : month - 1;
    } else if (newFocusDateValue > lastDateValue) {
      newYear = month === 11 ? year + 1 : year;
      newMonth = month === 11 ? 0 : month + 1;
    } else {
      newYear = year;
      newMonth = month;
    }

    this.setState({
      year: newYear,
      month: newMonth,
      focusDateValue: newFocusDateValue
    });
  }

  getDisplayDates() {
    const {
      year,
      month
    } = this.state;
  
    // don't recalculate if year and month didn't change
    if (year === this.year && month === this.month && this.dates) {
      return this.dates;
    }
  
    const dates = [];
    const dayCount = getMonthDayCount(year, month);
    let offset = 0; // How many dates of last month need to be displayed
    let i;
  
    // What day is the first date of this month.
    const firstDay = new Date(year, month, 1).getDay();
    if (firstDay !== DEFAULT_WEEKDAYS.indexOf(WEEKDAYS[0])) {
      offset = WEEKDAYS.indexOf(DEFAULT_WEEKDAYS[firstDay]);
    }
  
    // Dates of last month.
    if (offset > 0) {
      const _year = month === 0 ? year - 1 : year;
      const _month = month === 0 ? 11 : month - 1;
      const prevMonthDayCount = getMonthDayCount(_year, _month);
  
      for (i = prevMonthDayCount - offset + 1; i <= prevMonthDayCount; i++) {
        dates.push({
          year: _year,
          month: _month,
          value: i
        });
      }
    }
  
    // Dates of current month.
    for (i = 1; i <= dayCount; i++) {
      dates.push({
        year,
        month,
        value: i
      });
    }
  
    // Dates of next month.
    const _year = month === 11 ? year + 1 : year;
    const _month = month === 11 ? 0 : month + 1;
    const restDayCount = 42 - dates.length;
    for (i = 1; i <= restDayCount; i++) {
      dates.push({
        year: _year,
        month: _month,
        value: i
      });
    }
  
    this.year = year;
    this.month = month;
    this.dates = dates;
  
    return dates;
  }
  
  renderPanel() {
    switch (this.state.view) {
      case 'month':
        return this.renderMonthView();
  
      case 'year':
        return this.renderYearView();
  
      case 'dacade':
        return this.renderDacadeView();
  
      default:
    }
  }

  renderMonthView() {
    const { year, month, focusDateValue } = this.state;
    const dates = this.getDisplayDates();
    let focusDateFound = false;
    let selectedDateFound = false;
    let focus, selected;

    const processedDates = dates.map((d, i) => {
      focus = focusDateFound ? false : 
        new Date(d.year, d.month, d.value).valueOf() === focusDateValue;
      selected = selectedDateFound ? false :
        getDateStr(d.year, d.month, d.value) === this.props.value;

      if (focus) focusDateFound = true;
      if (selected) selectedDateFound = true;

      return {
        year: d.year,
        month: d.month,
        value: d.value,
        oos: d.month !== month,  // out of scope
        disabled: this.isDateDisabled(d.year, d.month, d.value) === true,
        focus: focus,
        selected: selected
      }
    });

    const renderedDates = [];

    // Split dates into rows.
    for (let i = 0; i < 6; i++) {
      renderedDates.push(
        <div 
          key={i}
          className="f-DP-row"
        >
          {processedDates.slice(i*7, i*7+7).map((d, j) => (
            <div
              key={j}
              className={cx(
                  'f-DP-cell',
                  { 'oos': d.oos }
              )}
            >
              <span
                className={cx('f-DP-date-item', { 
                  'focus': d.focus,
                  'selected': d.selected,
                  'disabled': d.disabled,
                })}
                onClick={() => {
                  !d.disabled && this.selectDate(d.year, d.month, d.value);
                }}
              >
                {d.value}
              </span>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div>
        <div className="f-DP-head">
          <span 
            className="f-DP-head-month"
            title="Select month"
            onClick={this.switchToYearView}
          >
            {`${MONTHS[month]}`}
          </span>
          <span 
            className="f-DP-head-year" 
            title="Select year"
            onClick={this.switchToDacadeView}
          >
            {`${year}`}
          </span>
          <span 
            className="f-DP-prev-btn"
            title="Last month"
            onClick={this.toPrevMonth}
          />
          <span 
            className="f-DP-next-btn"
            title="Next month"
            onClick={this.toNextMonth}
          />
        </div>
        <div className="f-DP-row">
          {WEEKDAYS_DISPLAY.map(day => (
            <div 
              key={day}
              className="f-DP-dow"
            >
              {day}
            </div>
          ))}
        </div>
        {renderedDates}
      </div>
    );
  }

  renderYearView() {
    const renderMonthCell = (monthName, i) => (
      <div
        key={i}
        className="f-DP-cell"
      >
        <span 
          className="f-DP-month-item"
          onClick={(event) => this.selectMonth(event, MONTHS_SHORT.indexOf(monthName), this.state.year)}
        >
          {monthName}
        </span>
      </div>
    );

    return (
      <div>
        <div className="f-DP-head">
          <span 
            className="f-DP-head-year" 
            title="Select year"
            onClick={this.switchToDacadeView}
          >
            {`${this.state.year}`}
          </span>
          <span 
            className="f-DP-prev-btn"
            title="Last year"
            onClick={this.toPrevYear}
          />
          <span 
            className="f-DP-next-btn"
            title="Next year"
            onClick={this.toNextYear}
          />
        </div>
        <div className="f-DP-row">
          {MONTHS_SHORT.slice(0, 4).map(renderMonthCell)}
        </div>
        <div className="f-DP-row">
          {MONTHS_SHORT.slice(4, 8).map(renderMonthCell)}
        </div>
        <div className="f-DP-row">
          {MONTHS_SHORT.slice(-4).map(renderMonthCell)}
        </div>
        <div className="f-DP-row">
          {MONTHS_SHORT.slice(0, 4).map((monthName, i) => 
            <div
              key={i}
              className={cx(
                'f-DP-cell',
                'oos'
              )}
            >
              <span 
                className={cx(
                  'f-DP-month-item',
                )}
                onClick={(event) => this.selectMonth(event, MONTHS_SHORT.indexOf(monthName), this.state.year + 1)}
              >
                {monthName}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  renderDacadeView() {
    const { year } = this.state;
    const startYear = year - year % 10 - 1;
    let yearArr = [];

    for (let i = 0; i < 16; i++) {
      yearArr.push(startYear + i);
    }

    const renderYearCell = (year, i) => (
      <div
        key={i}
        className={cx(
          'f-DP-cell',
          { 'oos': year < yearArr[1] || year > yearArr[10] }
        )}
      >
        <span 
          className="f-DP-year-item"
          onClick={(event) => this.selectYear(event, year)}
        >
          {year}
        </span>
      </div>
    );

    return (
      <div>
        <div className="f-DP-head">
          <span 
            className="f-DP-head-dacade" 
          >
            {`${yearArr[1]}-${yearArr[10]}`}
          </span>
          <span 
            className="f-DP-prev-btn"
            title="Last dacade"
            onClick={this.toPrevDacade}
          />
          <span 
            className="f-DP-next-btn"
            title="Next dacade"
            onClick={this.toNextDacade}
          />
        </div>
        <div className="f-DP-row">
          {yearArr.slice(0, 4).map(renderYearCell)}
        </div>
        <div className="f-DP-row">
          {yearArr.slice(4, 8).map(renderYearCell)}
        </div>
        <div className="f-DP-row">
          {yearArr.slice(8, 12).map(renderYearCell)}
        </div>
        <div className="f-DP-row">
          {yearArr.slice(-4).map(renderYearCell)}
        </div>
      </div>
    );
  }

  render() {
    const { 
      className,
      name,
      width,
      header,
      placeholder,
      required,
      underlined,
      disabled,
      fullWidth,
      disableClear,
    } = this.props;

    const { 
      isOpen
    } = this.state;

    const dateStr = this.props.value;

    return (
      <InputField
        className={className}
        width={width}
        fullWidth={fullWidth}
        header={header}
        required={required}
        disabled={disabled}
      >
        <div 
          ref={el => this.trigger = el}
          className={cx(
            'f-Input-wrapper',
            'f-DP-trigger',
            { 
              underlined, 
              disabled
            }
          )}
          tabIndex={disabled ? void 0 : 0}
          onClick={this.handleTriggerClick}
          onKeyDown={this.handleTriggerKeyDown}
        >
          {dateStr ?
            <div className="f-DP-value">
              {dateStr}
            </div>
            :
            <div className="f-DP-placeholder">
              {placeholder}
            </div>
          }
          {!disableClear &&
              <Icon 
                  name="times"
                  className={cx(
                      'f-DP-clear',
                      { 'f-hidden': !dateStr }
                  )}
                  onClick={this.handleClearBtnClick}
              />
          }
          <Icon name="calendar-o"/>
        </div>
        <Flyout
          className={cx(
            'f-DP-panel',
            className
          )}
          anchorEl={this.trigger}
          isOpen={isOpen}
          onKeyDown={this.handleKeyDown}
          onClose={this.closeAndRestore}
        >
          {this.renderPanel()}
        </Flyout>
      </InputField>
    );
  }
};

DatePicker.propTypes = {

  className: PropTypes.string,

  // Identify the datepicker
  name: PropTypes.string,

  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),

  header: PropTypes.node,

  placeholder: PropTypes.string,

  // Underlined style
  underlined: PropTypes.bool,

  required: PropTypes.bool,

  disabled: PropTypes.bool,

  fullWidth: PropTypes.bool,

  // The date value, e.g. '2016-08-08'.
  value: PropTypes.string,

  // If true, clear button is disabled.
  disableClear: PropTypes.bool,

  /**
   * Disable dates that satisfy the test function.
   * 
   * @param {Date} `date`
   * @return {bool}
   */
  disableDates: PropTypes.func,

  /**
   * Called when the value changes.
   * 
   * @param {string} `name`
   * @param {string} `value`
   */
  onChange: PropTypes.func
};

DatePicker.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => {}
};