import React from 'react';
import Backbone from 'backbone';
import currentUser from '../currentUser';
import Navigation from './Navigation';

const API_ROOT = 'http://wastenotio.herokuapp.com';


export default class Profile extends React.Component {

  handleDonation = (event) => {
    fetch(API_ROOT + '/donations', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        id: currentUser().id,
        address: '12345',
        instructions: 'back door'
      })
    })
  }

  render() {
    return (
      <div className="profile-container">
        <div className="header">
          <Navigation />
        </div>
        <div className="profile-sidebar">
          <ul className="account-info">
            <li><h3>Account Profile</h3></li>
            <li><p>Michael Reed</p></li>
            <li><p>1234 Main St. St. Petersburg, FL 33713</p></li>
          </ul>
        </div>
        <div className="profile-body">
          <form>
            <h1>Hello, Michael</h1>
            <ul>
              <li>
                <label>Where is your donation?</label>
                <input type="text" ref="address"/>
              </li>
              <li>
                <label>Instructions for pickup</label>
                <input type="text" ref="address"/>
              </li>
            </ul>
            <li>
              <label>I have a donation</label>
              <button onClick={this.handleDonation}>Submit</button>
            </li>
          </form>
        </div>
      </div>
    )
  }
}
