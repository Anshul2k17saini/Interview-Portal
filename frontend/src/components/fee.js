import React,{Component} from 'react';
import Payinfo from './Payinfo';
class fee extends Component{
    render(){
      return(
       <div>
          <div className="jumbotron  text-white text-center" style={{backgroundColor: "orange"}}>
            <h1>Welcom Username</h1>
            <h1>Please proceed with the payment to get your interview schedule</h1>
          </div>
          <div className="container text-white">
             <Payinfo></Payinfo>
          </div>
       </div> 
      );
    }
  
  }
  
  export default fee ;