import './users.scss';
import React from 'react';
import UserItem from '../user_item/user_item';
import users from '../../models/users';
export default class Users extends React.Component {
  render() {
    return (
     <div>
      <ul className="users-list">
        {users.map(user =>(
          <UserItem user={user} />
        ))}
      </ul>
      <div className="user-detail">
        {this.props.children}
      </div>
     </div>
    );
  }
}
