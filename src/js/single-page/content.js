import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import data from './data';

class Content extends Component {
	constructor(props){
        super(props);
    }
	render(){
		const item = this.props.currentItem;
		return (
			<div className="listContent">
				<h3>{item.title}</h3>
				<p>{item.content}</p>
			</div>	
		)
	}
}
export default Content;