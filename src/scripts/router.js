import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

class Router extends Backbone.Router {
  get routes() {
    return {
      '': 'index',
      'registration': 'registration',
    }
  }

  index() {
    this.current = 'index';
  }

  registration() {
    this.current = 'registration';
  }

  initialize() {
    Backbone.history.start();
    console.log("Houston");
  }
};

export default Router;
