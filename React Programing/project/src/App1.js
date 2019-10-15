import React from 'react';

import './App.css';
let App =(props)=>{           
  return (
    <div>
     
    <h1> {props.msg1}</h1>
    <h1>{props.msg2}</h1>
    </div>
  );
}     
function OtherComponent(props){
    return <p className={props.cName}>This is other component</p>
  }
  function OtherComponent1(props){
    var output=props.cName;
    
      if(output){
                                        return <div><h1>{output}</h1></div>
      }
      else{
       return <p className="styled">there is no msg to show</p>
      }
  }

  function OtherComponent2(props){
    var output=props.msg;
    return (<div>
      {(output)?output:("there is no msg to show")}
    </div>);
  }
   
 function List1(props){
    var arr1=[];
    for(var i=0;i<props.arr.length;i++)
    arr1.push(<li>{props.arr[i]}</li>);
   return <ol>{arr1}</ol>
  }

  let Parent =()=>{
      var msg="messaage";
      let props={msg};
     
    return (
      <div>
        <App msg1="First Message" msg2="Second Message" />
        <OtherComponent cName='styled'/>
        <OtherComponent1 cName={props.msg}/>
        <OtherComponent2 cName={props.msg}/>
        <List1 arr={["Ankit","sitaram","shivam"]}></List1>
      </div>
    );
  }    
export {Parent};
