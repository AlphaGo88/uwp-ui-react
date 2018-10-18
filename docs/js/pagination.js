import React from 'react';
import Code from '../util/code';
import { Pagination } from '../../src/js/uwp-ui-react';

export default class PaginationDemo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page1: 1,
      page2: 1
    };
  }

  handlePage1Change = (page) => {
    this.setState({
      page1: page
    });
  }

  handlePage2Change = (page) => {
    this.setState({
      page2: page
    });
  }

  handlePageSizeChange = (pageSize) => {
    this.setState({
      page2: 1,
      pageSize
    });
  }

  render() {
    return (
      <div>
        <h2>Pagination</h2>
        <section>
          <Pagination
            count={42}
            page={this.state.page1}
            onPageChange={this.handlePage1Change}
          />
          <br />
          <Pagination
            count={1282}
            page={this.state.page2}
            pageSize={this.state.pageSize}
            showSizer={true}
            onPageChange={this.handlePage2Change}
            onPageSizeChange={this.handlePageSizeChange}
          />
        </section>
        <Code>
{`import React from 'react';
import { Pagination } from 'uwp-ui-react';

export default class PaginationDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page1: 1,
      page2: 1
    };
  }

  handlePage1Change = (page) => {
    this.setState({
      page1: page
    });
  }

  handlePage2Change = (page) => {
    this.setState({
      page2: page
    });
  }

  handlePageSizeChange = (pageSize) => {
    this.setState({
      page2: 1,
      pageSize
    });
  }

  render() {
    return (
      <div>
        <h2>Pagination</h2>
        <section>
          <Pagination
            count={42}
            page={this.state.page1}
            onPageChange={this.handlePage1Change}
          />
          <br />
          <Pagination
            count={1282}
            page={this.state.page2}
            pageSize={this.state.pageSize}
            showSizer={true}
            onPageChange={this.handlePage2Change}
            onPageSizeChange={this.handlePageSizeChange}
          />
        </section>
      </div>
    );
  }
}`}
        </Code>
        <br />
        <h3>Props</h3>
        <table className="prop-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Required</th>
              <th>Default</th>
              <th>Desc</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>className</td>
              <td>string</td>
              <td></td>
              <td></td>
              <td>Overwrite or extend the styles.</td>
            </tr>
            <tr>
              <td>pageDisplay</td>
              <td>number</td>
              <td></td>
              <td>5</td>
              <td>How many page numbers are displayed at the same time.</td>
            </tr>
            <tr>
              <td>pageSize</td>
              <td>number</td>
              <td></td>
              <td>10</td>
              <td>Rows per page.</td>
            </tr>
            <tr>
              <td>count</td>
              <td>number</td>
              <td></td>
              <td>0</td>
              <td>The total number of rows.</td>
            </tr>
            <tr>
              <td>page</td>
              <td>number</td>
              <td></td>
              <td>1</td>
              <td>Current page number.</td>
            </tr>
            <tr>
              <td>showSizer</td>
              <td>bool</td>
              <td></td>
              <td>false</td>
              <td></td>
            </tr>
            <tr>
              <td>pageSizeOptions</td>
              <td>array</td>
              <td></td>
              <td>[10,20,30]</td>
              <td>Array of page size options. Only applies when `showSizer` is true.</td>
            </tr>
            <tr>
              <td>align</td>
              <td>string</td>
              <td></td>
              <td>'left'</td>
              <td>
                How the pages align in the dom container. 
                <br/>
                One of ['left', 'center', 'right'].
              </td>
            </tr>
            <tr>
              <td>onPageChange</td>
              <td>function</td>
              <td></td>
              <td></td>
              <td>
                Called when page changes.
                <br/>
                @param [number] `pageSize`
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}