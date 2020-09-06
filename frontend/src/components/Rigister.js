import React,{Component} from 'react';
import axios from 'axios';
class Rigister extends Component{
     constructor(props){
       super(props);
       this.state={
        email:'',
        phoneno:'',
        username:'',
        password:'',
        passwordcheck:''
       };
     };
     onSubmit=(event)=>{
      event.preventDefault();
      const newReg={
        email:this.state.email,
        phoneno:this.state.phoneno,
        usename:this.state.username,
        password:this.state.password,
      }
      axios.post("http://localhost:5000/user/Rigister",newReg)//sending post request at this url to add the data to backend
              .then(res=>console.log(res.data));
      this.state={
      email:'',
      phoneno:'',
      username:'',
      password:'',
      passwordcheck:''
      };
     }
  onChangeemail=(event)=>{
      this.setState({email:event.target.value});
  }
  onChangephoneno=(event)=>{
    this.setState({phoneno:event.target.value});
}
  onChangeusername=(event)=>{
    this.setState({username:event.target.value});
}
  onChangepassword=(event)=>{
  this.setState({password:event.target.value});
}
  onChangepasswordcheck=(event)=>{
  this.setState({passwordcheck:event.target.value});
}
    render(){
      return(
        <div>
            <div className="container text-white">
            <div style={{marginTop:20}}></div>
              <h1 style={{color: "orange"}}>Rigister here</h1>
              <div className="row">
               <form onSubmit={this.onSubmit}>
                  <div className="col-sm-4" className="form-group">
                    <label>Emailid</label>
                    <input type="text" value={this.email} className="form-control" 
                    onChange={this.onChangeemail}/>
                  </div>
                  <div className="col-sm-4" className="form-group">
                    <label>Phoneno</label>
                    <input type="number" value={this.phoneno} className="form-control" 
                    onChange={this.onChangephoneno}/>
                  </div>
                  <div className="col-sm-5" className="form-group">
                    <label>username</label>
                    <input type="text" value={this.username} className="form-control" 
                    onChange={this.onChangeusername}/>
                  </div>
                  <div className="col-sm-5" className="form-group">
                    <label>password</label>
                    <input type="password" value={this.password} className="form-control" 
                    onChange={this.onChangepassword}/>
                  </div>
                  <div className="col-sm-5" className="form-group">
                    <label>checkpassword</label>
                    <input type="password" value={this.passwordcheck} className="form-control" 
                    onChange={this.onChangepasswordcheck}/>
                  </div>
                  <div>
                    <input type="submit" value="Register"
                    className="btn btn-primary"/>
                  </div>
                </form>
              </div>
            </div>
        </div>
      );
    }
  
  }
  
  export default Rigister ;