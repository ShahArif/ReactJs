import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {changeUserName,login} from './store/actions/action';
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:''
        }
    }
    _changeData(){
        console.log('event called');
        this.props.changeUserName();
    }
    loginHandle(){
        this.props.login(this.state.userName);
    }
    updateUser(event){
        console.log('Update State',event.target.value);
        this.setState({
            userName:event.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Hello World {this.props.userName}</h1>
                    <button onClick={this._changeData.bind(this)}>Change</button>
                    <Link to='/about'>Go to About</Link>
                </div>
                <div>
                    <input type='text' value={this.state.userName} onChange={this.updateUser.bind(this)}/>
                    <button onClick={this.loginHandle.bind(this)}>Login</button>
                    <div>
                             <h1> Welcome {this.props.currentUser}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProp(state){
    return({
        userName: state.root.userName,
        currentUser:state.root.currentUser
    })
}
function mapDispatchToProp(dispatch){
    return({
        changeUserName: ()=>{dispatch(changeUserName())},
        login:(updatedUsername) => {dispatch(login(updatedUsername))}
    })
}

export default connect(mapStateToProp,mapDispatchToProp)(Home);
