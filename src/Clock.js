import React, {Component} from 'react';
import DigitalClock from './DigitalClock';
import AnalogClock from './AnalogClock';
import Logger from './Logger';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state= {
            currentTime: new Date().toString(),
            counter:0,
        };
        this.updateTime();
    }
    updateTime(){
        setInterval(()=>{
            this.setState({
                currentTime: new Date().toString(),
                counter: this.state.counter + 1
            })
        },1000);
    }

    render(){
        return(
           <div>
                <DigitalClock time={this.state.currentTime}/>
                <br/>
                <AnalogClock time={this.state.currentTime}/>
                <br/>
                {
                    ( this.state.counter < 3)?
                    (<Logger time={this.state.currentTime} counter={this.state.counter}/>):
                    (<div></div>)
                }
           </div>
        )
    }
}

export default Clock;
