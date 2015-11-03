import React from 'react';

var AccountFields = React.createClass ({
  render: function() {
    return (
      <div>
        <h2>Account Details</h2>
        <ul className="form-fields">
          <li>
            <label>Name</label>
            <input type="text" ref="name" defaultValue={this.props.fieldValues.name} />
          </li>
          <li>
            <label>Address</label>
            <input type="text" ref="address" defaultValue={this.props.fieldValues.address} />
          </li>
          <li>
            <label>Phone</label>
            <input type="phone" ref="phone" defaultValue={this.props.fieldValues.phone} />
          </li>
          <li>
            <label>Email</label>
            <input type="email" ref="email" defaultValue={this.props.fieldValues.email} />
          </li>
          <li>
            <label>Password</label>
            <input type="text" ref="password" defaultValue={this.props.fieldValues.password} />
          </li>
          <li>
            <button onClick={this.nextStep}>Save and Continue</button>
          </li>
        </ul>
      </div>
    )
  },

  nextStep: function(e) {
    e.preventDefault()

    var data = {
      name      : this.refs.name.value,
      address   : this.refs.address.value,
      phone     : this.refs.phone.value,
      email     : this.refs.email.value,
      password  : this.refs.password.value
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

module.exports = AccountFields
