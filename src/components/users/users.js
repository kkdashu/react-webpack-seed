import './users.scss';
import React from 'react';
import UserItem from '../user_item/user_item';
import users from '../../models/users';
import { Link } from 'react-router';
export default class Users extends React.Component {
  fetUsers() {
    if(!this.ignoreLastFetch) {
      this.setState({
        users: users
      });
    }
  }
  render() {
    return (
     <div>
      <div className="user-add">
        <Link to='/users/add'>增加user</Link>
      </div>
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
