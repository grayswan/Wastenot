import React from 'react';

const API_ROOT = 'http://wastenotio.herokuapp.com';

export default class Setup extends React.Component {

  handleSetup = (event) => {
    fetch(API_ROOT + '/users', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        email: 'email',
        password: 'password',
        password_confirmation: 'password_confirmation',

      })
    }).then(() => {
      this.nextStep(event);
    }).catch(function(ex) {
      console.log('failed', ex);
    });
  }

  render () {
    return (
      <div className="container-step-1">
        <form className="step-1">
          <ul className="form-fields-1">
            <li><h3>CREATE AN ACCOUNT</h3></li>
            <li>
              <label>Email Address</label>
              <input id="email" type="email" ref="email" defaultValue={this.props.fieldValues.email} />
            </li>
            <li>
              <label>Create Password</label>
              <input className="password" type="password" ref="password" defaultValue={this.props.fieldValues.password} />
            </li>
            <li>
              <label>Confirm Password</label>
              <input className="password" type="password" ref="password_confirmation" defaultValue={this.props.fieldValues.password_confirmation} />
            </li>
            <li>
              <button id="setUpButton" onClick={this.handleSetup}>Save and Continue</button>
            </li>
          </ul>
        </form>
      </div>
    )
  }

  nextStep (e) {

    let data = {
      email        : this.refs.email.value,
      password     : this.refs.password.value,
      confirm      : this.refs.password_confirmation.value
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
};
