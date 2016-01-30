import React from 'react';
import Backbone from 'backbone';
import Navigation from './Navigation';

export default class Contact extends React.Component {

  render() {
    return (
      <div>
        <div className="header">
          <Navigation />
        </div>
        <div className="contact-container">
          <div className="contact-div">
            <ul className="contact">
              <li><h1>CONTACT US</h1></li>
              <li><p>If you are interested in finding out more about #wastenot, please contact Michael Reed at: <a className="email" href="mailto:myk27x@gmail.com">myk27x@gmail.com</a></p></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
