import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Content from './content';
import Data from './data';

class SinglePage extends Component {
	constructor(props){
        super(props);
        this.state = {
            list: Data,
            currentItem: Data[0]
        }
    }
 	changeContent(e){
 		var index = e.target.getAttribute('id');
 		this.setState({
 			currentItem: this.state.list[index-1]
 		})
 	
 	}
	render(){
		let item = null;
		item = this.state.list.map((item) => {
			return (
				<li id={item.id} onClick={this.changeContent.bind(this)} className={`${item === this.state.currentItem ? 'active': ''}`}>{item.artist}</li>
			)
		})
		return (
			<div>
				<div className="header">
					<h3>Simple SAP</h3>
				</div>
				<div className="single-list">
					<ul className="clearfix">
						{item}						
					</ul>
					<Content currentItem={this.state.currentItem} />
				</div>
			</div>
		)
	}
}
export default SinglePage;