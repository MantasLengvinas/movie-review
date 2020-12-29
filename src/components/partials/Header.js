import React, { Component } from 'react'
import { Link } from "react-router-dom";

import UserStore from '../../stores/UserStore'
import logo from '../images/logo.png'

class Header extends Component {
  render(){

    if(localStorage.getItem("isLoggedIn") !== "true"){
        return (
            <div className="headerPartial row navbar navbar-dark fixed-top">
                <div className="col-sm-8 pl-1 header-logo">
                    <Link to="/">
                        <img src={logo} alt="logo" srcset=""/>
                    </Link>
                </div>
                <div className="col-sm-4 m-auto p-2 d-flex justify-content-end">
                    <Link to="/login">
                        <button
                            className="global-button"
                            id="login-button"
                            >
                            Sign in
                        </button>
                    </Link>
                    <Link to="/register">
                        <button
                            className="global-button"
                            id="register-button"
                            >
                            Sign up
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="headerPartial row">
                <div className="col-sm-8 pl-1 header-logo">
                    <Link to="/">
                        <img src={logo} alt="logo" srcset=""/>
                    </Link>
                </div>
            <div className="col-sm-4 m-auto d-flex justify-content-end">
                <h5>Welcome, {this.props.email}</h5>
            </div>
        </div>
        );
    }
  }
}

export default Header;
