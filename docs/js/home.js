import React from 'react';
import { HyperLink } from '../../src/js/uwp-ui-react';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <div>
          UWP-UI-REACT is a web ui library that implements Microsoft's <HyperLink href="https://docs.microsoft.com/en-us/windows/uwp/design/basics/">uwp-design</HyperLink>.
        </div>
        <br/>
        <div>
          <img src="./img/demo.png" width="100%"/>
        </div>
      </div>
    )
  }
}