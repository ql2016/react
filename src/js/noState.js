import React from 'react';
import PropTypes from 'prop-types';

export default function MessaageView({message}){
	return(
		<div className="container">
			<div className="from">
				<span className="label">From: </span>
				<span className="value">{message.from}</span>
			</div>
			<div className="status">
				<span className="label">Status: </span>
				<span className="value"> {message.status}</span>
			</div>
			<div className="message">
				<span className="label">Message: </span>
				<span className="value">{message.content}</span>
			</div>
		</div>
	)
}
MessaageView.PropTypes = {
	message: PropTypes.object.isRequired
}