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
          <h1>What We Do</h1>
            <p>We believe that what we do is more important than who we are./n
            We endeavor to enlist caring, like-minded individuals to participate in this project.
            Whether you are a restaurant, grocer, shelter, soup kitchen, volunteer courier, or just
            have some general feedback about how we can make this project better, in the end, it is you
            that makes this project endure. Our hats off to you!</p>
            <h1>What We Do</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    )
  }
}
