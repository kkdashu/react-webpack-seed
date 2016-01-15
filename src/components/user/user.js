import './user.scss';
import React from 'react';
import users from '../../models/users';

export default class User extends React.Component{
  getInitialState() {
    return {
      user: { name: 'a' }
    };
  }
  componentDidMount() {
    const userId = this.props.params.userId;
    let user = users.filter( user => {
      return user.id === userId;
    })[0];
    console.log(user);
    this.setState({
      user: user
    });
  }
  render() {
    return (
      <div>
        <p>
          姓名: {this.state ? this.state.user.name : ''}
        </p>
        <p>
          邮箱: {this.state ? this.state.user.email: ''}
        </p>
      </div>
    );
  }
}
