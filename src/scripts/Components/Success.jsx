import React from 'react';

var Success = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Successfully Registered!</h1>
        <h2>Please check your email <b>{this.props.fieldValues.email}</b> for a confirmation link to activate your account.</h2>
      </div>
    )
  }
});

module.exports = Success;
