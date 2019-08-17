import React, {Component} from 'react';
import Counter from './Counter';

class About extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0
        }
        this.decrementHandle = this.decrementHandle.bind(this);
    }
    incrementHandle(){
        console.log('incrementHandle')
        this.setState({
            counter:this.state.counter+1
        })
    }

    decrementHandle(){
        console.log('decrementHandle')
        this.setState({
            counter:this.state.counter-1
        })
    }
    counterHandle(param ,ev){
        console.log(param)
        let newCount ;
        if(param === 'increment'){
             newCount = this.state.counter+1;
        }else{
            newCount = this.state.counter-1
        }
        this.setState({
            counter:newCount
        })
    }
    render(){
        return(
            <div>
                {/* <h1>Hello From About</h1>
                <div>
                    <button onClick={this.incrementHandle.bind(this)}>+</button>
                    <span>  {this.state.counter}  </span>
                    <button onClick={this.decrementHandle}>-</button>
                </div> */}
                <div>
                   
                    <Counter counter={this.state.counter} inc={this.counterHandle.bind(this, 'increment')} dec={this.counterHandle.bind(this, 'decrement')}/>
                </div>
            </div>
        )
    }
}

export default About;