import React from 'react';
import Code from '../util/code';
import { HyperLink } from '../../src/js/uwp-ui-react';

export default class Introduction extends React.Component {

  render() {
    return (
      <div>
        <div>
          Uwp-ui-react is a web ui library that implements Microsoft's <HyperLink href="https://docs.microsoft.com/en-us/windows/uwp/design/basics/">uwp-design</HyperLink>.
          <br/>
          Uwp-ui-react is built with <HyperLink href="https://reactjs.org/"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="20"></img>React</HyperLink>.
        </div>
        <br />
        <h4>Install via npm</h4>
        <Code disableToggle>
          {`$ npm install --save uwp-ui-react`}
        </Code>
        <br/>
        <h4>Usage</h4>
        <Code disableToggle>
{`import React form 'react';
import ReactDOM from 'react-dom';
import { Button } from 'uwp-ui-react';

import 'uwp-ui-react/uwp-ui-react.css';

function App() {
  return (
    <Button>My Button</Button>
  );
}

ReactDOM.render(<App/>, document.getElementById('app'));`}
        </Code>
        <br/>
        <h4>Style</h4>
        <div>
          Uwp-ui-react's css contains <HyperLink href="http://necolas.github.io/normalize.css/">normalize.css</HyperLink> for global style normalization.
        <br/>
          Modern browsers(IE10+) are supported.
        </div>
        <br/>
        <h4>Icon</h4>
        <div>
					Uwp-ui-react uses <HyperLink href="https://fontawesome.com/v4.7.0/">font-awesome-v4.7.0</HyperLink> as iconfont.
          <br/>
					Please include it in your html:
					<Code disableToggle>
{`<link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">`}
					</Code>
				</div>
        <br/>
      </div>
    )
  }
}