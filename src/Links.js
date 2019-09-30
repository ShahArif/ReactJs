import React, {Component} from 'react';
import {
    Link,
} from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/form">Form</Link>
                    <br/>    
                    <Link to="/medium">MEDIUM</Link>
                </li>
            </ul>
        )
    }
}
export default Navbar;