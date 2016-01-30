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
      <li key="contact" className="nav-effect"><a href="#contact">CONTACT</a></li>,
      <li key="about" className="nav-effect"><a href="#about">ABOUT</a></li>,
    ];

    if (currentUser()) {
      navItems.push(
        <li id="logout" key="logout" className="nav-effect"><a href="#" onClick={this.handleSignOut}>LOGOUT</a></li>,
        <li key="profile" className="nav-effect"><a href="#profile">PROFILE</a></li>
      );
    } else {
      navItems.push(
        <li key="login" className="dropdown nav-effect"><a href="#">LOGIN</a>
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
                  <button className="button" type="button" onClick={this.handleSignIn} >Login </button>
                </p>
              </form>
            </li>
            <div key="newAccount" id="newAccount"><a href="#registration">Create New Account</a></div>
          </ul>
        </li>
      );
    }

    navItems.push(<li key="home" className="nav-effect"><a href="#">HOME</a></li>);

    return (
      <ul className="nav">
        {navItems}
      </ul>
    )
  }
}
