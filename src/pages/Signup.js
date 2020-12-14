import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from './../context/auth-context';

class Signup extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    
    this.props.signup( username, password );
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h2>Sign Up</h2>

        <form onSubmit={this.handleFormSubmit}>

          <label>Username:</label>
          <input className="text" type="text" name="username" value={username} onChange={this.handleChange} />
          <br>

          </br>
          <label>Password:</label>
          <input className="text" type="password" name="password" value={password} onChange={this.handleChange} />
          <br>

          </br>
          <button className="signup" type="submit" value="Signup">Sign Up</button>
        </form>
        
        <p>Already have account?</p>
        <Link to={"/login"}> Sign In</Link>
      </div>
    );
  }
}



export default withAuth(Signup);


// const EnhancedSignup = withAuth(Signup)
// export default EnhancedSignup;