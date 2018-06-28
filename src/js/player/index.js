import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import PlayerBar from './player';
import MusicList from './musicList';
import List from './list';

class Player extends Component {
	constructor(props){
        super(props);
        this.state = {
            list: MusicList,
            currentMusicItem: MusicList[0]
        }
    }
    componentDidMount() {
    	$('#player').jPlayer({
    		ready: function(){
    			$(this).jPlayer('setMedia',{
    				mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
    			}).jPlayer('play')
    		},
    		supplied: 'mp3',
    		wmode: 'window'
    	})
    }
	render(){
		return (
			<div>
				<Header />
                <List currentMusicItem={this.state.currentMusicItem} list={this.state.list}/>
			</div>
		)
	}
}
export default Player;