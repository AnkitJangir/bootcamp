import React from 'react';

import './App.css';
import 'G:/BootCamp/React Programing/project/node_modules/bootstrap/dist/css/bootstrap.css';


class App extends React.Component {
    flag=0;
    constructor(props){
      super(props);
      this.state={};
      this.state.Newlist=[];
      this.state.Newlist=this.state.Newlist.map((item)=><li>{item}</li>);
      this.state.newItem="";
      
      //this.getValue = this.getValue.bind(this);
    }
    getValue(event){
        console.log(this.flag);
        this.flag=1;
        this.newItem=event.target.value;
        console.log(this.newItem);
        event.preventDefault();

    }
    setValue(event){

        /*if(this.state.newItem){
            console.log("Items are as");
            let l=this.state.Newlist;
            l.push(this.state.newItem);
        //this.setState({newList:l,newItem:""});
        }*/
        console.log("Cloick");
        if(this.flag)
        {
            console.log(this.flag+"fffffF");
            this.setState({Newlist:[...this.state.Newlist,<li>{this.newItem}</li>]})
            document.getElementById("asd").value="";
           //this.state.newItem="";
            this.flag=0;
        }
        else{
            console.log("item nit found")
        }
        event.preventDefault();
    }
    render(){
      return <div>
        
       <input id="asd" className="col-6" onChange={(e)=>this.getValue(e)}/>
       <button className=" col-6 btn btn-light btn-sm " onClick={(e)=>this.setValue(e)}> Click </button>

       <h4 className="text-center">Completed Item:{this.state.Newlist.length}</h4>
       <button className="col-9">{this.state.Newlist}</button>
       <button className="col-1">UP</button>
       </div>
  }
    
     
  }
  function Parent(){
    return <div>
        <h1 className="row flex-center animated infinite bounce">Todo List</h1>
        <App/>
  </div>
  }
  export {Parent};
  