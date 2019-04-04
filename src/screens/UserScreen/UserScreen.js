import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import styles from './userWrapperStyle.module.css';
import CardComponent from '../../components/CardComponent/CardComponent';


class UserScreen extends Component {
  render() {
    const {match} = this.props;

    if (!match.params.id) {
      return(
        <Redirect from="/user" to="/" />
      )
    }
    return (
      <div className="centerContent">
        <CardComponent>
          <div className={styles.userWrapper}>
            <i className="fas fa-user fa-6x"></i>
            <p>User: {match.params.id}</p>
          </div>
        </CardComponent>
      </div>
    )
  }
}

export default UserScreen;
