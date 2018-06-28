import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HasState from './hasState.js';

class timer extends Component {
	constructor(props){
        super(props);
        this.state = {
            strikes: 0
        }
    }
    timer(){
        this.setState({
            strikes: this.state.strikes + 100
        })
    }
    componentDidMount(){
    	setInterval(this.timer.bind(this),1000)
    }    
    render(){
    	return (
    		<div className="container">{this.state.strikes}</div>
		)
    }
}

export default timer;