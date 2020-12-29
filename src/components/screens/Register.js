import React, { Component } from 'react'

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
    fetch("https://moviereview-test-1608553173564.azurewebsites.net/api/auth/signup", {
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
          <div className="col d-flex justify-content-center margin-top color-white">
            <form onSubmit={this.handleSubmit} className="border border-light rounded p-5">
              <div className="col d-flex justify-content-center">
                <h4>REGISTRACIJA</h4>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Elektroninio pašto adresas</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="El. paštas" value={this.state.email} onChange={this.handleChange} required />
                <small id="emailHelp" className="form-text text-muted">Jūsų el. paštas bus reikalingas norint prisijungti</small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Vartotojo vardas</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required className="form-control" id="exampleInputUsername" placeholder="Vartotojo vardas" />
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
