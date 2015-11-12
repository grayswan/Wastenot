import React from 'react';

const API_ROOT = 'http://wastenotio.herokuapp.com';

export default class SurveyFields extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleChange = (event) => {
    this.setState({
      userType: event.target.value
    });
  }

  renderOptions (type, name, value, index) {
    let isChecked = () => {
      if (type == 'radio') return value == this.props.fieldValues[name]

      if (type == 'checkbox') return this.props.fieldValues[name].indexOf(value) >= 0

      return false
    }.bind(this)

    return (
      <label key={index}>
        <input id="radio" onClick={this.handleChange} type={type} name={name} value={value} defaultChecked={isChecked()} />
        <span className="radio-button" >{value}</span>
      </label>
    )
  }

  userDetails = () => {
    switch (this.state.userType) {
    case 'Volunteer':
      return (
        <div>
            <h1 className="role-header">Volunteer</h1>
            <form className="drop-form">
              <ul className="role-info">
                <li>
                  <label>Name</label>
                  <input id="vol-name" type="text" ref="name" defaultValue={this.props.fieldValues.name} />
                </li>
                <li>
                  <label>Cell Phone</label>
                  <input id="vol-phone" type="tel" ref="phone" defaultValue={this.props.fieldValues.cell_phone} />
                </li>
                <li><label id="avail-title">Availability</label></li>
                <ul className="availability">
                  <li><p id="from" >From:</p></li>
                  <li><input id="from-input" type="time" ref="from" defaultValue={this.props.fieldValues.from} /></li>
                  <li><p id="to" >To:</p></li>
                  <li><input id="to-input" type="time" ref="to" defaultValue={this.props.fieldValues.to} /></li>
                </ul>
              </ul>
            </form>
          </div>
        )
        break;
      case 'Donor':
        return (
          <div>
            <h1 className="role-header">Donor</h1>
            <form className="drop-form">
              <input type="hidden" ref="to" />
              <input type="hidden" ref="from" />
              <ul className="role-info">
                <li>
                  <label>Organization/ Business Name</label>
                  <input id="donor-name" type="text" ref="name" defaultValue={this.props.fieldValues.name} />
                </li>
                <li>
                  <label>Address</label>
                  <input id="donor-address" type="text" ref="address" defaultValue={this.props.fieldValues.name} />
                </li>
                <li>
                  <label>Contact Name</label>
                  <input id="donor-contact" type="text" ref="contact_name" defaultValue={this.props.fieldValues.name} />
                </li>
                <li>
                  <label>Contact Phone</label>
                  <input id="donor-phone" type="text" ref="phone" defaultValue={this.props.fieldValues.name} />
                </li>
              </ul>
            </form>
          </div>
          )
        break;
      case 'Shelter':
        return (
          <div>
          <h1 className="role-header">Shelter</h1>
          <form className="drop-form">
            <input type="hidden" ref="to" />
            <input type="hidden" ref="from" />
            <ul className="role-info">
              <li>
                <label>Organization Name</label>
                <input id="shelter-name" type="text" ref="name" defaultValue={this.props.fieldValues.name} />
              </li>
              <li>
                <label>Address</label>
                <input id="donor-address" type="text" ref="address" defaultValue={this.props.fieldValues.name} />
              </li>
              <li>
                <label>Contact Name</label>
                <input id="donor-contact" type="text" ref="contact_name" defaultValue={this.props.fieldValues.name} />
              </li>
              <li>
                <label>Contact Phone</label>
                <input id="donor-phone" type="text" ref="phone" defaultValue={this.props.fieldValues.name} />
              </li>
            </ul>
          </form>
        </div>
      )
      break;
    default:
      return <h2></h2>;
    }
  }

  render () {
    return (
      <div className="container-step-2">
        <div className="step-2">
          <ul className= "form-fields-2">
            <li><h3>PLEASE SELECT YOUR ROLE</h3></li>
            <li>
              {['Donor', 'Volunteer', 'Shelter'].map(this.renderOptions.bind(this, 'radio', 'role'))}
            </li>
            <div className="drop-form-div">
              {this.userDetails()}
            </div>
            <li className="form-footer">
              <button id="surveyButton-1" onClick={this.props.previousStep}>Back</button>
              <button id="surveyButton-2" onClick={this.nextStep}>Save &amp; Continue</button>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  nextStep = () => {
    let role = document.querySelector('input:checked');
    let data = {
      role           : role.value,
      name           : this.refs.name.value,
      address        : this.refs.address.value,
      phone          : this.refs.phone.value,
      contact_name   : this.refs.contact_name.value,
      from           : this.refs.from.value,
      to             : this.refs.to.value
    }

    this.props.saveValues(data);
    this.props.nextStep();
  }
}
