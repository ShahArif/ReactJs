
var h1 =  React.createElement('h1',null ,'Hello World from App file');
var p =  React.createElement('p', null ,'This is the description area which belongs to the div')
var myApp = document.getElementById('myApp');
ReactDOM.render(
    React.createElement('Div' , null , h1 ,p),
    myApp 
 );
