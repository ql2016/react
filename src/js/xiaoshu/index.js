import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Jsx from './rendered';
import Nested from './nested';
import State from './state';

// {}可以放任何javascript的代码 
class Index  extends Component {
	render(){
		return (
			<div className="index">
				{/*<Jsx />*/}
				{/*<Nested />*/}
				<State />
			</div>
		)
	}
}
export default Index;