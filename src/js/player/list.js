import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MusicItem from './listItem';

class List extends Component {
    constructor(props) {
        super(props);
    }
	render(){
		let listEle = null;	
		listEle = this.props.list.map((item) => {
			return (
				<MusicItem key={item.id} musicItem={item} focus={item === this.props.currentMusicItem} /> 
			)
		})
		return (
			<ul className="music-list">
				{ listEle }
			</ul>
		)
	}
}
export default List;