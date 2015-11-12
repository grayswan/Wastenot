import React from 'react';
import Backbone from 'backbone';
import Router from '../router';
import $ from 'jquery';

import Navigation from './navigation';

class Splash extends React.Component {

    render() {
      return (
        <div className="splash">
          <div className="splash-image">
            <div className="header">
              <Navigation />
            </div>
            <div className="logo">
              <h1>#waste<span id="not">not</span></h1>
            </div>
            <div id="arrow">
              <a href="#thumbnail"><img src="/images/menu_down_arrow.png" alt="down arrow" height="100px" /></a>
            </div>
          </div>
          <div id="thumbnail" className="thumbnail-container">
            <a href="#registration">
              <div id="thumb-1" className="thumbnail">
                <div className="thumb-text"><p>Get Involved</p></div>
              </div>
            </a>
            <a href="#about">
              <div id="thumb-2" className="thumbnail">
                <div className="thumb-text"><p>Our Mission</p></div>
              </div>
            </a>
            <a href="http://www.feedingamerica.org/">
              <div id="thumb-3" className="thumbnail">
                <div className="thumb-text"><p>Learn More</p></div>
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
