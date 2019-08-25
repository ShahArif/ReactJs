import React, {Component} from 'react';
import about from './About';
import contact from './Contact';
import Home from './Home';
import Navbar from './Links';
import form from './Form';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Clock from './Clock';
import EventsFile from './Events';
import history from './History';


class Routers extends Component{
    render(){
        return(
            <Router history={history}>
                <div>
                    <Navbar/>
                    <hr/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={about}/>
                    <Route path='/form' component={form}/>
                    <Route path='/contact' component={contact}/>
                    <Route path='/clock' component={Clock}/>
                    <Route path='/events' component={EventsFile}/>
                
                </div>
            </Router>
        )
    }
}

export default Routers;