import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import NoState from './noState';
//import Layered from './layer';
//import Timer from './timer';
//import AddNum from './addNum';
import Player from './player/root.js';
import SinglePage from './single-page/index.js';
import Todolist from './todolist/index.js';
import Round from './round/index';
import Color from './color/index';
import Photos from './photos/index';
import Xs from './xiaoshu/index';
import '../sass/index.scss';


//redux
/*import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './redux/reducer';
import App from './redux/components/index';*/

// class ReactClass extends Component {
// 	constructor(props) {
// 	    super(props);
// 	    this.state = {
// 	      isHidden: false
// 	    };
// 	}
// 	handleClick() {
// 		this.setState({
// 			isHidden: !this.state.isHidden
// 		})
// 	}
// 	render() {
// 		return (			
// 			<div className="container">
// 				{(!this.state.isHidden) ? <h1 className="header" key="header">ee</h1> : null}
// 				<button className="btn" key="button" onClick={this.handleClick.bind(this)}>btn</button>
// 			</div>
// 		)
// 	}
// };

// class FState extends Component {
// 	render(){
// 		const message = {
// 			from: '北京',
// 			status: '候车室',
// 			content: '度假'
// 		}
// 		return (
// 			<NoState message={ message } />
// 		)
// 	}
// }
// const aa = ()=>{
// 	return 'aa'
// }
// class Demo extends Component{
// 	constructor(props){
// 		super(props);
// 	}
// 	render(){
// 		return (
// 			<Router>
// 				<Route path="/a" component={aa} />
// 			</Router>
// 		)
// 	}
// }

// <Player />,  音乐播放器
// <Todolist />, 任务列表
// <Round />, 圆形
// <Color />, 颜色
// <Photos />, 相册
//let store = createStore(todoApp)
ReactDOM.render(
	<Xs cont="very" />,
	document.getElementById('root')
);