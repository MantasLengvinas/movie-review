import React, {Component} from 'react'
import $ from "jquery"

class EditAccount extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: "",
            username: "",
            response: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        if(this.state.email === "" && this.state.username === ""){
            this.setState({
                response: "In order to update your details, you must provide atleast one detail!"
            })
            return -1;
        }
        $('#loader,#loading-text').toggleClass('loaded');

        if(this.state.email === ""){
            this.setState({
                email: localStorage.getItem("email")
            })
        }

        if(this.state.username === ""){
            this.setState({
                username: localStorage.getItem("username")
            })
        }

    fetch("https://moviereview-test-1608553173564.azurewebsites.net/api/admin/changeUserData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization": "Bearer "+localStorage.getItem("token")
        },
        body: JSON.stringify({
            newEmail: this.state.email,
            newUsername: this.state.username,
        }),
        })
        .then((res) => res.json())
        .then(async (data) => {
            if(data.success){
                $('#loader,#loading-text').toggleClass('loaded');
                this.setState({
                    response: "Details have been updated successfully!"
                })
            }
        })
        .catch((err) => {
            console.log(err);
        });

        event.preventDefault();
    }

    render(){

        let goBack = () => {
            window.location.replace("/user");
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <button onClick={goBack} className="global-button" id="register-button">
                            Back
                        </button>
                    </div>
                    <div className="col-md d-flex justify-content-start">
                        <h3 className="black-outline">
                        </h3>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <form onSubmit={this.handleSubmit} className="border border-light rounded p-5">
                        <div className="col d-flex justify-content-center">
                                <h6 className="red">{this.state.response}</h6>
                            </div>
                            <div className="col d-flex justify-content-center color-white">
                                <h4>CHANGE ACCOUNT DETAILS</h4>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <small id="formHelp" className="form-text text-muted">To keep your current details, leave inputs blank</small>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <p className="red">{this.state.loginError}</p>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="color-white">New email address</label>
                                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="New email" value={this.state.email} onChange={this.handleChange} />
                                <small id="emailHelp" className="form-text text-muted">Leave this blank to keep your current email!</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className="color-white">New username</label>
                                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="New username" />
                                <small id="usernameHelp" className="form-text text-muted">Leave this blank to keep your current username!</small>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary full-width ">UPDATE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditAccount;