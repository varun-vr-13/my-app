import React,{Component} from 'react'

let Greets=(props)=>{
    return (
    <div>
      <h1>This is a greet Component</h1> 
      <h2>This is {props.name} and {props.mail} is my Mail</h2>
     {props.childeren}
      </div> );

}
 export default Greets;