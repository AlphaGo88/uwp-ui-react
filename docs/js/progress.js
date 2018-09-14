import React from 'react';
import Code from '../util/code';
import { ProgressRing, ProgressBar } from '../../src/js/uwp-ui-react';

export default class ProgressDemo extends React.Component {

  render() {
    return (
      <div>
        <h2>Progress</h2>
        <section>
          <h4>Usage</h4>
          <Code disableToggle>
            {`import { ProgressRing, ProgressBar } from 'uwp-ui-react';`}
          </Code>
        </section>
        <section>
          <h4>Progress Ring</h4>
          <div>
            <ProgressRing />&nbsp;&nbsp;&nbsp;&nbsp;
            <ProgressRing height={30} />&nbsp;&nbsp;&nbsp;&nbsp;
            <ProgressRing height={40} />
          </div>
          <Code>
{`<ProgressRing/>&nbsp;&nbsp;&nbsp;&nbsp;
<ProgressRing height={30}/>&nbsp;&nbsp;&nbsp;&nbsp;
<ProgressRing height={40}/>`}
          </Code>
        </section>
        <section>
          <h4>Progress Bar</h4>
          <div>
            <ProgressBar percent={20} />
            <br />
            <ProgressBar percent={50} />
            <br />
            <ProgressBar percent={100} />
          </div>
          <Code>
{`<ProgressBar percent={20}/>
<ProgressBar percent={50}/>
<ProgressBar percent={100}/>`}
          </Code>
        </section>
        <section>
          <h4>Indeterminate</h4>
          <div>
            <ProgressBar indeterminate />
          </div>
          <Code>
            {`<ProgressBar indeterminate/>`}
          </Code>
        </section>
      </div>
    )
  }
}