import React from 'react';
import $ from 'jquery';
import Splash from './Splash';
import AccountFields from './AccountFields';
import Confirmation from './Confirmation';
import Registration from './Registration';
import Success from './Success';
import SurveyFields from './SurveyFields';
import About from './About';
import Profile from './Profile';
import Contact from './Contact';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // currentUser: User.current(),
      currentRoute: props.router.current
    }
  }

  componentWillMount() {
    this.props
      .router
      .on('route', this.onRoute);
  }

  componentWillUnmount() {
    this.props
      .router
      .off('route', this.onRoute);
  }

  onRoute = () => {
    this.setState({
      // currentUser: User.current(),
      currentRoute: this.props.router.current
    });
  }

  render() {
    let currentView;

    switch (this.state.currentRoute) {
      case 'registration' :
        currentView = <Registration />;
        break;
      case 'about' :
        currentView = <About />;
        break;
      case 'profile' :
        currentView = <Profile />;
        break;
      case 'contact' :
        currentView = <Contact />;
        break;
      default :
        currentView = <Splash />;
    }

    return (
      <div>
        {currentView}
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
