import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


//Funktion som tar emot tre props; color, userStates och users. Returnerar (genom map-metoden) ett li-element för varje users som tas emot. Beroende på om color är true eller false får li-elementet antingen en blå-ish eller grön-ish färg. Beroende på om userState är true elr false renderas två olika listor, en med 'true' users eller en med 'false' users.

function UserComponent(props) {
  let color = props.color;
  const trueColor = '#000099';
  const falseColor = '#009933';
  let userState = props.userStates;

  //Filtrear ut min aktiva och inaktiva users med hjälp av filter. Hade även kunnat göra detta i DashboardComponent och skickat med två olika listor med users.
  let activeUsers = props.users.filter((users) => {
    return  users.isActive ? users : null;
  });

  let inActiveUsers = props.users.filter((users) => {
    return  users.isActive ? null : users;
  });

    return (
      <div>
        <ul style={{padding: 0}}>
          {userState ? activeUsers.map((user, i) =>
            <Link
              to={`/user/${activeUsers[i].name}`}
              key={i}
              className="list-group-item"
              style={{color: color ? trueColor : falseColor}}>
              {user.id}
              {`. `}
              {user.name}
              <p>user is: {activeUsers[i].isActive ? 'Active' : 'Inactive'}</p>
            </Link>

          ) : inActiveUsers.map((user, i) =>
            <Link
              to={`/user/${inActiveUsers[i].name}`}
              key={i}
              className="list-group-item"
              style={{color: color ? trueColor : falseColor}}>
              {user.id}
              {`. `}
              {user.name}
              <p>user is: {inActiveUsers[i].isActive ? 'Active' : 'Inactive'}</p>
            </Link>
          )}
        </ul>
      </div>
    )
}

export default UserComponent;

UserComponent.propTypes = {
  users: PropTypes.array,
  name: PropTypes.string,
  id: PropTypes.number,
  isActive: PropTypes.bool,
  color: PropTypes.bool,
  userStates: PropTypes.bool,
}
