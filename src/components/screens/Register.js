import React, { Component } from 'react'
import $ from 'jquery'

import { confirmAlert } from '../customLib/confirmation-alert'; // Import
import '../customLib/confirmation-alert/index.css';

class RegisterScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
        email: "",
        username: "",
        password: "",
        registrationErrors: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

handleSubmit(event) {
  $('#loader,#loading-text').toggleClass('loaded');
    fetch("https://moviereview-test-1608553173564.azurewebsites.net/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      }),
    })
    .then((res) => res.json())
    .then(async (data) => {
      if(data.success){
        $('#loader,#loading-text').toggleClass('loaded');
          confirmAlert({
            title: 'Success!',
            message: 'Registration was successfull. Please sign in.',
            warning: false,
            buttons: [
              {
                label: 'Okay',
                onClick: () => window.location.replace('/login?success')
              }
            ]
        });
      }
      else{
        $('#loader,#loading-text').toggleClass('loaded');
          confirmAlert({
            title: 'Failed to sign up!',
            message: 'User with given credentials already exists',
            warning: true,
            buttons: [
              {
                label: 'Okay'
              }
            ]
          });
      }
    })
    .catch((err) => {
      $('#loader,#loading-text').toggleClass('loaded');
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
          <div className="col d-flex justify-content-center margin-top color-white">
            <form onSubmit={this.handleSubmit} className="border border-light rounded p-5">
              <div className="col d-flex justify-content-center">
                <h4>SIGN UP</h4>
              </div>
              <div className="col d-flex justify-content-center">
              <p className="red">{this.state.registrationErrors}</p>
            </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
                <small id="emailHelp" className="form-text text-muted">Email is required for authentication</small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required className="form-control" id="exampleInputUsername" placeholder="Username" />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="col-md-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary full-width ">SIGN UP</button>
              </div>
            </form>
          </div>
        </div>
    );
}
}

export default RegisterScreen;
