import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Images from './images';
import Nav from './nav';
import ImageDatas from './imageDatas';

//获取区间内的一个随机值
function getRangeRandom(low,high){
    return Math.ceil(Math.random() * (high - low) + low)
}

//获取0~30之间的一个任意正负数
function getDegRandom(){
    return ((Math.random() > 0.5 ? '' : '-') + Math.ceil(Math.random() * 30))
}

class Player extends Component {
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
        this.state = {
            imagesList: ImageDatas,
            imgsArrangeArr:[]
        }
    }

    /*
    * 翻转图片
    * @param index 输入当前被执行inverse操作的图片对应的图片信息数组的index值
    * @return {Function} 这是一个闭包函数，其内return一个真正被执行的函数
    */
    inverse(index){
        return () => {
            let imgsArrangeArr = this.state.imgsArrangeArr;
            imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;
            this.setState({
                imgsArrangeArr: imgsArrangeArr
            })
        }
    }

    /*
    * 利用rearrange函数，居中对应index图片
    * @param index 需要被居中的图片对应的图片信息数组的index值
    * @return {Function} 这是一个闭包函数，其内return一个真正被执行的函数
    */
    center(index){
        return () => {
            this.rearrange(index)
        }
    }
    

    /*
    *重新布局所有图片
    *@param centerIndex 指定居中排布哪个图片
    */
    rearrange(centerIndex) {
        let imgsArrangeArr = this.state.imgsArrangeArr;
        let Constant = this.Constant;
        let centerPos = Constant.centerPos;
        let hPosRange = Constant.hPosRange;
        let vPosRange = Constant.vPosRange;
        let hPosRangeLeftSecX = hPosRange.leftSecX;
        let hPosRangeRightSecX = hPosRange.rightSecX;
        let hPosRangeY = hPosRange.y;
        let vPosRangeTopY = vPosRange.topY;
        let vPosRangeX = vPosRange.x;


        let imgsArrangeTopArr = [];
        let topImgNum = Math.floor(Math.random() * 2);
        let topImgSpliceIndex = 0;

        let imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex,1)

        //首先居中centerIndex的图片,居中centerIndex的图片不需要旋转
        imgsArrangeCenterArr[0] = {
            pos: centerPos,
            rotate: 0,
            isCenter: true
        }

        //取出要布局上侧图片的状态信息
        topImgSpliceIndex = Math.ceil(Math.random() * (imgsArrangeArr.length - topImgNum));
        imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex,topImgNum);
        console.log(imgsArrangeTopArr)
        //布局位于上侧的图片
        imgsArrangeTopArr.forEach((vaule,index) => {
            imgsArrangeTopArr[index] = {
                pos: {
                    top: getRangeRandom(vPosRangeTopY[0],vPosRangeTopY[1]),
                    left: getRangeRandom(vPosRangeX[0],vPosRangeX[1])
                },
                rotate: getDegRandom(),
                isCenter: false
            }
        });

        for(var i = 0, j = imgsArrangeArr.length, k = j/2; i < j; i++){
            let hPosRangeLORX = null;
            //前半部分布局左边，右半部分布局右边
            if(i < k){
                hPosRangeLORX = hPosRangeLeftSecX;
            }else{
                hPosRangeLORX = hPosRangeRightSecX;
            }
            imgsArrangeArr[i] = {
                pos: {
                    top: getRangeRandom(hPosRangeY[0],hPosRangeY[1]),
                    left: getRangeRandom(hPosRangeLORX[0],hPosRangeLORX[1])
                },
                rotate: getDegRandom(),
                isCenter: false
            }
        }

        if(imgsArrangeTopArr && imgsArrangeTopArr[0]){
            imgsArrangeArr.splice(topImgSpliceIndex,0,imgsArrangeTopArr[0])
        }

        imgsArrangeArr.splice(centerIndex,0,imgsArrangeCenterArr[0])

        this.setState({
            imgsArrangeArr: imgsArrangeArr
        })

    }
    componentDidMount() {
        //舞台大小
    	let stageDOM = this.refs.stage;
        let stageW = stageDOM.scrollWidth;
        let stageH = stageDOM.scrollHeight;
        let halfStageW = Math.ceil(stageW /2);
        let halfStageH = Math.ceil(stageH /2);


        //单个图片的大小
        let imgDOM = this.refs.img.refs.imgFigure0.refs.imgFigure;
        let imgW = imgDOM.scrollWidth;
        let imgH = imgDOM.scrollHeight;
        let halfImgW = Math.ceil(imgW /2);
        let halfImgH = Math.ceil(imgH /2);

        //计算中心图片的位置点
        this.Constant.centerPos = {
            left: halfStageW - halfImgW,
            top: halfStageH - halfImgH
        }

        //计算左侧、右侧区域图片排布位置的取值范围
        this.Constant.hPosRange.leftSecX[0] = -halfImgW;
        this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
        this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
        this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
        this.Constant.hPosRange.y[0] = -halfImgH;
        this.Constant.hPosRange.y[1] = stageH - halfImgH;

        //计算上侧区域图片排布位置的取值范围
        this.Constant.vPosRange.topY[0] = -halfImgH;
        this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
        this.Constant.vPosRange.x[0] = halfStageW - imgW;
        this.Constant.vPosRange.x[1] = halfStageW;

        this.rearrange(0);

    }
	render(){
		return (
			<div className="stage" ref="stage">
				<Images imgsArrangeArr={this.state.imgsArrangeArr} imagesList={this.state.imagesList} ref="img" inverse={this.inverse.bind(this)} center={this.center.bind(this)}/>
                <Nav imgsArrangeArr={this.state.imgsArrangeArr}  imagesList={this.state.imagesList} inverse={this.inverse.bind(this)} center={this.center.bind(this)} />
			</div>
		)
	}
}
export default Player;