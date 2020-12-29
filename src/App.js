import React, { Component } from 'react'
import {observer} from 'mobx-react'
import './App.css';
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from 'react-router-dom'


import LoadingScreen from './components/screens/Loading';
import Home from './components/screens/Home';
import MovieScreen from './components/screens/Movie';
import Welcome from './components/screens/Welcome';
import Login from './components/screens/Login'
import Register from './components/screens/Register'

import UserStore from './stores/UserStore'
import Header from './components/partials/Header';


class App extends Component {
  render(){
    let loginStatus = localStorage.getItem("isLoggedIn");
    if(loginStatus === "true" || UserStore.isLoggedIn){
      return (
        <Router>
          <Header
            email={localStorage.getItem("email")}  
          />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:movieID" component={MovieScreen} />
          </Switch>
        </Router>
      );
    }
    else{
      return (
        <Router>
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
