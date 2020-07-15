import React,{ useState } from 'react'
export default function Hooks()
{
let [count,setCount]=useState(0)
return (

<div> <h2>{count} </h2>
<button type="button" onClick={()=>setCount(count+1)}> Count++</button>
<button type="button" onClick={()=>setCount(count-1)}> Count--</button>
</div>

);
}