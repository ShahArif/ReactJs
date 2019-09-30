import React , { Component } from 'react';
import Todos from './Todos';

class App extends Component{
    state = {
        todos:[
            { id:1, title:'Good Morning', desc:'This is Good Morning todo'},
            { id:2, title:'Good Afternoon', desc:'This is Afternoon todo'},
            { id:3, title:'Good Evening', desc:'This is Evening todo'},
            { id:4, title:'Good Night', desc:'This is Night todo'}
        ]
    }
    render(){
        return(
            <div className="App">
               <h1 className="center blue-text">Todo's</h1>
               <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
           </div>
        ) 
    }
}

export default App;