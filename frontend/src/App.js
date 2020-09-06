import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Rigister from "./components/Rigister"
import Welcom from "./components/Welcom"
import fee from "./components/fee"
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component{
  render(){
    return(
      <Router> 
         <div className=" container-fluid">
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <Link to="/" className="navbar-brand">Home</Link>
             <div className="collapse navbar-collapse">
               <ul className="navbar-nav mr-auto">
                 <li className="navbar-item">
                   <Link to="/Signin" className="nav-link">Signin</Link>
                 </li>
               </ul>
             </div>
           </nav>
          <Route path="/" exact component={Home}/>
          <Route path="/Signin" exact component={Signin}/>
          <Route path="/Rigister" exact component={Rigister}/>
          <Route path="/Welcom" exact component={Welcom}/>
          <Route path="/fee" exact component={fee}/>
        </div>
       </Router>
    );
  }

}

export default App;
