import React from 'react';

import './App.css';


/*function OtherComponent(props){
  return props.msg ? <p className = {props.cName}>{props.msg}</p> : <p>"No message to show"</p>
}
var App = (probs)=> {
  return <div>
    <h1>{probs.msg1}</h1>
    <h1>{probs.msg2}</h1>
    </div>
}*/
function Parent(){
  return <div>
    {/*<App msg1='First Messgae' msg2='Second Messgae'></App>
    <OtherComponent cName="styled" msg="message"></OtherComponent>
    <Create_list items={[1,2,3]}/>;*/}
    {/*<Prac name="YouStart" />;*/}
    <Lists1 items={['Item1','Item2','Item3']}></Lists1>
    </div>
}
/*
function Create_list(props){
  const items = props.items;
  const listItems = items.map((item) => <li>{item}</li>);
  return <ul>{listItems}</ul>;
}*/

/*class Prac extends React.Component {
  
  constructor(props){
    super(props);
    this.state = props   //copying props to this.state

  }

  clickHandler(event){  
    console.log(event) 
    this.setState({
      name : event.target.value
    })  // this changes name value of state and refreshed the DOM
  }

  render(){
    return <div>
     <h1>Hello World {this.state.name} </h1>   
     <input onChange={(e)=>{this.clickHandler(e)}}/>
    </div>
  }
}
*/




class Lists1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.state.listItems = [];
    //this.state.Copy_List = props.List;
    let newItem ='';
  }

  Create_list1(){
    let items = this.props.items;
    //console.log(items);
    this.state.listItems = items.map((item) => <li>{item}</li>);
    return <ul>{this.state.listItems}</ul>;
  }

  clickHandler1(event){
    console.log(event) 
    this.newItem = event.target.value;
    console.log(this.newItem);
  }

  clickHandler(event){  
    console.log(event) 
    this.setState({
      listItems: [...listItems, this.newItem]
    })
    console.log(this.state.listItems)
  }

  render(){
    return <div>
      <button onClick={(e)=>{this.clickHandler(e)}}> Click </button>
      <input onChange={(e)=>{this.clickHandler1(e)}}/>
      {this.Create_list1()}
    </div>
  }
}


export default Parent;
