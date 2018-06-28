import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavItem from './navItem';

class Nav extends Component {
	constructor(props){
        super(props);
    }
	render(){
        let navUnit = (length) => {
            let res = [];
            for(var i = 0; i < length; i++){
                res.push(<NavItem key={i} arrange={this.props.imgsArrangeArr[i]} inverse={this.props.inverse(i)} center={this.props.center(i)} />)
            }
            return res;
        }

		return (
			<div className="nav">
                {navUnit(this.props.imagesList.length)}	
			</div>
		)
	}
}
export default Nav;