import React, { Component } from 'react'

import UserStore from '../../stores/UserStore'

class LoginScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
        email: "",
        password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

handleSubmit(event) {
  fetch("https://moviereview-test-1608553173564.azurewebsites.net/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
            <h4>PRISIJUNGIMAS</h4>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Elektroninio pašto adresas</label>
            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="El. paštas" value={this.state.email} onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Slaptažodis</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required className="form-control" id="exampleInputPassword1" placeholder="Slaptažodis" />
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary full-width ">PRISIJUNGTI</button>
          </div>
        </form>
      </div>
    </div>
    );
}
}

export default LoginScreen;
