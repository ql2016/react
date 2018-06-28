import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import PlayerBar from './player';
import MusicList from './musicList';
import List from './list';
import { BrowserRouter as Router, Link, Route, Switch, history, hashHistory } from 'react-router-dom';
import Pubsub from 'pubsub-js';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: MusicList,
            currentMusicItem: MusicList[0]
        }
    }
    playMusic(musicItem){
        $("#player").jPlayer('setMedia',{
            mp3: musicItem.file
        });       
        this.setState({
            currentMusicItem: musicItem
        })      
    }
    playNext(type = 'next'){
        let index = this.findMusicIndex(this.state.currentMusicItem);
        let newIndex = null;
        let listLength = this.state.list.length;
        if(type === 'next'){
            newIndex = (index + 1) % listLength;
        }else {
            newIndex = (index - 1 + listLength) % listLength;
        }
        this.playMusic(this.state.list[newIndex])
    }
    findMusicIndex(musicItem){
        return this.state.list.indexOf(musicItem);
    }
    componentDidMount() {
        $("#player").jPlayer({
            supplied: 'mp3',
            wmode: 'window'
        })
        this.playMusic(this.state.currentMusicItem);
        $('#player').bind($.jPlayer.event.ended, (e) => {
            this.playNext()
        })
        Pubsub.subscribe('DEL_MUSIC',(msg,musicItem) => {
            this.setState({
                list: this.state.list.filter(item => {
                    return item !== musicItem
                }),
            })
        })
        Pubsub.subscribe('PLAY_MUSIC',(msg,musicItem) => {
            this.playMusic(musicItem)
        })
        Pubsub.subscribe('PLAY_PREV',(msg,musicItem) => {
            this.playNext('prev')
        })
        Pubsub.subscribe('PLAY_NEXT',(msg,musicItem) => {
            this.playNext()
        })
    }
    componentWillUnMount(){
        Pubsub.unsubscribe('PLAY_MUSIC');
        Pubsub.unsubscribe('DEL_MUSIC');
        Pubsub.unsubscribe('PLAY_PREV');
        Pubsub.unsubscribe('PLAY_NEXT');
        $('#player').unbind($.jPlayer.event.ended)
    }
    render(){
        const Lists = () => (
            <List currentMusicItem={this.state.currentMusicItem} list={this.state.list} />
        )
        const Players = () => (
            <PlayerBar currentMusicItem={this.state.currentMusicItem} />
        )
        return (
            <Router history={hashHistory}>
                <div>
                    <Header />
                    <Route exact path="/" component={Players} />
                    <Route path="/list" component={Lists} />
                </div>
            </Router>
        )
    }
}

export default App;