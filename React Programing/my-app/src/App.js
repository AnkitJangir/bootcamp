import React from 'react';

import './App.css';

let App =(props)=>{           
  return (
    <div>
     
    <h1> {props.msg1}</h1>
    <h1>{props.msg2}</h1>
    </div>
  );
}        /////Jsx

function OtherComponent(props)
{
  return <p className={props.cName}>This is other component.....<span className="glow">My Namw is ANkit and in am from sikar and now I m in Skit</span> bcdcdsbcisdbcidsbcidsbcidsbcisdbcibcisbvdvvjvivnijsvnsij</p>
}                                           /////Jsx
 let Parent =()=>{
   return (
     <div>
       <App msg1="First Message" msg2="Second Message" />
       <OtherComponent cName='styled'/>
     </div>
   );
 }                /////Jsx
export {Parent};


















