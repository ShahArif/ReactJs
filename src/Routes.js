import React  from 'react';
import about from './About';
import contact from './Contact';
import methods from './Methods';
import Navbar from './Links';
import form from './Form';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Clock from './Clock';
import EventsFile from './Events';

// import { createBrowserHistory } from "history";
// const history = createBrowserHistory();


const CustomeRoutes = () =>(
    <Router>
        <div>
            <Navbar/>
            <hr/>
            <Route exact path='/' component={methods}/>
            <Route path='/about' component={about}/>
            <Route path='/form' component={form}/>
            <Route path='/contact' component={contact}/>
            <Route path='/clock' component={Clock}/>
            <Route path='/events' component={EventsFile}/>
        
        </div>
    </Router>
)

export default CustomeRoutes;