import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class addNum extends Component {
	constructor(props){
        super(props);
        this.state = {
            num: 0
        }
    }
    add(){
        this.setState({
            num: this.state.num + 1
        })
    }
    componentWillReceiveProps(newProps) {
        console.log('Counter receive new props');
        return;
    }
    shouldComponentUpdate(newProps,newState) {
        if(newState.num < 5){
            console.log('Component should update');
            return true;
        }else {
            console.log('Component should not update');
            ReactDOM.unmountComponentAtNode(document.getElementById('root'));
            return false;
        }
    } 
    componentWillUpdate() {
        console.log('Component is about update')
    }
    render(){
    	return (
    		<div className="container">
                {this.state.num}
                <button class="icon-add" onClick={this.add.bind(this)}>+</button>
            </div>
		)
    }
    componentDidUpdate() {
        console.log('Component is just updated')
    }
    componentWillUnmount() {
        console.log('Component is removed from dom');
        return;
    }
}

export default addNum;