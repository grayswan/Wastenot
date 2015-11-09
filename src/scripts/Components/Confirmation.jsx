import React from 'react';

var Confirmation = React.createClass({
  render: function() {
    return (
      <div className="container-step-3">
        <form className="step-3">
          <ul className="form-fields-3">
            <li><h3>CONFIRM ACCOUNT DETAILS</h3></li>
            <li><b>Email:</b> {this.props.fieldValues.name}</li>
            <li><b>Address:</b> {this.props.fieldValues.address}</li>
            <li><b>Phone:</b> {this.props.fieldValues.phone}</li>
            <li><b>Role:</b> {this.props.fieldValues.role}</li>
            <li><b>From:</b> {this.props.fieldValues.from}</li>
            <li><b>To:</b> {this.props.fieldValues.to}</li>
            <li><button id="surveyButton-1-conf" onClick={this.props.previousStep}>Back</button></li>
            <li><button id="surveyButton-2-conf" onClick={this.props.submitRegistration}> Submit Registration</button></li>
          </ul>
        </form>
      </div>
   )
 }
});

module.exports = Confirmation
