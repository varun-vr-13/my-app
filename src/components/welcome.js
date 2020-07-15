//class component exmple
import React,{Component} from 'react'

class Welcome extends Component
{
  render() //returns null or html
  {
      return ( <div>
      <h1>Class Component</h1>
      <h2> my name is {this.props.name} and this is my mail {this.props.mail}</h2>
     {this.props.children}
      </div>); //not html its jsx
  }
}

 export default Welcome