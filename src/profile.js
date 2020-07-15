import React from 'react';
import data from './data/data.json'
import img from './data/var1.jpg'
import img1 from './data/var2.jpg'
import profile from './profile.css'

import  {BrowserRouter,Route,Link} from "react-router-dom"
let Profile=()=>{    
    let profile=data.profiles;
 return(
        
        <div className="row justify-content-center">
        {  profile.map((value,index)=>(
            <div className="col-sm-10 col-md-5 col-lg-6 mt-1 " key={index}>
                    <div className="card">
                    <div className="card-body ">
                    <img className="img-fluid" src={img} />
                    <h4>{value.basic.name}</h4>
                      <h4 title='Roll NO' >{value.basic.roll}</h4>
                   <a href="tel:{value.basic.phone}" ><h4 title="Contact" type='link'>{value.basic.phone}</h4></a>
                    <a title="Gmail" href="mailto:varun13@gmail.com"> <h4>{value.basic.email}</h4></a>
                       <h4>{value.basic.add}</h4>
                       <button href="/" className="btn btn-secondary">Click</button>
                   
                        </div>
                 
                    </div>
                    </div>
                    ))
                  } 
                    
        </div>
    );
  
  }
  
export default Profile;
 