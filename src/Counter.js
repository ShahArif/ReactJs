import React, {Component} from 'react';

class Counter extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Counter</h1>
                
                <button onClick={this.props.inc}>+</button>
                <h5>{this.props.counter}</h5>
                <button onClick={this.props.dec}>-</button>
            </div>
        )
    }
}

export default Counter;