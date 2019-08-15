import React, {Component} from 'react';

class Methods extends Component {
    myFacebookLink(){
        return 'https://facebook.com/ariflateefshah'
    }

    facebookUser(){
        return 'Arif Lateef Shah'
    }


    render(){
        return(
            <div>
                <p>Your Facebook Id is : <a href={this.myFacebookLink()}>{this.facebookUser()}</a></p>
            </div>
        )
    }   
}
export default Methods;