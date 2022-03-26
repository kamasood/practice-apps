import React from 'react';
import axios from 'axios';
import Home from './Home.jsx';
import User from './User.jsx';
import Shipping from './Shipping.jsx';
import Billing from './Billing.jsx';
import Summary from './Summary.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      currentForm: 'home'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  fetchUserData() {
    return axios.get('http://localhost:3000/checkout')
      .catch(err => console.error(err));
  }

  handleClick(user_data) {
    const pages = ['home', 'user', 'shipping', 'billing', 'summary', 'home'];
    let nextPage = pages[pages.indexOf(this.state.currentForm) + 1];

    axios.post('http://localhost:3000/checkout', user_data)
      .then(() => {
        return this.fetchUserData();
      })
      .then(({data}) => {
        this.setState({
          currentForm: nextPage,
          user: data
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    let page;
    switch (this.state.currentForm) {
      case 'home':
        return page = <Home handleClick={this.handleClick} />;
      case 'user':
        return page = <User user={this.state.user} handleClick={this.handleClick}/>;
      case 'shipping':
        return page = <Shipping user={this.state.user} handleClick={this.handleClick}/>;
      case 'billing':
        return page = <Billing user={this.state.user} handleClick={this.handleClick}/>;
      case 'summary':
        return page = <Summary user={this.state.user} handleClick={this.handleClick}/>;
      default:
        return page = <Home handleClick={this.handleClick}/>;
    }

    return (
      <div>
        {page}
      </div>
    );
  }

}

export default App;