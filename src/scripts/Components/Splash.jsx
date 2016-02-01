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
          <div className="splash-image">
            <div id="arrow">
              <a href="#thumbnail"><img src="/images/arrow.png" alt="down arrow" height="100px" /></a>
            </div>
          </div>
          <div id="thumbnail" className="thumbnail-container">
            <div id="thumb-1" className="thumbnail">
              <a href="#registration">
                <div className="thumb-text">
                  <h2>GET INVOLVED</h2>
                  <p>Join us in fighting hunger and food waste. Whether you are a business or a volunteer willing to help. We need you!</p>
                </div>
              </a>
            </div>
            <div id="thumb-2" className="thumbnail">
              <a href="#about">
                <div className="thumb-text">
                  <h2>OUR MISSION</h2>
                  <p>Our mission is to put a dent in hunger, food waste, and landfill pollution by connecting businesses with those providing food for the needy.</p>
                </div>
              </a>
            </div>

            <div id="thumb-3" className="thumbnail">
              <a href="http://www.feedingamerica.org/">
                <div className="thumb-text">
                  <h2>LEARN MORE</h2>
                  <p>Hunger and food insecurity affects people in the U.S. of all ages.
                    The productivity of our country would greatly improve if we addressed this root issue.</p>
                </div>
              </a>
            </div>
          </div>
          <div className="supporters-title"><h1>OUR SUPPORTERS</h1></div>
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
