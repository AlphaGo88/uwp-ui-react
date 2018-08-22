// Search
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon';
import ClickAwayListener from '../internal/ClickAwayListener';

export default class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            focus: false,
            suggestionOpen: false,
            focusIndex: -1  // focused suggestion's index
        };
        this.match = [];  // matched suggestions
    }

    focus() {
        this.input.focus();
    }

    blur() {
        this.input.blur();
    }

    handleFocus = () => {
        this.setState({
            focus: true 
        });
        if (this.props.onFocus) {
            this.props.onFocus();
        }
    }

    handleBlur = () => {
        this.setState({
            focus: false
        });
        if (this.props.onBlur) {
            this.props.onBlur();
        }
    }

    closeSuggestions = () => {
        this.setState({
            suggestionOpen: false,
            focusIndex: -1
        });
    }

    handleChange = (event) => {
        this.setState({
            suggestionOpen: true,
            focusIndex: -1
        });
        this.props.onChange(event.target.value);
    }

    handleSubmit = (event) => {
        // Prevent default form submit action
        event.preventDefault();

        this.props.onSearch(this.input.value);
    }

    handleSearchBtnClick = (event) => {
    	if (!this.props.disabled) {
    		this.props.onSearch(this.input.value);
    	}
    }

    handleSuggestItemClick = (str) => {
        this.setState({
            focus: false,
            suggestionOpen: false,
            focusIndex: -1
        });
        this.props.onChange(str);
        this.props.onSearch(str);
    }

    handleKeyDown = (event) => {
        const { focusIndex, suggestionOpen } = this.state;

        if (this.props.suggestions) {
            switch (event.which) {
                // Tab - focus away
                // Close suggestions
                case 9:
                    if (suggestionOpen) {
                        this.closeSuggestions();
                    }
                    break;

                // Enter
                // Search the focused suggestion
                case 13:
                    if (suggestionOpen && focusIndex > -1) {
                        // Prevent default [type=search]'s behavior
                        event.preventDefault();

                        const str = this.match[focusIndex];

                        this.setState({
                            suggestionOpen: false,
                            focusIndex: -1
                        });
                        this.props.onChange(str);
                        this.props.onSearch(str);
                    }
                    break;

                // Right
                // Down
                // focus next item
                case 39:
                case 40:
                    event.preventDefault();
                    this.setState({
                        focusIndex: focusIndex === this.match.length - 1 ? 0 : focusIndex + 1
                    });
                    break;

                // Left
                // Up
                // focus previous item
                case 37:
                case 38:
                    event.preventDefault();
                    this.setState({
                        focusIndex: focusIndex <= 0 ? this.match.length - 1 : focusIndex - 1
                    });
                    break;
                default:
            }
        }
    }

    render() {
        return (
            this.props.suggestions ?
                <ClickAwayListener onClickAway={this.closeSuggestions}>
                    {this._render()}
                </ClickAwayListener>
                :
                this._render()
        );
    }

    _render() {
        const { 
            className,
            style,
            value,
            fullWidth,
            underlined,
            borderless,
            translucent,
            disabled,
            onSearch,
            suggestions,
            ...other
        } = this.props;

        const { 
            focus,
            suggestionOpen,
            focusIndex
        } = this.state;

        let renderedMatch = [];

        if (value && suggestions && suggestionOpen) {
            this.match = suggestions.filter(it => it.indexOf(value) > -1).slice(0, 6);

            renderedMatch = this.match.map((it, i) => 
                <div 
                    key={i}
                    className={cx(
                        'f-suggest-item',
                        { focus: focusIndex === i }
                    )}
                    onClick={() => this.handleSuggestItemClick(it)}
                >
                    {it}
                </div>
            );
        }
        
        return (
            <div 
                className={cx(
                    'f-Input-wrapper', 
                    'f-Search',
                    { 
                        focus,
                    	underlined,
                        borderless,
                        translucent,
                    	fullWidth,
                        disabled
                    }
                )}
                style={style}
            >
                <form 
                    className="f-Search"
                    action="" 
                    onSubmit={this.handleSubmit}
                >
                    <input
                        {...other}
                        ref={el => this.input = el}
                        type="search"
                        value={value}
                        autoComplete="off"
                        disabled={disabled}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                    />
                </form>
                <div className="f-Input-suffix">
                    <Icon 
                        name="search"
                        className="f-Search-icon"
                        onClick={this.handleSearchBtnClick}
                    />
                </div>
                {renderedMatch.length > 0 &&
                    <div className="f-suggestions">
                        {renderedMatch}
                    </div>
                }
            </div>
        );
    }
}

Search.propTypes = {

    // Overwrite or extend the styles
    className: PropTypes.string,

    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    value: PropTypes.string,

    // Underlined style
    underlined: PropTypes.bool,

    fullWidth: PropTypes.bool,

    // Auto suggestions
    suggestions: PropTypes.array,

    /**
     * Called when the search value changes
     * 
     * @param {string} `value`
     */
    onChange: PropTypes.func,

    /**
     * Called on search
     * 
     * @param {string} `value`
     */
    onSearch: PropTypes.func,
};

Search.defaultProps = {
    value: '',
    onChange: () => {},
    onSearch: () => {}
};