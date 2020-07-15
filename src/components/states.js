//states exmple
import React,{Component} from 'react'

export default class States extends Component
{
   constructor() {
          super();
          {
              this.state ={
                  name:"Varun",
                  mail:"Varuncool45@gmail.com"
              }
          }
      }
       changeColor=() => {
          this.setState({name:"rohit"})
      }
      render()
  { 
     
      return(
          <div> <h1>heloo state im {this.state.name} </h1> 
          <h2> mail is  {this.state.mail} </h2>
          <button type="button" onClick = {()=>
              this.changeColor()
          }>Click me</button>
          </div>
      );
  }
}