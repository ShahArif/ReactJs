import React, {Component} from 'react';


class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:''
        };
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
    }

    changeName(ev){
       this.setState({
           username:ev.target.value
       })
    }

    changeEmail(e){
        this.setState({
            email:e.target.value
        })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form>
                            <input type="text" name="username" className="form-control" value={this.state.username} onChange={this.changeName}/>
                            <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmail}/>
                        </form>
                    </div>
                    <div className="col-md-3">
                        <label>Username :</label>
                        <span>{this.state.username}</span>
                        <br/>
                        <label>Email :</label>
                        <span>{this.state.email}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;