import React,{Component} from 'react'
export default class Counts extends   Component
{
    constructor(){
        super();{
           this.state=
           {
            num:0,
            s1:0,
           }
        }
    }
    inc = ()=>{
       this.setState({num:this.state.num+1});
     }
     dec = ()=>{
        this.setState({num:this.state.num-1});
     }
     start = ()=>{
        this.state.s1 = window.setInterval(this.tog,1000);
     }
     
     tog = ()=>{
        var s=1;

        this.setState({num:this.state.num+s});
        s++;
     
     }
     stop = ()=>{
         window.clearInterval(this.state.s1);
     }
render() {
    return (
      <div><h1 style={{margin:"20px auto 50px 50px"}}>Time</h1>
      <h2 id="num1" style={{margin:"auto 50px"}}>{this.state.num}</h2>
  <label  style={{margin:" 0px"}}>Click Me to increment by 1</label>    <button type="button" onClick={()=>this.inc()} className="button" style={{margin:"50px 20px auto 50px",backgroundColor:"blue",color:"white",width:"100px",height:"30px",fontSize:"20px"}}>Click</button>
  <br></br><label style={{margin:" 0px"}} for="id2">Click Me to decrement by 1</label>   <button id="id2" type="button" onClick={()=>this.dec()} className="button" style={{margin:"10px 50px",backgroundColor:" red",color:"white",width:"100px",height:"30px",fontSize:"20px"}}>Click Me</button>
  <br></br><label style={{margin:" 0px"}} for="id3">Click Me to inc the value</label>       <button type="button" id="id3" onClick={()=>this.start()} className="button" style={{margin:" 10px 70px",backgroundColor:"pink",color:"white",width:"100px",height:"30px",fontSize:"20px"}}>Start</button>
  <br></br><label style={{margin:" 0px"}} for="id4">Click Me to stop</label>       <button type="button" id='id4' onClick={()=>this.stop()} className="button" style={{margin:"10px 130px",backgroundColor:"aqua",color:"white",width:"100px",height:"30px",fontSize:"20px"}}>Stop</button>

      </div>  
        
    );
}
}