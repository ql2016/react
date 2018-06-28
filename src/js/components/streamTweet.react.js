import React, {Component} from 'react';

class StreamTweet extends Component {
	constructor(props){
		document.write('[Snapterest] StreamTweet: 1. Running getInitialState();</br>')
		super(props);
		this.state = {
			num: null,
			headerText: null
		}
	}
	componentWillMount() {
		document.write('[Snapterest] StreamTweet: 2. Running componentWillMount();</br>');
	}
	componentDidMount() {
		document.write('[Snapterest] StreamTweet: 4. Running componentDidMount();</br>');
	}
	render() {
		document.write('[Snapterest] StreamTweet: 3. Running render();</br>');
		return (
			null
		)
	}
} 

export default StreamTweet;