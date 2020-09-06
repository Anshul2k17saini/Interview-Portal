import React,{Component} from 'react';
class Contactus extends Component{
    render(){
      return(
        <div>
            <div>
              <h1 style={{color: "orange"}}>Contact US</h1>
              <div class="row">
            <div class="col-12 col-sm-4 offset-sm-1">
                   <h5>Our Address</h5>
                    <address>
                  New Delhi Ramesh Nagar<br/>
                  Metro piller no 230 opposite<br/>
                  India<br/>
                  <i class="fa fa-phone"></i>: +852 1234 5678<br/>
                  <i class="fa fa-fax"></i>: +852 8765 4321<br/>
                  <i class="fa fa-envelope"></i>:
                        <a href="InterviewScheduler@gmail.com">InterviewScheduler@gmail.com</a>
               </address>
            </div>
  
       </div>
            </div>
        </div>
      );
    }
  
  }
  
  export default Contactus;