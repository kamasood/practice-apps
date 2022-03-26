import React from 'react';

class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name || '',
      email: this.props.user.email || '',
      password: this.props.user.password || ''
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Name" onChange={this.onChangeName} value={this.state.name}></input>
        <input type="text" placeholder="Email" onChange={this.onChangeEmail} value={this.state.email}></input>
        <input type="text" placeholder="Password" onChange={this.onChangePassword} value={this.state.password}></input>
        <button onClick={() => this.props.handleClick(this.state)}>Next</button>
      </div>
    );
  }

};

export default User;