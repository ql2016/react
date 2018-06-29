import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class House  extends Component {
	render(){
		return (
			<div className="house">
				<Room />
				<Bathroom />
			</div>
		)
	}
}
class Room  extends Component {
	render(){
		return (
			<div className="room">
				<Man />
				<Dog />
				<Dog />
			</div>
		)
	}
}
class Bathroom  extends Component {
	render(){
		return (
			<div className="bathroom">
				bathroom
			</div>
		)
	}
}
class Man  extends Component {
	render(){
		return (
			<div className="man">
				man
			</div>
		)
	}
}

class Dog  extends Component {
	bank(){
		console.log('bank')
	}
	run(){
		console.log('run')
	}
	handleClick(word,e){
		this.bank();
		this.run()
	}
	render(){
		return (
			<div className="dog" onClick={this.handleClick.bind(this,'hello')}>
				dog
			</div>
		)
	}
}
class Nested  extends Component {
	render(){
		return (
			<House />
		)
	}
}
export default Nested;