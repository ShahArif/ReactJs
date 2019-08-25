import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {changeUserName} from './store/actions/action';
class Home extends Component {
    _changeData(){
        console.log('event called');
        this.props.changeUserName();
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
                    <h1> Hey {this.props.currentUser}</h1>
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
        changeUserName: ()=>{dispatch(changeUserName())}
    })
}

export default connect(mapStateToProp,mapDispatchToProp)(Home);
