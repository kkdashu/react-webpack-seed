import './users.scss';
import React from 'react';
import UserItem from '../user_item/user_item';
import Users from '../../models/users';
import { Link } from 'react-router';
export default class UsersComponent extends React.Component {
  render() {
    return (
     <div>
      <div className="user-add">
        <Link to='/users/add'>增加user</Link>
      </div>
      <ul className="users-list">
        {Users.getAll().map(user =>(
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
