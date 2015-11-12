import React from 'react';
import Backbone from 'backbone';
import currentUser from '../currentUser';
import Navigation from './Navigation';

const API_ROOT = 'http://wastenotio.herokuapp.com';


export default class Profile extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      donor: {
        org_name: '',
        street_address: '',
        contact_name: '',
        phone: ''
      }
    }
  }

  componentWillMount() {
    this.currentUser = currentUser();

    fetch(API_ROOT + '/donors?user_id=' + this.currentUser.id).then((response) => {
      response.json().then((data) => {
        this.setState({donor: data });
      });
    })
  }

  handleDonation = (event) => {
    fetch(API_ROOT + '/donations', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        user_id: currentUser().id,
        address: this.refs.address.value,
        instructions: this.refs.instructions.value,
      })
    })
  }

  render () {
    // let thanks = [
    // <h3>Thanks for your donation! A volunteer will come to pick it up shortly.</h3>
    // ];
    //
    // if (donation button has been clicked) {
    //   say thanks(
    //
    //   );
    // } else {
    //   don't say thanks


    return (
      <div className="profile-container">
        <div id="profile-header">
          <Navigation />
        </div>
        <div className="profile-sidebar">
          <ul className="account-info">
            <li><h3>Account Profile</h3></li>
            <li><p>{this.state.donor.org_name}</p></li>
            <li><p>{this.state.donor.street_address}</p></li>
            <li><p>{this.state.donor.contact_name}</p></li>
            <li><p>{this.state.donor.phone}</p></li>
            <li><p>{this.currentUser.email}</p></li>
          </ul>
        </div>
        <div className="profile-body">
          <form className="profile-form">
            <h1>Hello, {this.state.donor.org_name}!</h1>
            <ul>
              <li>
                <label>Please provide the location of your donation</label>
                <input id="donation-location" type="text" ref="address" />
              </li>
              <li>
                <label>Instructions for pickup</label>
                <input id="donation-instructions" type="text" ref="instructions" />
              </li>
            </ul>
            <li>
              <button id="go-button" onClick={this.handleDonation}>Go!</button>
            </li>
          </form>
        </div>
      </div>
    )
  }
}
