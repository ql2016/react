import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
	render(){
		return (
			<div className="playerHeader">
				<img src={require('../../images/player.png')} width="40" height="40" />
				<h4>React Music Player</h4>
			</div>
		)
	}
}
export default Header;