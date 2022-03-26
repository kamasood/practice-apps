import React from 'react';

class Shipping extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      address_one: this.props.user.address_one || '',
      address_two: this.props.user.address_two || '',
      city: this.props.user.city || '',
      state: this.props.user.state || '',
      zipcode: this.props.user.zipcode || '',
      phone: this.props.user.phone || ''
    };
    this.onChangeAddressOne = this.onChangeAddressOne.bind(this);
    this.onChangeAddressTwo = this.onChangeAddressTwo.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeZip = this.onChangeZip.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
  }

  onChangeAddressOne(e) {
    this.setState({
      address_one: e.target.value
    });
  }

  onChangeAddressTwo(e) {
    this.setState({
      address_two: e.target.value
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  onChangeState(e) {
    this.setState({
      state: e.target.value
    });
  }

  onChangeZip(e) {
    this.setState({
      zipcode: e.target.value
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  render() {
    return(
      <div>
        <input type="text" placeholder="Address Line 1" onChange={this.onChangeAddressOne} value={this.state.address_one}></input>
        <input type="text" placeholder="Address Line 2" onChange={this.onChangeAddressTwo} value={this.state.address_two}></input>
        <input type="text" placeholder="City" onChange={this.onChangeCity} value={this.state.city}></input>
        <input type="text" placeholder="State" onChange={this.onChangeState} value={this.state.state}></input>
        <input type="text" placeholder="Zip Code" onChange={this.onChangeZip} value={this.state.zipcode}></input>
        <input type="text" placeholder="Phone Number" onChange={this.onChangePhone} value={this.state.phone}></input>
        <button onClick={() => this.props.handleClick(this.state)}>Next</button>
      </div>
    );
  }
};

export default Shipping;