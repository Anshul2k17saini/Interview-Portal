import React,{Component} from 'react';
import Ourteam from './ourteam';
import Contactus from './Contactus';
class Home extends Component{
    render(){
      return(
        <div>
            <div className="jumbotron  text-white text-center" style={{backgroundColor: "orange"}}>
              <h1>Let's schedule your interview</h1>
            </div>
            <div className="container text-white">
                <Ourteam></Ourteam >
            </div>
            <div className="container text-white">
                <Contactus></Contactus >
            </div>
        </div>
      );
    }
  
  }
  
  export default Home;