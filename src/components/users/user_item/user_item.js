import './user_item.scss';
import React from 'react';
import { Link } from 'react-router';

export default class User extends React.Component {
  render() {
    return (
      <li>
        <Link to={`/user/${this.props.user.id}`}> {this.props.user.name} </Link> 
      </li>
    );
  }
}
