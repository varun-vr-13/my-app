import React from 'react';

import '../src/App.css'
import Hello from "./hello" //for id1
//import {Hello} from "./hello" //for id2
import Welcome from "./components/welcome" //class component
import Greets from "./components/greets"
import States from   "./components/states"
import Hooks from "./components/hooks"
import Counts from "./components/count"
import data from "./data/data"
import Profile from "./profile"
import Resume from "./resume"
import  {BrowserRouter as Router,Route,Link} from "react-router-dom"
function App() {
  return (
    <div className="App"  >
    
  <Profile />
     
       {/* <h1>hello</h1> 
    <h2>hi</h2>
  
    <Hello />
    <Welcome />
    <Greets mail="vr2@gmail.com" name="varun"></Greets>
    <img  src={logo} style={{width:"200px",height:"100px"}} />
    <p>hello</p>
    <p>Childeren </p>
    <Greets mail="vr2@gmail.com" name="Varun"></Greets>
   <h1> Using class component</h1>
 
   <Welcome name="pravi" mail="pravi23@gmail.com">
     <h2>my nickname is soumya

     </h2>
   </Welcome>
   <States /> 
   <Counts /> 
   <Hooks /> */}
   
    
  </div>
   
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  
   
    
    
  ); 
}
export default App;