import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Position extends Component {
	constructor(props){
        super(props);
        this.Constant = {
            centerPos: {
                left: 0,
                right: 0
            },
            hPosRange: { //水平方向的取值范围
                leftSecX: [0,0],
                rightSecX: [0,0],
                y: [0,0]
            },
            vPosRange: { //垂直方向的取值范围
                x: [0,0],
                topY: [0,0]
            }
        }
    }
    componentDidMount() {
        // centerPos: {
        //     left: 0,
        //     right: 0
        // }
        // hPosRange: { //水平方向的取值范围
        //     leftSecX: [0,0],
        //     rightSecX: [0,0],
        //     y: [0,0]
        // }
        // vPosRange: { //垂直方向的取值范围
        //     x: [0,0],
        //     topY: [0,0]
        // }
    }
	render(){
        
	}
}
export default Position;