import React from 'react';

var Confirmation = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Confirm Account Details</h2>
        <ul>
          <li><b>Name:</b> {this.props.fieldValues.name}</li>
          <li><b>Address:</b> {this.props.fieldValues.address}</li>
          <li><b>Phone:</b> {this.props.fieldValues.phone}</li>
          <li><b>Email:</b> {this.props.fieldValues.email}</li>
          <li><b>Password:</b> {this.props.fieldValues.password}</li>
          <li><b>Role:</b> {this.props.fieldValues.role}</li>
        </ul>
        <ul>
          <li>
            <button onClick={this.props.previousStep}>Back</button>
            <button onClick={this.props.submitRegistration}> Submit Registration</button>
          </li>
        </ul>
      </div>
    )
  }
});

module.exports = Confirmation
