import React, { Component } from 'react'

class RegisterScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
        email: "",
        password: "",
        registrationErrors: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

handleSubmit(event) {
    console.log(this.state.email);
    event.preventDefault();
}

handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}
render(){
    return (
        <div className="row">
          <div className="col d-flex justify-content-center mt-5">
            <form onSubmit={this.handleSubmit} className="border border-dark rounded p-5">
              <div className="col d-flex justify-content-center">
                <h4>REGISTRACIJA</h4>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Elektroninio pašto adresas</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="El. paštas" value={this.state.email} onChange={this.handleChange} required />
                <small id="emailHelp" className="form-text text-muted">Jūsų el. paštas bus reikalingas norint prisijungti</small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Slaptažodis</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required className="form-control" id="exampleInputPassword1" placeholder="Slaptažodis" />
              </div>
              <div className="col-md-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary full-width ">REGISTRUOTIS</button>
              </div>
            </form>
          </div>
        </div>
    );
}
}

export default RegisterScreen;
