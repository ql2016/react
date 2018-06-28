import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SinglePage from './index';
import { BrowserRouter as Router, Link, Route, Switch, history, hashHistory } from 'react-router-dom';

class Single extends Component {
	render(){
		return (
			<Router>
				<div>
					<Route path="/" component={SinglePage} />
				</div>
			</Router>
		)
	}
}
export default Single;