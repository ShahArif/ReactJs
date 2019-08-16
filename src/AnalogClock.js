import React from 'react';

function AnalogClock(props){
    // console.log(props.time + 'Analog CLock')
    let time = new Date(props.time);

    console.log( time.getHours())

    let container ={
        position:'relative',
        top:0,
        left:0,
        borderRadius:222222,
        width:200,
        backgroundColor:'white',
        height:200,
        borderStyle:'solid',
        borderColor:'black',
    }

    let secondHand = {
        position:'relative',
        top:100,
        left:100,
        width:'40%',
        border:'2px solid black',
        backgroundColor:'black',
        height:1,
        transform: 'rotate(' + ((time.getSeconds()/60) * 360 -90 ).toString() +'deg)',
        transformOrigin:'0% 0%'
    }

    let minuteHand ={
        position:'relative',
        top:100,
        left:100,
        width:'40%',
        border:'2px solid blue',
        backgroundColor:'blue',
        height:3,
        transform: 'rotate(' + ((time.getMinutes()/60) * 360 -90 ).toString() +'deg)',
        transformOrigin:'0% 0%'
    }

    let hourHand ={
        position:'relative',
        top:92,
        left:106,
        width:'20%',
        border:'2px solid red',
        backgroundColor:'red',
        height:7,
        transform: 'rotate(' + ((time.getHours()/12) * 360 -90 ).toString() +'deg)',
        transformOrigin:'0% 0%'

    }
    return(
        <div style={container}>
            <div style={secondHand}></div>
            <div style={minuteHand}></div>
            <div style={hourHand}></div>
        </div>
    )
}

export default AnalogClock;