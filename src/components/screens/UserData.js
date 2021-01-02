import React, { Component } from 'react'
import $ from "jquery"

import { confirmAlert } from '../customLib/confirmation-alert'; // Import
import '../customLib/confirmation-alert/index.css';

class UserData extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: "",
            username: "",
            date_created: "",
            rated_movies: "",
            response: ""
        }

        this.getUserData = this.getUserData.bind(this);
        this.redirectToReviews = this.redirectToReviews.bind(this);
        this.editAccount = this.editAccount.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this);
        this.deleteAccountConfirm = this.deleteAccountConfirm.bind(this);
    }

    getUserData(){
        $('#loader,#loading-text').toggleClass('loaded');
        fetch("https://moviereview-test-1608553173564.azurewebsites.net/api/admin/getUserData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer "+localStorage.getItem("token")
            },
            body: JSON.stringify({
                email: localStorage.getItem("email")
            }),
            })
            .then((res) => res.json())
            .then(async (data) => {
                $('#loader,#loading-text').toggleClass('loaded');
                this.setState({
                    email: data.email,
                    username: data.username,
                    date_created: data.created,
                    rated_movies: data.numberOfMovies
                })
            })
            .catch((err) => {
                console.log(err);
            });
        
    }

    redirectToReviews(){
        window.location.replace("/reviews");
    }

    editAccount(){
        window.location.replace("/editAccount");
    }

    deleteAccount(){
        fetch("https://moviereview-test-1608553173564.azurewebsites.net/api/admin/deleteUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer "+localStorage.getItem("token")
            },
            body: JSON.stringify({
                email: localStorage.getItem("email"),
            }),
            })
            .then((res) => res.json())
            .then(async (data) => {
                if(data.success){
                    $('#loader,#loading-text').toggleClass('loaded');
                    this.setState({
                        response: "Account deleted successfully."
                    })
                    setInterval(() => {
                        localStorage.clear();
                        window.location.replace("/");
                    }, 2000)
                }
                else{
                    this.setState({
                        response: "Failed to delete.. try again later."
                    })
                }
            })
            .catch((err) => {
                console.log(err);
        });
    }

    deleteAccountConfirm(){
        confirmAlert({
            title: 'Delete your account?',
            message: 'Deleted account cannot be restored!',
            buttons: [
              {
                label: 'Yes',
                onClick: () => this.deleteAccount()
              },
              {
                label: 'No'
              }
            ]
        });
    }

    componentDidMount(){
        this.getUserData();
    }

    render(){

        let goBack = () => {
            window.location.replace("/");
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
                            Your profile
                        </h3>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-3">
                    <div className="col-md-8 border border-light">
                        <div className="row mt-3">
                            <div className="col">
                                <h5 className="red ml-3">{this.state.response}</h5>
                                <h3 className="black-outline ml-3">
                                    {this.state.username}
                                </h3>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <h5 className="black-outline ml-3">
                                    {this.state.email}
                                </h5>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <h5 className="black-outline ml-3">
                                    Your account was created: <i>{this.state.date_created}</i>
                                </h5>
                            </div>
                        </div>
                        <div className="row mt-3 mb-2">
                            <div className="col-md-6">
                                <h5 className="black-outline ml-3 text-link" onClick={this.redirectToReviews}>
                                    Reviewed movies: <i>{this.state.rated_movies}</i>
                                </h5>
                            </div>
                            <div className="col-md-6 d-flex justify-content-end m-auto pl-2">
                                <button onClick={this.editAccount} className="global-button" id="register-button">
                                    Edit account
                                </button>
                                <button onClick={this.deleteAccountConfirm} className="global-button red" id="register-button">
                                    Delete account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserData;