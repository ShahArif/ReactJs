import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Helloworld from './App';
// import * as serviceWorker from './serviceWorker';




ReactDOM.render(
    <div class="Custom-Component">
        <Helloworld link="https://google.com" linktext="Google.com" />
        
        <Helloworld link="https://fb.com" linktext="facebook.com" />
    
        <Helloworld link="https://linkined.com" linktext="Linkined.com" />
    </div>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
