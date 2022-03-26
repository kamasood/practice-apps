import React from 'react'
import Home from './Home.jsx';
import User from './User.jsx';
import Shipping from './Shipping.jsx';
import Billing from './Billing.jsx';
import Summary from './Summary.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      session_id: null, // do we even need this?
      userInfo: null,
      currentForm: 'home'
    };
  }



  render() {
    let page;
    switch (this.state.currentForm) {
      case 'home':
        page = <Home />;
        break;
      case 'user':
        page = <User />;
        break;
      case 'shipping':
        page = <Shipping />;
        break;
      case 'billing':
        page = <Billing />;
        break;
      case 'summary':
        page = <Summary />;
        break;
      default:
        page = <Home />;
    }

    return (
      <div>
        {page}
      </div>
    );
  }

}

export default App;