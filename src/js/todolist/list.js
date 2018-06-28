import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Pubsub from 'pubsub-js';

class List extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		var listItem = null;
		listItem = this.props.arr.map((item,i) => {
			return (
				<p className="clearfix"><span className="name">{item}</span><a href="javascript:void(0);" className="icon-del" onClick={() => {this.props.del(i)}}>X</a></p>
			)
		})
		return (
			<div className="todolist">
				{listItem}
      		</div>
		)
	}
}

export default List;