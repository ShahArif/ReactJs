import React, {Component} from 'react';

class Todos extends Component{
    constructor(props){
        super(props)
        this.state ={
            todoList : this.props.todos.length,
        }
    }
    deleteTodo(id){
        
    }
    render(props){
        return(
           <div className="todos collection">
               {
                   this.state.todoList ? (
                       this.props.todos.map(item  => {
                            return (
                                <div className="collection-item" key={item.id}>
                                    <h1>{item.title}</h1>
                                    <span>{item.desc}</span>
                                </div>
                            )   
                       })
                   ) : (
                       <p className="center">Nothing to do</p>
                   )
               }
           </div>
        )
    }
}

export default Todos;