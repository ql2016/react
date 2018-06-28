import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Progress extends Component {
	changeProgress(e){
		let progressBar = this.refs.progressBar;
		console.log(progressBar)
		let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
		//this.props.onChangeProgress && this.props.onChangeProgress(progress)
	}
	render(){
		return (
			<div className="playerProgress" ref="progressBar" onClick={this.changeProgress.bind(this)}>
				<div className="progress" style={{width: `${this.props.progress}%`}}></div>				
			</div>
		)
	}
}
export default Progress;