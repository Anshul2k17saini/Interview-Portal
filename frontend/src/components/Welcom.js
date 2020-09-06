import React,{Component} from 'react';
import Level from './Level';
class Welcom extends Component{
    render(){
      return(
       <div>
          <div className="jumbotron  text-white text-center" style={{backgroundColor: "orange"}}>
            <h1>Welcom Username</h1>
            <h1>Let's schedule your interview</h1>
          </div>
          <div className="container text-white">
             <Level></Level>
          </div>
       </div> 
      );
    }
  
  }
  
  export default Welcom ;