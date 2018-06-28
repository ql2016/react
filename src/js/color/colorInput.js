import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ColorInput extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="inputBox">
				<input type="text" ref="_input" onChange={this.props.textChange} />
				<a href="javascript:void(0);" className="icon-add" onClick={this.props.changeColor}>变</a>
			</div>
		)
	}
}

export default ColorInput;