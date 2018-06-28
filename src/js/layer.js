import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HasState from './hasState.js';

class TState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
             { 
             	from: 'John',
             	content: 'The event will start next week',
             	status: 'unread' 
             }, 
             { 
         		from: 'Martha', 
         		content: 'I will be traveling soon', 
             	status: 'read' 
             }, 
             { 
             	from: 'Jacob', 
             	content: 'Talk later. Have a great day!', 
             	status: 'read' 
             }
             ]
        };
    }
	render(){
		const messageViews = this.state.messages.map(function(message,index){
			return (
				<HasState key={ index } message={ message } />
			)
		})
		return (
			<div>
				{ messageViews }
			</div>
		)
	}
}

export default TState;