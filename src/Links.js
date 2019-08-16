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
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        )
    }
}
export default Navbar;