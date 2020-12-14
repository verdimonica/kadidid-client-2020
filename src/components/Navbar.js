import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../context/auth-context';

class Navbar extends Component {
    render() {
      const {user, logout, isLoggedin} = this.props;
        return (
        <div>
              <li className="item">
              <Link to={'/'}>
                <span>Home</span>
              </Link>
              {this.props.isLoggedIn ?this(
                <>
                  <p>username:{this.props.user && this.props.user.username}</p>
                  <span onClick={this.props.logout}>Sign Out</span>
                </>
              ):(
                <>
                <li className="item">
                  <Link to='/login'>
                    <span>Sign In</span>
                  </Link>
                </li>
                <li className="item">
                  <Link to='/signup'>
                    <span>Sign Up</span>
                  </Link>
                </li>
                <li className="item">
                  <Link to='/profile'>
                    <span>My Profile</span>
                  </Link>
                </li>
                </>
              )}
              </li>
          </div>
        )
    }
}

export default withAuth(Navbar);