import React from 'react';

var Confirmation = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <h2>Confirm Account Details</h2>
          <ul>
            <li><b>Email:</b> {this.props.fieldValues.name}</li>
            <li><b>Address:</b> {this.props.fieldValues.address}</li>
            <li><b>Phone:</b> {this.props.fieldValues.phone}</li>
            <li><b>Role:</b> {this.props.fieldValues.role}</li>
            <li><b>From:</b> {this.props.fieldValues.from}</li>
            <li><b>To:</b> {this.props.fieldValues.to}</li>
          </ul>
          <ul>
            <li>
              <button onClick={this.props.previousStep}>Back</button>
              <button onClick={this.props.submitRegistration}> Submit Registration</button>
            </li>
          </ul>
        </div>
        <div className="confirmationImage"></div>
      </div>
   )
 }
});

module.exports = Confirmation
