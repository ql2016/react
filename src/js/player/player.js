import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Progress from './progress';
import jPlayer from 'jplayer';
import { Link } from 'react-router-dom';
import Pubsub from 'pubsub-js';

let duration = null;
class Player extends Component {
	constructor(props){
        super(props);
        this.state = {
            progress: 0,
            volume: 0,
            isPlay: true,
            leftTime: 0
        }
    }
    playPrev(){
        Pubsub.publish('PLAY_PREV');
    }
    playNext(){
        Pubsub.publish('PLAY_NEXT');
    }
    formatTime(time){
        time = Math.floor(time);
        let miniutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${miniutes}:${seconds}`;
    }
    componentDidMount() {
    	$('#player').bind($.jPlayer.event.timeupdate, e=> {
    		duration = e.jPlayer.status.duration;
    		this.setState({
    			progress: e.jPlayer.status.currentPercentAbsolute,
    			volume: e.jPlayer.options.volume * 100,
                leftTime: this.formatTime(duration * (1 - e.jPlayer.status.currentPercentAbsolute / 100))
    		})
    	})
        $('#player').jPlayer('play');
    }
    compontentWillUnMount(){
    	$('#player').unbind($.jPlayer.event.timeupdate)
    }
    changeProgress(progress){
    	$('#player').jPlayer('play', duration * progress)
    }
    changeVolume(progress){
    	$('#player').jPlayer('volume', progress)
    }
    play(){
    	console.log(this.state.isPlay)
    	if(this.state.isPlay){
    		$('#player').jPlayer('pause');
    	}else {
    		$('#player').jPlayer('play');
    	}
    	this.setState({
    		isPlay: !this.state.isPlay
    	})
    }
	render(){
		return (
			<div class="player-page">
				 <p className="caption"><Link to="/list">我的私人音乐坊</Link></p>
				 <div class="music-list clearfix">
					 <div className="music-info">
					 	<p className="music-title">歌曲名：{this.props.currentMusicItem.title}</p>
					 	<p className="music-artist">演唱：{this.props.currentMusicItem.artist}</p>
					 	<p className="music-time">时长：-{this.state.leftTime}</p>
					 	<div className="music-volume clearfix">
				 			<p>音量：</p>
					 		<div>
					 			<Progress progress={this.state.volume} onChangeProgress={this.changeVolume} />
					 		</div>
				 		</div>
					 	<div className="music-progress clearfix">
					 		<p>播放进度：</p>
					 		<div>
					 			<Progress progress={this.state.progress} onChangeProgress={this.changeProgress} />
					 		</div>
					 	</div>
					 	<div className="isPlay">
					 		<span className="icon-prev" onClick={this.playPrev}>上一首</span>
					 		<span className="icon-play" onClick={this.play.bind(this)}>{this.state.isPlay ? '暂停' : '播放'}</span>
					 		<span className="icon-next" onClick={this.playNext}>下一首</span>
					 	</div>
					 </div>
					 <div className="music-cover">
					 	<img src={this.props.currentMusicItem.cover} alt={this.props.currentMusicItem.title} />
					 </div>	
				 </div>			 
			</div>
		)
	}
}
export default Player;