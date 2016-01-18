import './user.scss';
import React from 'react';
import users from '../../models/users';

export default class User extends React.Component{
  getInitialState() {
    return {
      user: {  }
    };
  }
  fetchUser () {
    const userId = this.props.params.userId;
    let user = users.filter( user => {
      return user.id.toString() === userId;
    })[0];
    if(!this.ignoreLastFetch) {
      this.setState({
        user: user
      });
    }
  }
  componentDidUpdate(prevProps) {
    let oldId = prevProps.params.userId;
    let newId = this.props.params.userId;
    if(newId !== oldId) {
      this.fetchUser();
    }
  }
  componentDidMount() {
    this.fetchUser();
  }
  componentWillUnmount() {
    this.ignoreLastFetch = true;
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
