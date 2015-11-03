import React from 'react';
import Backbone from 'backbone';

import AccountFields from './AccountFields';
import Confirmation from './Confirmation';
import Success from './Success';

var SurveyFields = require('./SurveyFields')

var fieldValues = {
  name       : null,
  address    : null,
  phone      : null,
  email      : null,
  password   : null,
  role       : null
};

var Registration = React.createClass ({
  getInitialState: function() {
    return {
      step : 1
    }
  },

  saveValues: function(fields) {
    return function() {
      fieldValues = Object.assign({}, fieldValues, fields)
    }()
  },

  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },

  previousStep: function() {
    this.setState({
      step : this.state.step - 1
    })
  },

  submitRegistration: function() {
    // // SOMETHING like this...
    // fetch(API_ROOT + 'http://wastenotio.herokuapp.com/users/transporters', {
    //   method: 'post',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     user_name: fieldValues.name,
    //     // ...
    //   }).then(() => {
    //     this.nextStep();
    //   }).catch(function(ex) {
    //     console.log('failed', ex);
    //   }
    // })

    // Handle via ajax submitting the user data, upon
    // success return this.nextStop(). If it fails,
    // show the user the error but don't advance

    this.nextStep()
    },

  showStep: function() {
    switch (this.state.step) {
      case 1:
        return <AccountFields fieldValues={fieldValues}
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
        return <Success fieldValues={fieldValues} />
    }
  },

  render: function() {
    var style = {
      width : (this.state.step / 4 * 100) + '%'
    }

    return (
      <main>
        <span className="progress-step"> Step {this.state.step}</span>
        <progress className="progress" style={style}></progress>
        {this.showStep()}
      </main>
    )
   }
});

module.exports = Registration
