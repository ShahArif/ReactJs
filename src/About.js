import React, {Component} from 'react';

class About extends Component{
    operation(){
        console.log('operationHandle working');
        this.props.history.push('/');
    }
    render(){
        return(
            <div>
                <h1>Hello From About</h1>
                <button onClick={()=> this.operation.bind()}>Do some Operation and Take my to Home</button>

            </div>
        )
    }
}

export default About;