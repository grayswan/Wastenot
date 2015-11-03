// window.$ = window.jQuery = require('jquery');

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';

import App from './Components/App';

window.onload = function() {
  console.log('hello');

  let router = new Router();

  ReactDOM.render(
    <App router={router} />,
    document.getElementById('app')
  );
};
