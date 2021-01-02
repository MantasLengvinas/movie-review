import React, { Component } from 'react'
import $ from 'jquery'

import UserStore from '../../stores/UserStore'

class LoginScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
        email: "",
        password: "",
        loginError: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

handleSubmit(event) {
  $('#loader,#loading-text').toggleClass('loaded');
  fetch("https://moviereview-test-1608553173564.azurewebsites.net/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        if(data.success){
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("email", data.email);
          localStorage.setItem("username", data.username);
          localStorage.setItem("token", data.authenticationToken);
          $('#loader,#loading-text').toggleClass('loaded');
          UserStore.isLoggedIn = true;
          window.location.replace("/");
        }
        else{
          this.setState({
            loginError: "Entered credentials are incorrect!"
          })
          $('#loader,#loading-text').toggleClass('loaded');
        }
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
      <div className="col d-flex justify-content-center margin-top">
        <form onSubmit={this.handleSubmit} className="border border-light rounded p-5">
          <div className="col d-flex justify-content-center color-white">
            <h4>SIGN IN</h4>
          </div>
          <div className="col d-flex justify-content-center">
            <p className="red">{this.state.loginError}</p>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1" className="color-white">Email adress</label>
            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1" className="color-white">Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary full-width ">SIGN IN</button>
          </div>
        </form>
      </div>
    </div>
    );
}
}

export default LoginScreen;
