import React from 'react';

var Confirmation = React.createClass({
  render: function() {
    return (
      <div className="container-step-3">
        <form className="step-3">
          <ul className="form-fields-3">
            <li><h3>CONFIRM ACCOUNT DETAILS</h3></li>
            <li><b>Role:</b> {this.props.fieldValues.role}</li>
            <li><b>Name:</b> {this.props.fieldValues.name}</li>
            <li><b>Address:</b> {this.props.fieldValues.address}</li>
            <li><b>Contact Name:</b> {this.props.fieldValues.contact_name}</li>
            <li><b>Phone:</b> {this.props.fieldValues.phone}</li>
            <li><b>Email:</b> {this.props.fieldValues.email}</li>
            <ul id="confirmButtons">
              <li><button id="confirmButton-1" onClick={this.props.previousStep}>Back</button></li>
              <li><button id="confirmButton-2" onClick={this.props.submitRegistration}> Submit Registration</button></li>
            </ul>
          </ul>
        </form>
      </div>
   )
 }
});

module.exports = Confirmation
