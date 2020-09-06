import React,{Component} from 'react';
class Payinfo extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            usename:'',
            paytmid:''
        }
    }
    render(){
      return(
       <div>
          <div>
          <h1 style={{color: "orange"}}>Pay with paytm</h1>
          <h4>Phone no:7065353767</h4>
          <h1 style={{color: "orange"}}>Paytm id for order</h1>
          </div>
          <div>
            <h1 style={{color: "red"}}>We will conform the order id and will mail you interview details press thanks</h1>
          </div>
       </div> 
      );
    }
  
  }
  
  export default Payinfo ;