import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ColorBox from './colorBox';
import ColorInput from './colorInput';

class Color extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: '',
			bgcolor: ''
		}
	}
	textChange(e){
		this.setState({
			colors: e.target.value
		})
	}
	changeColor(e){
		this.setState({
			bgcolor: this.state.colors
		})
		this.refs.childRef.refs._input.value = '';
		this.refs.childRef.refs._input.focus();
	}
	render() {
		return (
			<div>
				<ColorBox bgcolor={this.state.bgcolor} />
				<ColorInput ref="childRef" colors={this.state.colors} textChange={this.textChange.bind(this)} changeColor={this.changeColor.bind(this)} />
			</div>
		)
	}
}

export default Color;