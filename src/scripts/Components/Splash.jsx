import React from 'react';
import Backbone from 'backbone';
import Router from '../router';
import $ from 'jquery';

import Navigation from './navigation';

class Splash extends React.Component {

    render() {
      return (
        <div className="splash">
          <div className="header">
            <Navigation />
          </div>
          <div className="logo">
            <h1>#waste<span id="not">not</span></h1>
          </div>
          <div className="arrow">
            <a href="#thumbnail"><img src="/images/menu_down_arrow.png" alt="down arrow" height="100px" /></a>
          </div>
          <div id="thumbnail" className="thumbnail-container">
            <a href="#registration">
              <div id="thumb-1" className="thumbnail">
                <p>Get involved?</p>
              </div>
            </a>
            <a href="#about">
              <div id="thumb-2" className="thumbnail">
                <p>This mission of #wastenot is to help redirect excess food to places that have food need.</p>
              </div>
            </a>
            <a href="http://www.feedingamerica.org/">
              <div id="thumb-3" className="thumbnail">
                <p>Hunger and Food Waste in America.</p>
              </div>
            </a>
          </div>
          <div className="supporters-title"><h1>Our Supporters</h1></div>
          <div className="supporters">
            <a id="TIY" href="http://theironyard.com/"><img src="../images/ironyard.png"/></a>
            <a id="SPACC" href="http://www.stpete.com//"><img src="../images/SPACC transparent.png" height="120px"/></a>
            <a id="greenhouse" href="http://stpetegreenhouse.org/"><img src="../images/greenhouse_logo1.png" height="120px"/></a>
          </div>
        </div>
      );
    }
  }

export default Splash;
