import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ColorBox extends Component {
	constructor(props) {
		super(props);
	}
	render() {	
		var styleCss = {
			width: 200,
			height: 150,
			margin: 20,
			border: '1px solid #ddd',
			backgroundColor: this.props.bgcolor
		}
		return (
			<div style={styleCss}></div>
		)
	}
}

export default ColorBox;