import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, NavLink, Redirect } from 'react-router-dom';
import { Overlay, Icon } from '../src/js/uwp-ui-react';

import Home from './js/home';
import IconDoc from './js/iconDoc';
import Install from './js/install';
import ButtonDemo from './js/button';
import CheckboxDemo from './js/checkbox';
import CommandBarDemo from './js/commandBar';
import DatepickerDemo from './js/datepicker';
import DialogDemo from './js/dialog';
import FileInputDemo from './js/fileInput';
import FlyoutDemo from './js/flyout';
import GridDemo from './js/grid';
import LinkDemo from './js/link';
import MenuFlyoutDemo from './js/menuFlyout';
import MessageDemo from './js/message';
import PaginationDemo from './js/pagination';
import PasswordInputDemo from './js/passwordInput';
import ProgressDemo from './js/progress';
import RadioDemo from './js/radio';
import SearchDemo from './js/search';
import SelectDemo from './js/select';
import TabsDemo from './js/tabs';
import TextAreaDemo from './js/textarea';
import TextInputDemo from './js/textInput';
import TimePickerDemo from './js/timePicker';
import ToggleDemo from './js/toggle';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			navOpen: false
		};
	}

	close = () => {
		this.setState({
			navOpen: false 
		});
	}

	open = (event) => {
		this.setState({
			navOpen: true 
		});
	}

    render() {
    	const { navOpen, page } = this.state;

        return (
        	<HashRouter>
	        	<div>
		            <Overlay 
		            	className="sidebar"
		            	isOpen={navOpen}
		            	onClose={this.close}
		            >
	            		<div>
	            			<h5>Get Started</h5>
	            			<ul>
	            				<li><NavLink to="/install">Install</NavLink></li>
	            				<li><NavLink to="/icon">Icon</NavLink></li>
	            			</ul>
	            			<h5>Components</h5>
	            			<ul>
	            				<li><NavLink to="/button">Button</NavLink></li>
	            				<li><NavLink to="/checkbox">Checkbox</NavLink></li>
	            				<li><NavLink to="/commandbar">Command Bar</NavLink></li>
	            				<li><NavLink to="/datepicker">Date Picker</NavLink></li>
	            				<li><NavLink to="/dialog">Dialog</NavLink></li>
	            				<li><NavLink to="/fileinput">File Input</NavLink></li>
	            				<li><NavLink to="/flyout">Flyout</NavLink></li>
	            				<li><NavLink to="/grid">Grid</NavLink></li>
	            				<li><NavLink to="/hyperlink">HyperLink</NavLink></li>
	            				<li><NavLink to="/menuFlyout">Menu Flyout</NavLink></li>
	            				<li><NavLink to="/message">Message</NavLink></li>
	            				<li><NavLink to="/pagination">Pagination</NavLink></li>
	            				<li><NavLink to="/passwordInput">Password Input</NavLink></li>
	            				<li><NavLink to="/progress">Progress</NavLink></li>
	            				<li><NavLink to="/radio">Radio</NavLink></li>
	            				<li><NavLink to="/search">Search</NavLink></li>
	            				<li><NavLink to="/select">Select</NavLink></li>
	            				<li><NavLink to="/tabs">Tabs</NavLink></li>
	            				<li><NavLink to="/textarea">Text Area</NavLink></li>
	            				<li><NavLink to="/textInput">Text Input</NavLink></li>
	            				<li><NavLink to="/timepicker">Time Picker</NavLink></li>
	            				<li><NavLink to="/toggle">Toggle</NavLink></li>
	            			</ul>
		            	</div>
		            </Overlay>
		            <div className="header">
		            	<Icon
		            		className="toggle-btn"
		            		name="navicon"
		            		color="#fff"
		            		onClick={this.open}
		            	/>
		            	<span className="title">UWP-UI-REACT</span>
		            </div>
	    			<div className="main">
	    				<Route exact path="/" component={Home} />
	    				<Route path="/install" component={Install} />
	    				<Route path="/icon" component={IconDoc} />
	    				<Route path="/button" component={ButtonDemo} />
	    				<Route path="/checkbox" component={CheckboxDemo} />
	    				<Route path="/commandbar" component={CommandBarDemo} />
	    				<Route path="/datepicker" component={DatepickerDemo} />
	    				<Route path="/dialog" component={DialogDemo} />
	    				<Route path="/fileinput" component={FileInputDemo} />
	    				<Route path="/flyout" component={FlyoutDemo} />
	    				<Route path="/grid" component={GridDemo} />
	    				<Route path="/hyperlink" component={LinkDemo} />
	    				<Route path="/menuFlyout" component={MenuFlyoutDemo} />
	    				<Route path="/message" component={MessageDemo} />
	    				<Route path="/pagination" component={PaginationDemo} />
	    				<Route path="/passwordInput" component={PasswordInputDemo} />
	    				<Route path="/progress" component={ProgressDemo} />
	    				<Route path="/radio" component={RadioDemo} />
	    				<Route path="/search" component={SearchDemo} />
	    				<Route path="/select" component={SelectDemo} />
	    				<Route path="/tabs" component={TabsDemo} />
	    				<Route path="/textarea" component={TextAreaDemo} />
	    				<Route path="/textInput" component={TextInputDemo} />
	    				<Route path="/timepicker" component={TimePickerDemo} />
	    				<Route path="/toggle" component={ToggleDemo} />
	    			</div>
	            </div>
            </HashRouter>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('App')
)