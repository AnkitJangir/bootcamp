import React from 'react';

import './App.css';


class App extends React.Component {
    flag=0;
    constructor(props){
      super(props);
      this.state={};
      this.state.Newlist=["item1","item2"];
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
          
       <input id="asd" onChange={(e)=>this.getValue(e)}/>
       <button onClick={(e)=>this.setValue(e)}> Click </button>
       <ol>{this.state.Newlist}</ol>
       </div>
  }
    
     
  }
  function Parent(){
    return <div>
        <App/>
  </div>
  }
  export {Parent};
  