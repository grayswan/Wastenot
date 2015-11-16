import React from 'react';
import Backbone from 'backbone';
import Navigation from './Navigation';

export default class Contact extends React.Component {

  render() {
    return (
      <div className="contact-container">
        <div className="header">
          <Navigation />
        </div>
        <div className="contact-div">
          <ul className="contact">
            <li><h1>CONTACT US</h1></li>
            <li><p>Our site is currently under construction</p></li>
            <li><p>If you are interested in finding out more about #wastenot, please contact Michael Reed at: myk27x@gmail.com</p></li>
          </ul>
        </div>
      </div>
    )
  }
}
