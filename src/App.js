import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Oldnavbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Private from './pages/Private';
import Dashboard from './components/Dashboard';

import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';



class App extends Component {
  render() {
    return (
      <div className="container">
        <Dashboard />

        <Switch>
          <Route exact path="/" component={Home} />


          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/private" component={Private} />
        </Switch>
      </div>
    );
  }
}

export default App;
