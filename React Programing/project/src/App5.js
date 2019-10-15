import React from 'react';
import './App.css';

class List1 extends React.Component{
  newItem="";
  editel='';
  constructor(props){
    super(props)
    this.state = {
      list: [],
      values:''
    }
  }

  
  additem(){
    this.newItem = this.state.values.trim();
    if(this.newItem.length !== 0){
      this.setState({
        list : [...this.state.list,{imp: this.newItem,status:false,date: new Date().toString().slice(0,24)}],
        values:'',
      })
    }
    else{
      this.setState({
        values: "" 
      })
    }
    this.editel=''
  }


  inp(event){
    this.setState({
      values: event.target.value
    })
  }


  edit(item){
    if(this.editel===''){
      let l = this.state.list;
      let updatedList = l.filter((litem) => litem !== item);
      this.editel = l[l.indexOf(item)];
      this.setState({ list: updatedList, values:this.editel.imp,duedate:this.editel.ddate});
    }
  }

  moveUp(item){
    let l = this.state.list;
    let i = l.indexOf(item);
    if(i !== 0)
    {
      let temp = l[i];
      l[i] = l[i-1];
      l[i-1] = temp;
      this.setState({list: l});
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

  deleteItem(item){
    let l = this.state.list;
    let updatedList = l.filter((litem) => litem !== item);
    this.setState({ list: updatedList });
  }


  movetop(item){
    let l = this.state.list;
    let updatedList = l.filter((litem) => litem !== item);
    let m = l[l.indexOf(item)];
    updatedList = [m,...updatedList];
    this.setState({
      list: updatedList
    })
  }

  getlist()
  {
    let items=[];
    items = this.state.list.map((item)=> 
    <div className="row">
      <li onDoubleClick={()=>this.movetop(item)} draggable onClick={()=>this.setStatus(item)} className={item.status ? "paper-btn col-12 sm-8 btn-success" : "paper-btn col-12 sm-8"}>{item.imp} <span className='alt'>{item.date}</span></li>
      <button className="paper-btn col-3 sm-1 btn-warning" onClick={() => this.edit(item)}>Edit <i className="fa fa-pencil"></i></button>
      <button className={this.state.list.indexOf(item)===0 ? "paper-btn col-3 sm-1 disabled btn-secondary" : "paper-btn col-1 btn-secondary"} onClick={() => this.moveUp(item)}>Up <i className="fa fa-angle-up"></i></button>
      <button className={this.state.list.indexOf(item)===(this.state.list.length-1) ? "paper-btn col-3 sm-1 disabled btn-secondary" : "paper-btn col-3 sm-1 btn-secondary"} onClick={() => this.moveDown(item)}>Down <i className="fa fa-angle-down"></i></button>
      <button className="paper-btn col-3 sm-1 btn-danger" onClick={() => this.deleteItem(item)}>X <i className="fa fa-trash"></i></button>
    </div>);
    return items;
  }

  setStatus(item){
    let l = this.state.list;
    let i = l.indexOf(item);
    l[i].status = !l[i].status;
    this.setState({list:l}); 
  }

  render(){
    return <div>
      <button type='submit' onClick={()=>this.additem()} className="row flex-center">{this.editel==='' ? 'Add' : 'editItem'}</button>
      <input type="text" className="row flex-center" onChange={(e)=>this.inp(e)} value={this.state.values} required placeholder="Item"></input>
      <h3 className="row flex-center">Completed Items: {this.state.list.filter((item)=> item.status===true).length}/{this.state.list.length}</h3>
      <progress value={this.state.list.filter((item)=> item.status===true).length*100/this.state.list.length} max="100" className="row flex-center"></progress>
      <ul>{this.getlist()}</ul>
      <footer className="row flex-center">�Sometimes our stop-doing list needs to be bigger than our to-do list.�<h6>CreatedBy : @Shivam</h6></footer>
    </div>
  }
}

function App() {
  return <div>
    <h1 className="row flex-center animated  bounce">Todo List</h1>
    <List1></List1>
  </div>
}

export default App;