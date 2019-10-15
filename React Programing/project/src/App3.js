import React from 'react';

import './App.css';
//import 'G:/BootCamp/React Programing/project/node_modules/bootstrap/dist/css/bootstrap.css';


class App extends React.Component {
    constructor(props){
      super(props);
      this.state={
          newList:[],
          newItem:"",
      };
      
      
//    this.getValue = this.getValue.bind(this);
    }
    getValue(event){
        let item=event.target.value;
        this.setState(
            {
                newItem:item
            }
        );
        console.log(this.state.newItem);
        event.preventDefault();

    }
    moveUp(item){
        let l = this.state.newList;
        let i = l.indexOf(item);
        console.log(i);
        console.log(this.state.newItem);
        if(i !== 0)
        {
          let temp = l[i];
          l[i] = l[i-1];
          l[i-1] = temp;
          this.setState({newList: l});
        }
      }
      moveDown(item){
        let l = this.state.list;
        let i = l.indexOf(item);
        if(i !== l.length-1)
        {
          let temp = l[i];
          l[i] = l[i+1];
          l[i+1] = temp;
          this.setState({list: l});
        }
    }
    setValue(){

            if(this.state.newItem)
            {
            let l=this.state.newList;
            l.push(<div className="row">
                <li className="col-9 paper-btn btn-block btn-warning">{this.state.newItem}</li>
                <button className={l.indexOf(this.state.newItem)===0 ? console.log("true")&"col-1 paper-btn btn-block disbled btn-primary":"col-1 papeer-btn btn-block  btn-primary"} onClick={()=>this.moveUP(this.state.newItem)}>UP</button>
                <button className={l.indexOf(this.state.newItem)===(this.state.newList.length-1) ? "paper-btn col-3 sm-1 disabled btn-secondary" : "paper-btn col-3 sm-1 btn-secondary"}onclick={()=>this.moveDown(this.state.newItem)}>Down</button>
                <button className="col-1 paper-btn btn-block btn-danger ">X</button> 
                </div>);
            console.log(l);
            console.log(this.state.newList);
            this.setState({
                newList:l,
                newItem:""
            });
            }
        console.log("Click");
        /*if(this.flag)
        {
            console.log(this.flag+"fffffF");
            this.setState({Newlist:[...this.state.Newlist,<li>{this.newItem}</li>]})
            document.getElementById("asd").value="";
           //this.state.newItem="";
            this.flag=0;
        }
        else{
            console.log("item not found")
        }
       */
    }
    
    render(){
      return <div>
        <h1 className="row flex-center animated  bounce">ToDo list</h1>
        <button type="submit" className=" row  flex-center" onClick={()=>this.setValue()}> Click </button>
       <input type="text" className="row flex-center"  onChange={(e)=>this.getValue(e)} value={this.state.newItem}></input>
       <h3 className="row flex-center">Total items:{this.state.newList.length}</h3>
       <ul>{this.state.newList}</ul>
       </div>
  }
    
     
  }
  function Parent(){
    return <div>
        <App/>
  </div>
  }
  export {Parent};
  