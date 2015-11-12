import React from 'react';
import Backbone from 'backbone';
import $ from 'jquery';
import currentUser from '../currentUser';

const API_ROOT = 'http://wastenotio.herokuapp.com';

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: currentUser()
    }
  }

  handleSignIn = () => {
    $.ajax(API_ROOT + '/login', { method: 'POST', data: {
      email: this.refs.email.value,
      password: this.refs.password.value,
    }}).then((data) => {
      localStorage.setItem('user', JSON.stringify(data));
      this.setState({user: data});
      console.log(data);
      Backbone.history.navigate(`/index`, true);
    });
  }

  handleSignOut = () => {
    fetch(API_ROOT + '/logout', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((data) => {
      localStorage.setItem('user', null);
      this.setState({user: null});
      Backbone.history.navigate(`/index`, true);
    });
  }

  render () {
    let navItems = [
      <li key="contact"><a href="#contact">Contact</a></li>,
      <li key="about"><a href="#about">About</a></li>,
    ];

    if (currentUser()) {
      navItems.push(
        <li key="logout"><a id="logout" onClick={this.handleSignOut}>Logout</a></li>,
        <li key="profile"><a href="#profile">Profile</a></li>
      );
    } else {
      navItems.push(
        <li key="login" className="dropdown"><a href="#">Login</a>
          <ul className="drop-nav">
            <li>
              <form>
                <label>Name</label>
                <input className="login" type="email" ref="email" />
                <label>Password</label>
                <input className="login" type="password" ref="password" />
                <p className="remember me">
                  <label>Remember Me</label>
                  <input className="checkbox" type="checkbox" />
                </p>
                <p className="submit">
                  <button className="button" onClick={this.handleSignIn} >Login </button>
                </p>
              </form>
            </li>
            <div id="newAccount" ><a href="#registration">Create New Account</a></div>
          </ul>
        </li>
      );
    }

    navItems.push(<li key="home"><a href="#">Home</a></li>);

    return (
      <ul className="nav">
        {navItems}
      </ul>
    )
  }
}
