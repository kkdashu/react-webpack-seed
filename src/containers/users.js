// import './users.scss';
import React, { Component } from 'react';
// import UserItem from 'components/user_item/user_item';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchUsers } from 'actions/user_action';
class Users extends Component {
  render () {
    let userList = null,
      { users, dispatch } = this.props;
    if(!users || !users.length) {
      dispatch(fetchUsers());
    } else {
      userList = (
        users.map((p) => {
          return (
            <li key={`user${p.id}`}>
              {p.name}
            </li>
          );
        })
      );
    }
    return (
      <div>
        <div>
          { userList }
        </div>
        <div>
          <Link to="/users/add">新增用户</Link>
        </div>
        <div> {this.props.children} </div>
      </div>
    );
  }
}
export default connect(
  state => ( {users: state.users.users} )
)(Users);
