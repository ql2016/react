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
        let styleObj = {};
        if(this.props.arrange.pos){
            styleObj = this.props.arrange.pos
        }
        if(this.props.arrange.rotate){
            ['MozTransform','MsTransform','WebkitTransform','transform'].forEach((value) => {
                styleObj[value] = 'rotate(' + this.props.arrange.rotate + 'deg)'
            })
        }
        let imgFigureClassName = 'imageItem';
        imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : '';
        let imageItem = this.props.imageItem;
		return (
			<div className={imgFigureClassName} style={styleObj} ref="imgFigure" onClick={this.handleClick.bind(this)}>
				<img src={require('../../images/' + imageItem.fileName)} />
                <h4>{imageItem.title}</h4>
                <div className="img-back" onClick={this.handleClick.bind(this)}>
                    <p>{imageItem.desc}</p>
                </div>
			</div>
		)
	}
}
export default Images;