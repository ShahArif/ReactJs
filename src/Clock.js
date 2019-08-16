import React, {Component} from 'react';
import DigitalClock from './DigitalClock';
import AnalogClock from './AnalogClock';


class Clock extends Component{
    constructor(props){
        super(props);
        this.state= {
            currentTime: new Date().toString()
        };
        this.updateTime();
    }
    updateTime(){
        setInterval(()=>{
            this.setState({
                currentTime: new Date().toString()
            })
        },1000);
    }

    render(){
        return(
           <div>
                <DigitalClock time={this.state.currentTime}/>
                <br/>
                <AnalogClock time={this.state.currentTime}/>
           </div>
        )
    }
}

export default Clock;
