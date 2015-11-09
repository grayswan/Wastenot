import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

class Router extends Backbone.Router {
  get routes() {
    return {
      '': 'index',
      'registration': 'registration',
      'about': 'about',
      'thumbnail': 'thumbnail',
      'profile': 'profile',
      'contact': 'contact'
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

  profile() {
    this.current = 'profile';
  }

  contact() {
    this.current = 'contact';
  }

  initialize() {
    Backbone.history.start();
  }
};

export default Router;
