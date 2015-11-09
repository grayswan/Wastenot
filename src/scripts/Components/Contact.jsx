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
        <div>
          <h1>CONTACT US</h1>
          <ul>
            <li>
              <label>Name</label>
              <input type="text"/>
            </li>
            <li>
              <label>Email</label>
              <input type="email"/>
            </li>
            <li>
              <label>Comment</label>
              <input type="text"/>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
