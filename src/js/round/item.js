import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Item extends Component {
	constructor(props) {
		super(props);
	}
	render() {	
		var styleCss = {
			width: 50,
			height: 50,
			margin: 20,
			display: 'inline-block',
			borderRadius: '50%',
			background: this.props.bgColor
		}
		return (
			<p style={styleCss}></p>
		)
	}
}

export default Item;