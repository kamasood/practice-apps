import React from 'react';

class Billing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      credit_card: this.props.user.credit_card || '',
      expiration: this.props.user.expiration || '',
      cvv: this.props.user.cvv || '',
      billing_zip: this.props.user.billing_zip || ''
    };

    this.onChangeCC = this.onChangeCC.bind(this);
    this.onChangeExp = this.onChangeExp.bind(this);
    this.onChangeCVV = this.onChangeCVV.bind(this);
    this.onChangeBillingZip = this.onChangeBillingZip.bind(this);
  }

  onChangeCC(e) {
    this.setState({
      credit_card: e.target.value
    });
  }

  onChangeExp(e) {
    this.setState({
      expiration: e.target.value
    });
  }

  onChangeCVV(e) {
    this.setState({
      cvv: e.target.value
    });
  }

  onChangeBillingZip(e) {
    this.setState({
      billing_zip: e.target.value
    });
  }

  render() {
    return(
      <div>
        <input type="text" placeholder="Credit Card" onChange={this.onChangeCC} value={this.state.credit_card}></input>
        <input type="text" placeholder="Expiration" onChange={this.onChangeExp} value={this.state.expiration}></input>
        <input type="text" placeholder="CVV" onChange={this.onChangeCVV} value={this.state.cvv}></input>
        <input type="text" placeholder="Billing Zip Code" onChange={this.onChangeBillingZip} value={this.state.billing_zip}></input>
        <button onClick={() => this.props.handleClick(this.state)}>Next</button>
      </div>
    );
  }
};

export default Billing;