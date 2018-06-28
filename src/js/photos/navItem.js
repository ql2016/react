import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Images extends Component {
	constructor(props){
        super(props);
    }
    handleClick(e){
        if(this.props.arrange.isCenter){
            this.props.inverse();
        }else{
            this.props.center();
        }
        e.stopPropagation();
        e.preventDefault();
    }
	render(){
        let navUnitClassName = 'navUnit';
        if(this.props.arrange.isCenter){
            navUnitClassName += ' is-center';
            //如果同时对应的是翻转图片，显示控制按钮的翻转态
            if(this.props.arrange.isInverse){
               navUnitClassName += ' is-inverse'; 
            }
        }
		return (
			<div className={navUnitClassName} onClick={this.handleClick.bind(this)}></div>
		)
	}
}
export default Images;