import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Pubsub from 'pubsub-js';

class Item extends Component {
    constructor(props) {
        super(props);
    }
    playMusic(musicItem){
    	Pubsub.publish('PLAY_MUSIC', musicItem)
    }
    delMusic(musicItem,e){
    	e.stopPropagation();
    	Pubsub.publish('DEL_MUSIC', musicItem)
    }
	render(){	
		let musicItem = this.props.musicItem;
		return (
			<li onClick={this.playMusic.bind(this,musicItem)} className={`${this.props.focus ? 'focus' : ''}`}>
				<p className="name l">{musicItem.title} - {musicItem.artist}</p>
				<p onClick={this.delMusic.bind(this,musicItem)} className="del r">删除</p>
			</li>
		)
	}
}
export default Item;