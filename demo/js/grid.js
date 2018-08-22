import React from 'react';
import Code from '../util/code';
import { Grid, GridCell } from '../../src/js/fui';

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
                    <h4>Usage</h4>
                    <Code disableToggle>
        {`import { Grid, GridCell } from 'fui';`}
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
                </section>
            </div>
        )
    }
}