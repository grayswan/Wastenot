import React from 'react';

export default class AccountFields extends React.Component {
  render () {
    return (
      <div className="container-step-3">
        <div className="step-3">
          <h1>Account Details</h1>
          <ul className="form-fields-3">
            <li>
              <label>Name or Organization</label>
              <input type="text" ref="name" defaultValue={this.props.fieldValues.name} />
            </li>
            <li>
              <label>Address</label>
              <input type="address" ref="address" defaultValue={this.props.fieldValues.address} />
            </li>
            <li>
              <label>Phone</label>
              <input type="phone" ref="phone" defaultValue={this.props.fieldValues.phone} />
            </li>
            <li>
              <button onClick={this.nextStep}>Save and Continue</button>
            </li>
          </ul>
        </div>
        <div>
        </div>
      </div>
    )
  }

  nextStep (e) {
    // e.preventDefault()

    let data = {
      name      : this.refs.name.value,
      address   : this.refs.address.value,
      phone     : this.refs.phone.value
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
}
