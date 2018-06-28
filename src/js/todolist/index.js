import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Inputbox from './inputbox';
import List from './list';

class Todolist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			val: '',
			arr: []
		}
	}
	textChange(e){
		this.setState({
			val: e.target.value
		})
	}
	addInfo() {
		this.setState({
			arr: [...this.state.arr,this.state.val]
		})
	}
	del(index){
		this.setState({
			arr: this.state.arr.filter((i,ind) => {
				return index !== ind
			})
		})
		
	}
	render() {
		return (
			<div className="">
				<Inputbox val={this.state.val} textChange={this.textChange.bind(this)} addInfo={this.addInfo.bind(this)} />
				<List arr={this.state.arr} del={index=>this.del(index)} />
			</div>
		)
	}
}

export default Todolist;