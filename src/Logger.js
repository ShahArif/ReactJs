import React, {Component} from 'react';
class Logger extends Component{
    constructor(props){
        super(props);
        console.log('Constructo is Running');
    }

    componentWillMount(){
        console.log('componentWillMount is running');
    }

    componentDidMount(){
        console.log('componentDidMount is running');
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWIllReceiveProps is running'+ JSON.stringify(nextProps));
    }

    shouldComponentUpdate(newProps , newState){
        console.log('Should COmponent Update');
        console.log( JSON.stringify(newProps)  + 'newProps');
        console.log(  JSON.stringify(newState)  + 'newState');
        return true
    }

    componentWillUpdate(newProps , newState){
        console.log('componentWillUpdate');
        console.log( JSON.stringify(newProps)  + 'newProps');
        console.log(  JSON.stringify(newState)  + 'newState');
        return true
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }


    render(){
        console.log('render')
        return(
            <h1>Logger</h1>
        )
    }
}


export default Logger;