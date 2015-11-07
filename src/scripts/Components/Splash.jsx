import React from 'react';
import Backbone from 'backbone';
import Router from '../router';

const API_ROOT = 'http://wastenotio.herokuapp.com';

class Splash extends React.Component {

    handleSignIn = () => {
      fetch(API_ROOT + '/login', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
          email: this.refs.email.value,
          password: this.refs.password.value,
        })
      }).then((data) => {
        // WE CAN DO THINGS WITH DATA BACK FROM API HERE.
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
        // WE CAN DO THINGS WITH DATA BACK FROM API HERE.
        Backbone.history.navigate(`/index`, true);
      });
    }


    render() {
      return (
        <div className="splash">
          <div className="header">
            <ul className="nav">
              <li><button className="button" onClick={this.handleSignOut}>Logout</button></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About</a></li>
              <li className="dropdown"><a href="#">Login</a>
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
              <li><a href="#">Home</a></li>
            </ul>
          </div>
          <div className="logo">
            <a href="#about"><h1>#waste<span id="not">not</span></h1></a>
          </div>
          <div className="arrow">
            <a href="#thumbnail"><img src="/images/menu_down_arrow.png" alt="down arrow" height="100px" /></a>
          </div>
          <div id="thumbnail" className="thumbnail-container">
            <a href="#registration">
              <div id="thumb-1" className="thumbnail">
                <p>How can you get involved?</p>
              </div>
            </a>
            <a href="#about">
              <div id="thumb-2" className="thumbnail">
                <p>This is our mission. This is why we do what we do.</p>
              </div>
            </a>
            <a href="http://www.feedingamerica.org/">
              <div id="thumb-3" className="thumbnail">
                <p>Statistics about hunger and food waste in America.</p>
              </div>
            </a>
          </div>
          <div className="supporters-title"><h1>Our Supporters</h1></div>
          <div className="supporters">
            <a id="TIY" href="http://theironyard.com/"><img src="../images/ironyard.png"/></a>
            <a id="SPACC" href="http://www.stpete.com//"><img src="../images/SPACC transparent.png" height="120px"/></a>
            <a id="greenhouse" href="http://stpetegreenhouse.org/"><img src="../images/greenhouse_logo1.png" height="120px"/></a>
          </div>
       </div>
      );
    }
  }

export default Splash;
