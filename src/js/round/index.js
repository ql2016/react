import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import Item from './item';

class Round extends Component {
	constructor(props) {
		super(props);
	}
	render() {	
		var styleCss = {
			width: 50,
			height: 50,
			margin: 20,
			display: 'inline-block',
			borderRadius: '50%'
		}
		var colors = ['#FFC826','#4EEDFF','#FF4598','#60FF8E','#7276FF'];
		var renderData = [];
		function item(){
			for(var i = 0; i < colors.length; i++){
				var bgColor = Math.floor(Math.random() * colors.length);
				var a = Object.assign({backgroundColor:colors[bgColor]},styleCss);
				console.log(a)
				renderData.push(<p style={a}></p>)	
			}
			return renderData;
		}
		return (
			<div className="round">
				{item()}
			</div>
		)
	}
}

export default Round;