import React, { Component } from 'react';

import CardComponent from '../CardComponent/CardComponent';
import UserComponent from '../UserComponent/UserComponent';
import styles from './dashboardStyle.module.css';

//Komponent som hanterar fyra states, users, userStates, color och userToConcat. userName och color passas till UserComponent. userToConcat hanterar input-fältet. Komponenten renderar CardComponent och UserComponent.
class DashboardComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: true,
      userToConcat: [''],
      userStates: true,
      users: [{
        id: 1,
        name: 'Tord',
        isActive: true,
      }, {
        id: 2,
        name: 'Sören',
        isActive: true,
      }, {
        id: 3,
        name: 'Leif',
        isActive: false,
      }, {
        id: 4,
        name: 'Fredrika',
        isActive: true,
      }, {
        id: 5,
        name: 'Janne',
        isActive: false,
      }
    ]
    }
  }

  //Togglar color mellan true och false, som sedan passas ner till UserComponent och hanteras.
  toggleColorFunc = () => {
    this.setState(prevState =>  ({
      color: !prevState.color,
    }));
  }

  //Metod för att lägga till users. Först skapar jag ett objekt där jag tilldelar ett unikt id, namnet från inputfältet och isActive till true. Sedan concatar jag objektet (userToAdd) med mitt state.users
  addUser = (user) => {
    let userToAdd = {
        id: this.state.users.length + 1,
        name: user,
        isActive: true,
      };

    let concatUser = this.state.users.concat(userToAdd);
    this.setState(prevState => ({
      users: concatUser,
    }));
  }

  //Tar bort sista värdet i users med hjälp av slice-metoden.
  removeUser = () => {
    let userToRemove = this.state.users.slice(0, -1);
    this.setState( {
      users: userToRemove
    });
  }

  //Hanterar inputfältet som sätter värdet i userToConcat.
  handleChange = (event) => {
    this.setState({
      userToConcat: event.target.value,
    });
  }

  //Metod för att antingen visa aktiva eller inaktiva users.
  toggleActiveInactiveUsers = () => {
    this.setState(prevState =>  ({
      userStates: !prevState.userStates,
    }));
  }

  render() {
    return(
      <div className={styles.wrapper}>
        <div className={styles.dashboard}>
          <CardComponent>
            <button
              className={this.state.userStates ? `btn btn-secondary mb-2` : `btn btn-primary mb-2`}
              style={{width: '100%'}}
              onClick={this.toggleActiveInactiveUsers}
            >Show {this.state.userStates ? 'Inactive' : 'Active'} Users</button>
            <UserComponent
              color={this.state.color}
              users={this.state.users}
              userStates={this.state.userStates}/>
            <button
              style={{width: '100%'}}
              className="btn btn-info"
              onClick={this.toggleColorFunc}
            >Toggle Colors</button>
          </CardComponent>

          <CardComponent styling={styles.manageUserWrapper}>
            <div className={styles.buttonWrapper}>
              <input
                type="text"
                value={this.state.userToConcat}
                onChange={this.handleChange}
                className="form-control mb-2"
              placeholder="New User">
              </input>

              <button
                className="btn btn-success mb-2"
                onClick={() => this.addUser(this.state.userToConcat)}
              >Add User</button>
              <button
                className="btn btn-danger"
                onClick={() => this.removeUser()}
              >Remove User</button>
            </div>
          </CardComponent>
        </div>
      </div>
    )
  }
}

export default DashboardComponent;
