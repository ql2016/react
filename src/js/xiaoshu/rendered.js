import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// {}可以放任何javascript的代码 
class Jsx  extends Component {
	renderGood(goodWord,badWord){
		const isGoodWord = false
		return isGoodWord ? goodWord : badWord
	}
	render(){
		const word = 'good'; {/*变量*/}
		const className = 'header';
		const good = <span>is good</span>; {/*jsx元素变量*/}
		const nogood = <span>is not good</span>;
		const count = 5;
		const title = <h3 className="title">jsx</h3>
		const page = <div className="content">{title}</div>
		return (
			<div className={className}>{/*标签属性*/}
				<p>{this.props.cont}</p>
				<p>{word}</p>
				<p>{4+2}</p> {/*表达式计算*/}
				<p>{function(){return 'six six six'}()}</p> {/*函数执行*/}
				<p>{word ? <span>great</span> : <em>no great</em>}</p>
				<p>{word ? good : nogood}</p>
				<p>{this.renderGood(good,nogood)}</p>
				<div>{count>0 ? <span>有{count}条未读消息</span> : <span>没有未读消息</span>}</div>				
				{page}
			</div>
		)
	}
}
export default Jsx;