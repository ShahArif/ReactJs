import React, {Component} from 'react';

import Navbar from './Links';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import history from './History';
import App from './App';
import Blog from './components/Blog';
import medium from './components/medium';


class Routers extends Component{
    render(){
        return(
            <Router history={history}>
                <div>
                    <Navbar/>
                    <hr/>
                     <Route exact path='/' component={App}/>
                     <Route path='/blog' component={Blog}/>
                     <Route path='/medium' component={medium}/>
                    {/* <Route path='/form' component={form}/> */}
                    {/* <Route path='/contact' component={contact}/> */}
                    {/* <Route path='/clock' component={Clock}/> */}
                    {/* <Route path='/events' component={EventsFile}/> */} 
                
                </div>
            </Router>
        )
    }
}

export default Routers;