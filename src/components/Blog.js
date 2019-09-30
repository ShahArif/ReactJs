import React,{Component} from 'react'
import axios from 'axios';

class Blog extends Component{
    constructor(props){
        super(props);
        this.state = { 
            blogs:[]
        };
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            this.setState({
                blogs:res.data
            });
        });
    }
    render() {
        return(
            <div className="container">
                {this.state.blogs.title}
                {
                    this.state.blogs ? (
                        this.state.blogs.map(item => {
                            return(
                                <h2>{item.title}</h2>
                            )
                        })
                    ) :(<p className="center">No Blogs Found</p>)
                }
                <div className="item"></div>
            </div>
        )   
    }
}


// const mapStateToProps = (state) => {
//     return{
//         post:state.state.
//     }
// };
export default Blog;