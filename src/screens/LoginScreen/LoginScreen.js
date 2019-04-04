import React, { Component } from 'react';

import CardComponent from '../../components/CardComponent/CardComponent';

class LoginScreen extends Component {

  navigateToDashboard = () => {
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div className="centerContent">
        <CardComponent info="showContent">
          <input className="form-control mb-2"></input>
          <button className="btn btn-success" onClick={this.navigateToDashboard}>Login</button>
          <hr/>
        </CardComponent>
      </div>
    )
  }
}

export default LoginScreen;
