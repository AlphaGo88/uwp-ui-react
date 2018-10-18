import React from 'react';
import Code from '../util/code';
import { Grid, GridCell } from '../../src/js/uwp-ui-react';

export default class GridDemo extends React.Component {

  render() {
    const galleryCellStyle = { padding: '0 2px 2px 0' };
    const imgStyle = {
      display: 'block',
      width: '100%'
    };

    return (
      <div>
        <h2>Grid</h2>
        <section>
          <p>
            Uwp-ui-react has a 12-col grid system which uses flexbox layout.
            Just use the <mark>Grid</mark> and <mark>GridCell</mark> to build your grid layout.
            The <mark>GridCell</mark>s must be wrapped with a <mark>Grid</mark>.
            The grid system is responsive based on the screen size.
            I provide prefixed props for middle screen and small screen(See demos).
          </p>
        </section>
        <section>
          <h4>Usage</h4>
          <Code disableToggle>
            {`import { Grid, GridCell } from 'uwp-ui-react';`}
          </Code>
        </section>
        <section>
          <Grid>
            <GridCell col={4} className="grid-cell-demo">col-4</GridCell>
            <GridCell col={4} className="grid-cell-demo">col-4</GridCell>
            <GridCell col={4} className="grid-cell-demo">col-4</GridCell>
          </Grid>
          <Code>
            {`<Grid>
  <GridCell col={4} className="grid-cell-demo">col-4</GridCell>
  <GridCell col={4} className="grid-cell-demo">col-4</GridCell>
  <GridCell col={4} className="grid-cell-demo">col-4</GridCell>
</Grid>`}
          </Code>
        </section>
        <section>
          <Grid>
            <GridCell col={4} className="grid-cell-demo">col-4</GridCell>
            <GridCell className="grid-cell-demo">auto</GridCell>
          </Grid>
          <Code>
            {`<Grid>
  <GridCell col={4} className="grid-cell-demo">col-4</GridCell>
  <GridCell className="grid-cell-demo">auto</GridCell>
</Grid>`}
          </Code>
        </section>
        <section>
          <Grid>
            <GridCell col={2} className="grid-cell-demo">col-2</GridCell>
            <GridCell className="grid-cell-demo">auto</GridCell>
            <GridCell col={3} className="grid-cell-demo">col-3</GridCell>
          </Grid>
          <Code>
            {`<Grid>
  <GridCell col={2} className="grid-cell-demo">col-2</GridCell>
  <GridCell className="grid-cell-demo">auto</GridCell>
  <GridCell col={3} className="grid-cell-demo">col-3</GridCell>
</Grid>`}
          </Code>
        </section>
        <section>
          <Grid>
            <GridCell col={4} offset={2} className="grid-cell-demo">col-4 offset-2</GridCell>
            <GridCell col={4} offset={2} className="grid-cell-demo">col-4 offset-2</GridCell>
          </Grid>
          <Code>
            {`<Grid>
  <GridCell col={4} offset={2} className="grid-cell-demo">col-4 offset-2</GridCell>
  <GridCell col={4} offset={2} className="grid-cell-demo">col-4 offset-2</GridCell>
</Grid>`}
          </Code>
        </section>
        <section>
          <Grid>
            <GridCell width={160} className="grid-cell-demo">160px</GridCell>
            <GridCell className="grid-cell-demo">auto</GridCell>
          </Grid>
          <Code>
            {`<Grid>
  <GridCell width={160} className="grid-cell-demo">160px</GridCell>
  <GridCell className="grid-cell-demo">auto</GridCell>
</Grid>`}
          </Code>
        </section>
        <section>
          <Grid>
            <GridCell col={4} className="grid-cell-demo">col-4</GridCell>
            <GridCell col={8} className="grid-cell-demo">
              <Grid>
                <GridCell col={6} className="grid-cell-demo">nested</GridCell>
                <GridCell col={6} className="grid-cell-demo">nested</GridCell>
              </Grid>
            </GridCell>
          </Grid>
          <Code>
            {`<Grid>
  <GridCell col={4} className="grid-cell-demo">col-4</GridCell>
  <GridCell col={8} className="grid-cell-demo">
    <Grid>
      <GridCell col={6} className="grid-cell-demo">nested</GridCell>
      <GridCell col={6} className="grid-cell-demo">nested</GridCell>
    </Grid>
  </GridCell>
</Grid>`}
          </Code>
        </section>
        <section>
          <Grid>
            <GridCell
              col={4}
              smCol={6}
              style={galleryCellStyle}
            >
              <img src="./img/bg.jpg" style={imgStyle} />
            </GridCell>
            <GridCell
              col={4}
              smCol={6}
              style={galleryCellStyle}
            >
              <img src="./img/bg.jpg" style={imgStyle} />
            </GridCell>
            <GridCell
              col={4}
              smCol={6}
              style={galleryCellStyle}
            >
              <img src="./img/bg.jpg" style={imgStyle} />
            </GridCell>
            <GridCell
              col={4}
              smCol={6}
              style={galleryCellStyle}
            >
              <img src="./img/bg.jpg" style={imgStyle} />
            </GridCell>
            <GridCell
              col={4}
              smCol={6}
              style={galleryCellStyle}
            >
              <img src="./img/bg.jpg" style={imgStyle} />
            </GridCell>
          </Grid>
          <Code>
            {`<Grid>
  <GridCell 
    col={4} 
    smCol={6}
    style={galleryCellStyle}
  >
    <img src="./img/bg.jpg" style={imgStyle} />
  </GridCell>
  <GridCell 
    col={4} 
    smCol={6}
    style={galleryCellStyle}
  >
    <img src="./img/bg.jpg" style={imgStyle} />
  </GridCell>
  <GridCell 
    col={4}
    smCol={6} 
    style={galleryCellStyle}
  >
    <img src="./img/bg.jpg" style={imgStyle} />
  </GridCell>
  <GridCell 
    col={4} 
    smCol={6}
    style={galleryCellStyle}
  >
    <img src="./img/bg.jpg" style={imgStyle} />
  </GridCell>
  <GridCell 
    col={4} 
    smCol={6}
    style={galleryCellStyle}
  >
    <img src="./img/bg.jpg" style={imgStyle} />
  </GridCell>
</Grid>`}
          </Code>
          <br />
          <h3>Props of Grid</h3>
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
                <td>style</td>
                <td>object</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <br />
          <h3>Props of GridCell</h3>
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
                <td>style</td>
                <td>object</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>width</td>
                <td>number</td>
                <td></td>
                <td></td>
                <td>If set, the cell's width is fixed by `px`.</td>
              </tr>
              <tr>
                <td>col</td>
                <td>number</td>
                <td></td>
                <td></td>
                <td>Colomns the cell spans.</td>
              </tr>
              <tr>
                <td>mdCol</td>
                <td>number</td>
                <td></td>
                <td></td>
                <td>Colomns the cell spans on middle screen.</td>
              </tr>
              <tr>
                <td>smCol</td>
                <td>number</td>
                <td></td>
                <td></td>
                <td>Colomns the cell spans on small screen.</td>
              </tr>
              <tr>
                <td>offset</td>
                <td>number</td>
                <td></td>
                <td></td>
                <td>The cell's offset count in columns.</td>
              </tr>
              <tr>
                <td>mdOffset</td>
                <td>number</td>
                <td></td>
                <td></td>
                <td>The cell's offset count in columns on middle screen.</td>
              </tr>
              <tr>
                <td>smOffset</td>
                <td>number</td>
                <td></td>
                <td></td>
                <td>The cell's offset count in columns on small screen.</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}