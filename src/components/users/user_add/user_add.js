import './user_add.scss';
import React from 'react';
import Users from 'models/users';

export default class UserAdd extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let name = this.refs.name.value.trim();
    let email = this.refs.email.value.trim();
    if(!name || !email) {
      return;
    }
    var user = {name: name, email: email};
    Users.add(user);
    this.refs.name.value = '';
    this.refs.email.value = '';
    this.props.history.pushState(null, '/users');
  }
  render () {
    return (
      <form>
        <div>
          <input type="text" ref="name" placeholder="姓名" />
        </div>
        <div>
          <input type="email" ref="email" placeholder="邮箱" />
        </div>
        <button onClick={this.handleSubmit.bind(this)} type="submit">新增</button>
      </form>
    );
  }
}
