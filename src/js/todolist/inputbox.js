import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Pubsub from 'pubsub-js';

class InputBox extends Component {
	constructor(props) {
		super(props);		
	}
	
	render() {
		return (
			<div className="inputBox clearfix">
				<input placeholder="请输入一个任务" type="text" val={this.props.val} onChange={this.props.textChange} />
				<a onClick={this.props.addInfo} className="icon-add" href="javascript:void(0);">添加</a>
			</div>
		)
	}
}

export default InputBox;