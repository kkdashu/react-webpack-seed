import './users.scss';
import React from 'react';
import UserItem from '../user_item/user_item';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { asyncAddUser } from 'actions/user_action';

class UsersComponent extends React.Component {
  onAddUser (user) {
    this.props.dispatch(asyncAddUser(user));
  }
  render() {
    const users = this.props.data;
    return (
     <div>
      <div className="user-add">
        <Link onAddUser={ this.onAddUser.bind(this) } to='/users/add'>增加user</Link>
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

function select(state) {
  return {
    data: state
  };
}

export default connect(select)(UsersComponent);
