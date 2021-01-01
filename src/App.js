import React, { Component } from 'react'
import {observer} from 'mobx-react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/screens/Home';
import MovieScreen from './components/screens/Movie';
import Welcome from './components/screens/Welcome';
import Login from './components/screens/Login'
import Register from './components/screens/Register'
import Reviews from './components/screens/Reviews';
import User from './components/screens/UserData';
import EditAccount from './components/screens/EditAccount';

import UserStore from './stores/UserStore'
import Header from './components/partials/Header';


class App extends Component {
  render(){
    let loginStatus = localStorage.getItem("isLoggedIn");
    if(loginStatus === "true" || UserStore.isLoggedIn){
      return (
        <Router>
        <div id="loader" className="loading loaded">
          <h3 id="loading-text" className="black-outline loaded">Loading.. It may take a while..</h3>
        </div>
          <Header
            username={localStorage.getItem("username")}  
          />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user" component={User} />
            <Route path="/editAccount" component={EditAccount} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/movie/:movieID" component={MovieScreen} />
          </Switch>
        </Router>
      );
    }
    else{
      return (
        <Router>
        <div id="loader" className="loading loaded">
          <h3 id="loading-text" className="black-outline loaded">Loading.. It may take a while..</h3>
        </div>
          <Header />
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
        </Router>
      );
    }
  }
}

export default observer(App);
