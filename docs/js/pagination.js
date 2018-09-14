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
      </div>
    )
  }
}