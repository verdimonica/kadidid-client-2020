import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
       <BrowserRouter>
       {/*<Dashboard />*/}
        
          <Switch>
            <Route exact path="/" component={Login} />

            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />

            <Route exact path="/child/:id" component={Dashboard} />
            <PrivateRoute exact path="/private" component={Private} />
          </Switch>

        </BrowserRouter>

      </div>
    );
  }
}

export default App;
