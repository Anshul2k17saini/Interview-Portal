import React,{Component} from 'react';
class Level extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            usename:'',
            Level:'',
            field:'',
            Skills:'',
            fees:false
        }
    }
    onSubmit=(event)=>{
      event.preventDefault();
      console.log(`level:${this.state.Level}`);
      console.log(`field:${this.state.field}`);
      console.log(`Skills:${this.state.Skills}`);
      console.log(`fees:${this.state.fees}`);
      this.state={
        usename:'',
        Level:'',
        field:'',
        Skills:'',
        fees:false
    }
    }
    OnChangeLevel=(event)=>{
      this.setState({Level:event.target.value});
  }  
  OnChangefield=(event)=>{
    this.setState({field:event.target.value});
}  
OnChangeskills=(event)=>{
  this.setState({Skills:event.target.value});
}  
    render(){
      return(
        <div>
            <div className="row">
              <form onSubmit={this.onSubmit}>
              <div className="col-sm-4" className="form-group">
                    <h1 style={{color: "orange"}}>Hardeness Level</h1>
                    <div className="form-group">
                        <input type="radio" name="Level" id="LevelLow" 
                        value="Easy"
                        checked={this.state.Level==="Easy"}
                        onChange={this.OnChangeLevel}/>
                        <label className="form-check-lable">Easy</label>
                        <br></br>
                        <input type="radio" name="Level" id="LevelMedium" 
                        value="Medium" checked={this.state.Level==="Medium"}
                        onChange={this.OnChangeLevel}/>
                        <label className="form-check-lable">Medium</label>
                        <br></br>
                        <input type="radio" name="Level" id="LevelHard" 
                        value="Hard" checked={this.state.Level==="Hard"}
                        onChange={this.OnChangeLevel}/>
                        <label className="form-check-lable">Hard</label>
                    </div>
                  </div>
                  <div className="col-sm-4" className="form-group">
                    <h1 style={{color: "orange"}}>Field Type</h1>
                    <div className="form-group">
                        <input type="radio" name="field" id="fieldfullstackdeveloper" 
                        value="fullstackdeveloper"
                        checked={this.state.field==="fullstackdeveloper"}
                        onChange={this.OnChangefield}/>
                        <label className="form-check-lable">Full Stack Developer</label>
                        <br></br>
                        <input type="radio" name="field" id="fieldbackenddeveloper" 
                        value="backenddeveloper" checked={this.state.field==="backenddeveloper"}
                        onChange={this.OnChangefield}/>
                        <label className="form-check-lable">Backend Developer</label>
                        <br></br>
                        <input type="radio" name="field" id="fieldfrontenddeveloper" 
                        value="frontenddeveloper" checked={this.state.field==="frontenddeveloper"}
                        onChange={this.OnChangefield}/>
                        <label className="form-check-lable">Frontend Developer</label>
                        <br></br>
                        <input type="radio" name="field" id="fieldsoftwaredevelope" 
                        value="softwaredeveloper" checked={this.state.field=="softwaredeveloper"}
                        onChange={this.OnChangefield}/>
                        <label className="form-check-lable">Software developer</label>
                    </div>
                  </div>
                  <h1 style={{color: "orange"}}>Skills </h1>
                  <textarea  class="form-control" name="Skills" rows="4" cols="50" onChange={this.OnChangeskills}>fill with bracket seperation.........</textarea>
                  <br></br>
                  <div>
                    <input type="submit" value="Submit"
                    className="btn btn-primary"/>
                  </div>
              </form>
            </div>
        </div>
      );
    }
  
  }
  
  export default Level ;