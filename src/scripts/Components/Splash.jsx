import React from 'react';
import Backbone from 'backbone';
import Router from '../router';

class Splash extends React.Component {
    handleSubmit = () => {
      console.log('Hello');
      let name = this.refs.name.value;
      let password = this.refs.password.value;
      Backbone.history
        .navigate(`/index`, true);
    }

    // componentDidMount() {
    //
    // }

    render() {
      return (
        <div className="splash">
          <ul className="cb-slideshow">
            <li>
              <span>Image 01</span>
            </li>
          </ul>
          
          <div className="header">
            <ul className="nav">
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About</a></li>
              <li className="dropdown"><a href="#">Login</a>
                <ul className="drop-nav">
                  <li>
                    <form action="http://wastenotio.herokuapp.com/users/sign_in" method="post">
                      <label>Name</label>
                      <input type="text" ref="name" />
                      <label>Password</label>
                      <input type="text" ref="password" />
                      <p className="remember me">
                        <label>Remember Me</label>
                        <input type="checkbox" />
                      </p>
                      <p className="submit">
                        <button onClick={this.handleSubmit} >Login </button>
                      </p>
                    </form>
                  </li>
                  <li id="newAcount" ><a href="#registration">Create New Account</a></li>
                </ul>
              </li>
              <li><a href="#home">Home</a></li>
            </ul>
          </div>
          <div className="inner">
            <h1>#waste<span id="not">not</span></h1>
          </div>
          <div className="arrow">
            <img alt="down arrow" height="100px" src="/images/menu_down_arrow.png" />
          </div>
       </div>
      );
    }
  }

export default Splash;
