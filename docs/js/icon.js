import React from 'react';
import Code from '../util/code';
import { Icon } from '../../src/js/uwp-ui-react';

export default class IconDemo extends React.Component {
  render() {
    return (
      <div>
        <h2>Icon</h2>
        <section>
          <h4>Usage</h4>
          <Code disableToggle>
            {`import { Icon } from 'uwp-ui-react';`}
          </Code>
        </section>
        <section>
          <h4>Basic</h4>
          <div>
            <Icon name="desktop" />&nbsp;&nbsp;&nbsp;
            <Icon name="phone" />&nbsp;&nbsp;&nbsp;
            <Icon name="rss" />&nbsp;&nbsp;&nbsp;
          </div>
          <Code>
{`<Icon name="desktop" />
<Icon name="phone" />
<Icon name="rss" />`}
          </Code>
        </section>
        <section>
          <h4>Color</h4>
          <div>
            <Icon name="weibo" color="red" />&nbsp;&nbsp;&nbsp;
            <Icon name="qq" color="lightblue" />&nbsp;&nbsp;&nbsp;
            <Icon name="weixin" color="green" />&nbsp;&nbsp;&nbsp;
          </div>
          <Code>
{`<Icon name="weibo" color="red" />
<Icon name="qq" color="lightblue" />
<Icon name="weixin" color="green" />`}
          </Code>
        </section>
        <section>
          <h4>Size</h4>
          <div>
            <Icon name="bell" size={16} />&nbsp;&nbsp;&nbsp;
            <Icon name="bell" size={18} />&nbsp;&nbsp;&nbsp;
            <Icon name="bell" size={20} />&nbsp;&nbsp;&nbsp;
            <Icon name="bell" size={22} />&nbsp;&nbsp;&nbsp;
            <Icon name="bell" size={24} />&nbsp;&nbsp;&nbsp;
          </div>
          <Code>
{`<Icon name="bell" size={16} />
<Icon name="bell" size={18} />
<Icon name="bell" size={20} />
<Icon name="bell" size={22} />
<Icon name="bell" size={24} />`}
          </Code>
        </section>
      </div>
    )
  }
}