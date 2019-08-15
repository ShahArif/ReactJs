class CustomComponent extends React.Component{
    render(){
        return React.createElement('h1',null , 'Hello world from Custom Component');
    }
}


var firstComponent =  React.createElement(CustomComponent,null);
var myApp = document.getElementById('myApp');
ReactDOM.render(
    firstComponent,
    myApp 
 );
