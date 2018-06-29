import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Jsx from './rendered';
import Nested from './nested';

// {}可以放任何javascript的代码 
class Index  extends Component {
	render(){
		return (
			<div className="index">
				{/*<Jsx />*/}
				<Nested />
			</div>
		)
	}
}
export default Index;