var h1 = React.createElement('h1',null , 'Hello world from Custom Component');
var p = React.createElement('p', null , 'Hello world from Custom Component');

class CustomComponent extends React.Component{
    render(){
        return (
            React.createElement('div',null ,h1,p)
        );
    }
}


var firstComponent =  React.createElement(CustomComponent,null);
var myApp = document.getElementById('myApp');
ReactDOM.render(
    firstComponent,
    myApp 
 );
