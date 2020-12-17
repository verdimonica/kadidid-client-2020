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
      <div className="login-wrap">
        <div className="login-html" id="login-html">
        <span 
          id="tab-1" 
          type="radio" 
          name="tab" 
          className="sign-in" 
          checked>
          <label for="tab-1" className="tab"/>
          <p className="text-1" id="opt-2"> Sign In | Sign Up</p>
          <image ClasName="logo" href=""/>
        </span>
        <div className="login-form">
          <div className="sign-in-htm" >
          <form onSubmit={this.handleFormSubmit}>
            <div className="group">
            <label className="label">Email:</label>
            <input className="input" type="text" name="username" value={username} onChange={this.handleChange}/>
            </div>
            <div className="group">
            <label className="label">Password:</label>
            <input className="input" type="password" name="password" value={password} onChange={this.handleChange} />
            </div>
            
            <div className="group">
                <input className="button" id="login-button" type="submit" value="Login" />
						</div>
            <div class="foot-lnk" id="forgot">
								<image href=""></image>
						</div>
          </form>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Login);
