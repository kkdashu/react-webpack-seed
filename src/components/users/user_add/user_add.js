import './user_add.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from 'actions/user_action';

class UserAdd extends Component {
  onSubmit(e) {
    e.preventDefault();
    let name = this.refs.name.value.trim();
    let email = this.refs.email.value.trim();
    if(!name || !email) {
      return;
    }
    var user = {name: name, email: email};
    this.props.addUser(user);
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
        <button onClick={this.onSubmit.bind(this)} type="submit">新增</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addUser }
)(UserAdd);
