import React from 'react';
import Backbone from 'backbone';
import Navigation from './Navigation';

export default class About extends React.Component {
  render () {
    return (
      <div className="aboutContainer">
        <div className="header">
          <Navigation />
        </div>
        <div className="About">
          <div className="aboutContent">
          <h2>WHAT WE DO</h2>
            <p>Our mission is to create a system where a team of volunteers transports edible, leftover food from catered events, restaurants, and grocery stores to oraganizations that feed the needy.<br /><br />
               "Americans are throwing out the equivalent of $165 billion (of food) each year and it is estimated that annually more than 6 billion pounds of fresh produce goes unharvested or unsold. <a href="http://bit.ly/1hIZx2z"> -Natural Resources Defense Council</a>
               <br /><br />"Forty to 50 percent of food waste comes from consumers, and 50 to 60 percent from businesses."<a href="http://fxn.ws/14LyeOo"> -Environmental Protection Agency</a> "Over 97% of food waste generated ends up in the landfill; (It) breaks down anaerobically and produces methane, which is 21 times more potent than CO2 as a greenhouse gas."
               <a href="http://fxn.ws/14LyeOo"> -Environmental Protection Agency</a><br /><br />"48.1 million Americans lived in food insecure households, including 32.8 million adults and 15.3 million children. <a href="http://1.usa.gov/1Ni4qeq"> -USDA Economic Research Service</a> <br /> … and those statistics don't even include the homeless.</p>
               <p>Our mission is to put a dent not only in hunger but in food waste and landfill pollution. We endeavor to enlist caring, like-minded individuals to participate in this project. Whether you are a restaurant, caterer, cateree, grocer, shelter, soup kitchen, volunteer courier, or just have some general feedback about how we can make this project better,
               in the end, it is you that makes this project endure. Our hats off to you!</p>
             <h2>WHO WE ARE</h2>
             <p>#wastenot was created by Michael Reed and Kristen Swan-Grashel for their final project at the Iron Yard, St. Petersburg. Both Michael and Kristen wanted to use the skills they gained at the Iron Yard to create something meaningful. After hearing Michael's great idea, Kristen decided to join forces and create the front-end portion of the site, while Michael built the backend API.
             We are currently working to put #wastenot into action.</p>
          </div>
        </div>
      </div>
    )
  }
}
