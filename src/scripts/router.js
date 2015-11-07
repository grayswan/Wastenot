import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

class Router extends Backbone.Router {
  get routes() {
    return {
      '': 'index',
      'registration': 'registration',
      'about': 'about',
      'thumbnail': 'thumbnail'
    }
  }

  index() {
    this.current = 'index';
  }

  registration() {
    this.current = 'registration';
  }

  about() {
    this.current = 'about';
  }

  thumbnail() {
    this.current = 'thumbnail';
  }

  initialize() {
    Backbone.history.start();
  }
};

export default Router;
