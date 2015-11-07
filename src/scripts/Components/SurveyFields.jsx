import React from 'react';

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
    var isChecked = function() {
      if (type == 'radio') return value == this.props.fieldValues[name]

      if (type == 'checkbox') return this.props.fieldValues[name].indexOf(value) >= 0

      return false
    }.bind(this)

    return (
      <label key={index}>
        <input onClick={this.handleChange} type={type} name={name} value={value} defaultChecked={isChecked()} /> {value}
      </label>
    )
  }

  userDetails = () => {
    switch (this.state.userType) {
    case 'Volunteer':
      return (
        <div>
          <h3>Volunteer</h3>
          <form className="drop-form">
            <ul className="role-info">
              <li>
                <label>Name</label>
                <input id="vol-name" type="text" ref="name" defaultValue={this.props.fieldValues.name} />
              </li>
              <li>
                <label>Cell Phone</label>
                <input id="vol-phone" type="tel" ref="cell_phone" defaultValue={this.props.fieldValues.cell_phone} />
              </li>
              <ul className="availability">
                <li><label id="avail-title">Availability</label></li>
                <li><p id="from" >From:</p></li>
                <li><input type="time" ref="from" defaultValue={this.props.fieldValues.from} /></li>
                <li><p id="to" >To:</p></li>
                <li><input type="time" ref="to" defaultValue={this.props.fieldValues.to} /></li>
              </ul>
            </ul>
          </form>
        </div>
      )
      break;
    case 'Donor':
      return <h2>Donor</h2>;
      break;
    case 'Shelter':
      return <h2>Shelter</h2>;
      break;
    default:
      return <h2></h2>;
    }
  }

  render () {
    return (
      <div className="container-step-2">
        <div className="step-2">
          <h1>Please select your role</h1>
          <ul className= "form-fields-2">
            <li className= "radio">
              {['Donor', 'Volunteer', 'Shelter'].map(this.renderOptions.bind(this, 'radio', 'role'))}
            </li>
            <div>
              {this.userDetails()}
            </div>
            <li className="form-footer">
              <button id="surveyButton-1" onClick={this.props.previousStep}>Back</button>
              <button id="surveyButton-2" onClick={this.nextStep}>Save &amp; Continue</button>
            </li>
          </ul>
        </div>
        <div className="surveyFieldImage"></div>
      </div>
    )
  }

  nextStep = () => {
    let role = document.querySelector('input:checked')
    let data = {
      role           : this.refs.name.value,
      name           : this.refs.name.value,
      cell_phone     : this.refs.name.value,
      from           : this.refs.name.value,
      to             : this.refs.name.value
    }

    this.props.saveValues(data);
    this.props.nextStep();
  }
}
