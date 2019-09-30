import React,{Component} from 'react'
import { createStore } from 'redux'
class medium extends Component{
    render(){
        const initialState = {
            todos:[],
            posts:[]
        }
        
        
        function myReducer (state = initialState , action){
            console.log(state,'action',action);
            if(action.type === 'ADD_TODO'){
               return { 
                   ...state,
                    todos:[...state.todos, action.todo]
                }
            }
            if(action.type === 'ADD_POST'){
                return { 
                    ...state,
                     posts:[...state.posts, action.post]
                 }
             }
        }
        
        const store = createStore(myReducer);
        store.subscribe(() =>{
            console.log('State Updated');
            console.log(store.getState());
        })
        // const todoAction = { type:'ADD_TODO',todo:'buy milk'}
        
        store.dispatch({ type:'ADD_TODO',todo:'buy milk'});
               
        store.dispatch({ type:'ADD_TODO',todo:'Get some Life'});
               
        store.dispatch({ type:'ADD_POST',post:'Get a game'});

               
        store.dispatch({ type:'ADD_POST',post:'Get some sweets'});
        return (
            <h1>Hello</h1>
        )
    }
}

export default medium;
