import React, { Component } from 'react'
import {observer} from 'mobx-react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import LoadingScreen from './components/screens/Loading';
import Home from './components/screens/Home';
import Welcome from './components/screens/Welcome';
import Login from './components/screens/Login'
import Register from './components/screens/Register'

import UserStore from './stores/UserStore'
import Header from './components/partials/Header';

class App extends Component {
  render(){

    if(UserStore.loading){
      return <LoadingScreen />
    }
    else{
      if(UserStore.isLoggedIn){
        return <Home />
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
}

export default observer(App);
