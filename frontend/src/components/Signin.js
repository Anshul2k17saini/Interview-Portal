import React,{Component} from 'react';
import { Link } from 'react-router-dom';
class Signin extends Component{
    constructor(props)
    {
        super(props);
        this.state={
          UserName:'',
          Password:''
        };

    };
    
    onSubmit=(event)=>{
      event.preventDefault();
      console.log("Login form submited");
      //const doesUserExit = await User.exists({ UserName: username });
      //const doespassword = await User.exists({ Password: password });
      /*if(doesUserExit===true && doespassword===true)
      {
        this.props.history.push("/Welcom");
      }
      else{
        this.props.history.push("/Signin");
      }*/


      this.state={
        UserName:'',
        Password:''
      };
          
    }
    onChangeUsername=(event)=>{
        this.setState({UserName:event.target.value});
    }
    onChangePassword=(event)=>{
      this.setState({Password:event.target.value});
  }
    render(){
      return(
        <div className="container text-white">
              <div style={{marginTop:20}}></div>
              <h1>Login_in</h1>
              <div className="row">
               <form onSubmit={this.onSubmit}>
                 <div className="col-sm-4" className="form-group">
                   <label>UserName</label>
                   <input type="text" className="form-control" value={this.state.UserName}
                   onChange={this.onChangeUsername} />
                 </div>
                 <div className="col-sm-4" className="form-group">
                   <label>Password</label>
                   <input type="Password" className="form-control" value={this.state.Password} 
                   onChange={this.onChangePassword}/>
                 </div>
                 <div>
                    <input type="submit" value="Login"
                    className="btn btn-primary"/>
                  </div>
                  <Link to="/Rigister">Register</Link>
                  <br></br>
                  <Link to="/welcom">Welcom</Link>
                  <br></br>
                  <Link to="/fee">Payfee</Link>
               </form>
             </div>

        </div>
      );
    }
  
  }
  
  export default Signin;