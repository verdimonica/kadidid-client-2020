import React, { Component } from "react";
import {Route, Redirect} from 'react-router-dom';
import { withAuth } from './../context/auth-context';
import axios from "axios";

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    // Call funciton coming from AuthProvider ( via withAuth )
    //this.props.login(username, password);
    this.setState({redirect:true});
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    const {redirect} = this.state;

    if(redirect){
      return <Redirect to='/child/init'/>;
    }

    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleFormSubmit}>
          
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange}/>

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
