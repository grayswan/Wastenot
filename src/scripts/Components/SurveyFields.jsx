import React from 'react';

var SurveyFields = React.createClass({

  renderOptions: function(type, name, value, index) {
    var isChecked = function() {
      if (type == 'radio') return value == this.props.fieldValues[name]

      if (type == 'checkbox') return this.props.fieldValues[name].indexOf(value) >= 0

      return false
    }.bind(this)

    return (
      <label key={index}>
        <input type={type} name={name} value={value} defaultChecked={isChecked()} /> {value}
      </label>
    )
  },

  render: function() {
    return (
      <div>
        <h2>Please indicate your role</h2>
        <ul className= "form-fields">
          <li className= "radio">
            {['Donor', 'Volunteer', 'Shelter'].map(this.renderOptions.bind(this, 'radio', 'role'))}
          </li>
          <li className="form-footer">
            <button onClick={this.props.previousStep}>Back</button>
            <button onClick={this.nextStep}>Save &amp; Continue</button>
          </li>
        </ul>
      </div>
    )
  },

  nextStep: function() {
    var role = document.querySelector('input[name="role"]:checked')
    var data = {
      role : role.value
    }

    this.props.saveValues(data);
    this.props.nextStep();
  }
})

module.exports = SurveyFields
