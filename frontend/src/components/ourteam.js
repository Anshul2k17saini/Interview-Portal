import React,{Component} from 'react';
import Kunal from "./Kunal.jpg";
import Anshul from "./Anshul.jpg";
class Ourteam extends Component{
    render(){
      return(
        <div>
            <div>
              <h1 style={{color: "orange"}}>Our Team</h1>
              <figcaption><strong><h3>Director</h3></strong></figcaption>
              <img src={Kunal} width="280"  height="300"/>
              <img src={Anshul}  width="280" height="300"/>
            </div>

        </div>
      );
    }
  
  }
  
  export default Ourteam;