import React from 'react';
import Backbone from 'backbone';

import Setup from './Setup';
import SurveyFields from './SurveyFields';
import Confirmation from './Confirmation';
import Success from './Success';


var fieldValues = {
  email                        : null,
  password                     : null,
  password_confirmation        : null,
  name                         : null,
  address                      : null,
  cell_phone                   : null,
  from                         : null,
  to                           : null
};

export default class Registration extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      step: 1
    }
  }

  saveValues (fields) {
    return function() {
      fieldValues = Object.assign({}, fieldValues, fields)
    }()
  }

  nextStep = () => {
    this.setState({
      step : this.state.step + 1
    })
  }

  previousStep = () => {
    this.setState({
      step : this.state.step - 1
    })
  }

  submitRegistration = (event) => {

    fetch ('http://wastenotio.herokuapp.com/users/transporters', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email                : fieldValues.email,
        password             : fieldValues.password,
        password_confirmation: fieldValues.password_confirmation,
        name                 : fieldValues.name,
        address              : fieldValues.address,
        cell_phone           : fieldValues.phone,
        from                 : fieldValues.from,
        to                   : fieldValues.to,
        org_name             : fieldValues.org_name
      })
    }).then(() => {
      this.nextStep();
    }).catch(function(ex) {
      console.log('failed', ex);
    })
  }

  showStep () {
    switch (this.state.step) {
      case  1:
        return <Setup         fieldValues={fieldValues}
                              nextStep={this.nextStep}
                              saveValues={this.saveValues} />
      case 2:
        return <SurveyFields  fieldValues={fieldValues}
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              saveValues={this.saveValues} />
      case 3:
        return <Confirmation  fieldValues={fieldValues}
                              previousStep={this.previousStep}
                              submitRegistration={this.submitRegistration} />
      case 4:
        return <Success       fieldValues={fieldValues} />
    }
  }

    render () {
      return(
        <main>
          <div className="registrationHeader">
            <ul className="registrationNav">
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#">Home</a></li>
            </ul>
          </div>
          <div>
            {this.showStep()}
          </div>
        </main>

      )
    }
};
