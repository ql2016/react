import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageItem from './imageItem';

class Images extends Component {
	constructor(props){
        super(props);
    }
	render(){
        var item = this.props.imagesList.map((item,index) => {
            if(!this.props.imgsArrangeArr[index]){
                this.props.imgsArrangeArr[index] = {
                    pos: {
                        left: 0,
                        top: 0
                    },
                    rotate: 0, //旋转角度
                    isInverse: false, //图片正反面
                    isCenter: false //图片是否居中
                }
            }
            return (
                <ImageItem key={index} imageItem={item} ref={'imgFigure' + index} arrange={this.props.imgsArrangeArr[index]} inverse={this.props.inverse(index)} center={this.props.center(index)} />
            )
        })
		return (
			<div className="imagesList">
				{item}
			</div>
		)
	}
}
export default Images;