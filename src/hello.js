import React from 'react';
/*
let Hello=()=>{  id1
    return(
        <div>
            <h1>Its my hello component</h1>
        </div>
    );

}
export default Hello
export let Hello = ()=><div><h1>Its my hello component</h1></div> //id2

    */

   const Hello = () => {  
  //  return(
  //      <div className='dummyclass'>
  //          <h1>Its my hello component</h1>
  //      </div>
  //  );
  return React.createElement('div',  //using react
   {id: 'hello',className:'dummyclass'},
   React.createElement('h1', null,'Hello Varun'));

}
export default Hello
