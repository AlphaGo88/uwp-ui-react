// Pagination
// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Select from '../Select';
import SelectItem from '../SelectItem';
import Icon from '../Icon';

export default class Pagination extends React.Component {

    constructor(props) {
        super(props);

        if (props.showJumper) {
            this.state = {
                jumperInputValue: ''
            };
        }
    }

    getPageCount() {
        return Math.ceil(this.props.count / this.props.pageSize);
    }

    handlePageChange(page) {
        if (page < 1) {
            page = 1;
        }
        if (page > this.getPageCount()) {
            page = this.getPageCount();
        }
        this.props.onPageChange(page);
    }

    handlePageSizeChange = (name, pageSize) => {
        this.props.onPageSizeChange(pageSize);
    }

    handleJumperInputChange = (event) => {
        this.setState({ 
            jumperInputValue: event.target.value
        });
    }

    handleJumperInputKeyDown = (event) => {
        if (event.which === 13) {
            this.handleJumperBtnClick();
        }
    }

    handleJumperBtnClick = () => {
        let jumpTo = parseInt(this.state.jumperInputValue);

        if (isNaN(jumpTo)) {
            jumpTo = '';
        } else if (jumpTo < 1) {
            jumpTo = 1;
        } else if (jumpTo > this.getPageCount()) {
            jumpTo = this.getPageCount();
        }

        this.setState({
            jumperInputValue: jumpTo
        });
        if (jumpTo) {
            this.handlePageChange(jumpTo);
        }
    }

    render() {
        const { 
            className,
            count, 
            pageDisplay, 
            pageSize,
            page,
            showJumper,
            showSizer,
            pageSizeOptions,
            align
        } = this.props;

        if (count <= pageSize) return null;

        const pageCount = this.getPageCount();
        const leftNo = Math.ceil(page / pageDisplay) * pageDisplay - pageDisplay + 1;
        const rightNo = Math.min(leftNo + pageDisplay - 1, pageCount);
        let pageNos = [];

        for (let i = leftNo; i <= rightNo; i++) {
            const pageClass = cx(
                'f-Pagination-item',
                {
                    'active': i === page
                }
            );

            pageNos.push(
                <span 
                    key={i}
                    className={pageClass} 
                    onClick={() => {
                        if (i !== page) this.handlePageChange(i);
                    }}
                >
                    {i}
                </span>
            );
        }

        if (leftNo > 1) {
            pageNos.unshift(
                <span
                    key={0}
                    className="f-Pagination-more"
                    onClick={() => this.handlePageChange(page - pageSize)}
                >
                    ...
                </span>
            )
            pageNos.unshift(
                <span
                    key={1}
                    className="f-Pagination-item"
                    onClick={() => this.handlePageChange(1)}
                >
                    1
                </span>
            )
        }

        if (rightNo < pageCount) {
            pageNos.push(
                <span
                    key={-1}
                    className="f-Pagination-more"
                    onClick={() => this.handlePageChange(page + pageSize)}
                >
                    ...
                </span>
            )
            pageNos.push(
                <span
                    key={pageCount}
                    className="f-Pagination-item"
                    onClick={() => this.handlePageChange(pageCount)}
                >
                    {pageCount}
                </span>
            )
        }

        return (
            <div 
                className={cx(
                    'f-Pagination',
                    align, 
                    className
                )}
            >
                <Icon
                    name="chevron-left"
                    className="f-Pagination-prev"
                    disabled={page === 1}
                    onClick={() => this.handlePageChange(page - 1)}
                />
                {pageNos}
                <Icon
                    name="chevron-right"
                    className="f-Pagination-next"
                    disabled={page === pageCount}
                    onClick={() => this.handlePageChange(page + 1)}
                />
                {showSizer &&
                    <div className="f-Pagination-sizer">
                        <Select 
                            width={60}
                            value={pageSize}
                            onChange={this.handlePageSizeChange}
                        >
                            {pageSizeOptions.map((it, i) => (
                                <SelectItem 
                                    key={i}
                                    value={it} 
                                    text={it}
                                />                            
                            ))}
                        </Select>
                    </div>
                }
                {showJumper &&
                    <div className="f-Pagination-jump">
                        Goto
                        <input 
                            type="text" 
                            className="f-input small f-Pagination-jump-input"
                            value={this.state.jumperInputValue}
                            onChange={this.handleJumperInputChange}
                            onKeyDown={this.handleJumperInputKeyDown}
                        />
                        <span 
                            className="f-Pagination-jump-btn"
                            onClick={this.handleJumperBtnClick}
                        >
                            Go
                        </span>
                    </div>
                }
            </div>
        );
    }
};

Pagination.propTypes = {

    className: PropTypes.string,

    // How many page numbers are displayed at the same time.
    pageDisplay: PropTypes.number,

    // Rows per page.
    pageSize: PropTypes.number,

    // The total number of rows.
    count: PropTypes.number,

    // The current page
    page: PropTypes.number,

    showJumper: PropTypes.bool,

    showSizer: PropTypes.bool,

    pageSizeOptions: PropTypes.array,

    align: PropTypes.oneOf(['left', 'center', 'right']),

    /**
     * Callback when the active page changes.
     * @param {number} page
     */
    onPageChange: PropTypes.func,

    /**
     * Callback when the page size changes.
     * @param {number} pageSize
     */
    onPageSizeChange: PropTypes.func,
};

Pagination.defaultProps = {
    count: 0,
    pageDisplay: 5,
    pageSize: 10,
    page: 1,
    showJumper: false,
    showSizer: false,
    pageSizeOptions: [10, 20, 30],
    align: 'left',
    onPageChange: () => {},
    onPageSizeChange: () => {}
};