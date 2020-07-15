import React,{Component} from 'react';
import data from "./data/data"
let Resume=(props)=>{
    fetch('https://jsonplaceholder.typicode.com/posts/')
      
        .then(response=>response.json())
        .then(data=>console.log(data))
        let info=data.profiles[props.location.profilesData.i]
        console.log(info.basic);
        return(
        <h1>Resume</h1>,
   
    info.map((val,ind)=>(
  <div key={ind}> {val.basic.name}</div>

    ))
    );
}
export default Resume