import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Funktion som tar emot två props (color och userName). Returnerar (genom map-metoden) ett li-element för varje userName som tas emot. Beroende på om color är true eller false får li-elementet antingen en blå-ish eller grön-ish färg.
function UserComponent(props) {

  let color = props.color;
  const trueColor = '#000099';
  const falseColor = '#009933';
  let userState = props.userStates;

  let activeUsers = props.user.filter((users) => {
    return  users.isActive ? users : null;
  });

  let inActiveUsers = props.user.filter((users) => {
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
  user: PropTypes.array,
  name: PropTypes.string,
  color: PropTypes.bool,
  userStates: PropTypes.bool,
}
