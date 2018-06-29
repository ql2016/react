import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class State  extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLike: false,
			isRunning: false,
			isBarking: false
		}
	}
	praise(word,e){
		this.setState({
			isLike: !this.state.isLike
		})
	}
	render(){
		return (
			<div>
				<div onClick={this.handleClick.bind(this)}>
					{this.state.isLike ? '取消' : '点赞'}
				</div>
				<div onClick={this.}></div>
			</div>
		)
	}
}

export default State;