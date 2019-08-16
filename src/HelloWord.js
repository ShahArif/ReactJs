import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class Helloworld extends Component{

  customStyleLink ={
    backgroundColor:'lightgreen',
    color:'red',
    padding:'5%'
  }


  // const CustomStyleLinkVar ={
  //   backgroundColor:'lightgreen',
  //   color:'red',
  //   padding:'5%'
  // }

  render(){
    return(
        <a href={this.props.link} style={this.customStyleLink}> {this.props.linktext}</a>
    );
  }
}
export default Helloworld;