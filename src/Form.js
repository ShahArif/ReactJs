import React, {Component} from 'react';


class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:'',
            technologies : [
                   { name:'Vuejs',id:0},
                   { name:'ReactJs',id:1},
                   { name:'NodeJs',id:2},
                    
                    
            ],
            genderGroup:{
                male:false,
                female:true
            }
        };

      

        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.radioHandler = this.radioHandler.bind(this);
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
    radioHandler(event){
        console.log(event.target.value)
        let agenderGroup = this.state.genderGroup;
        for(var key in agenderGroup){
            agenderGroup[key]= false
        }
        agenderGroup[event.target.value] = event.target.checked
        this.setState({
            genderGroup:agenderGroup
        });

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
                          <div className="col-md-12">
                            <select >
                                    <option>Select Technology</option>
                                {                               
                                    this.state.technologies.map((tech) =>
                                        <option key={tech.id}>{tech.name}</option>
                                    )   
                                }
                                </select>
                          </div>
                          <div className="col-md-12">
                              <input type="radio" value='male' checked={this.state.genderGroup['male']}  name="gender" onChange={this.radioHandler}/>
                              <input type="radio" value='female' name="gender"  checked={this.state.genderGroup['female']} onChange={this.radioHandler}/>
                          </div>

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