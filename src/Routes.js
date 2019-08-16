import React  from 'react';
import about from './About';
import contact from './Contact';
import methods from './Methods';
import Navbar from './Links';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

import {createBrowserHistory} from 'history/createBrowserHistory';
const customHistory = createBrowserHistory;


const CustomeRoutes = () =>(
    <Router history={customHistory}>
        <div>
            <Navbar/>
            <hr/>
            <Route exact path='/' component={methods}/>
            <Route path='/about' component={about}/>
            <Route path='/contact' component={contact}/>
        </div>
    </Router>
)

export default CustomeRoutes;