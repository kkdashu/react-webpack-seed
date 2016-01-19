import './user.scss';
import React from 'react';
import Users from 'models/users';

export default class User extends React.Component {

  /**
   * 通过es6 class 方式定义Component
   * getInitialState方法不会被调用
   * https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html
   */
  constructor (props) {
    super(props);
    this.state = {
      user: {},
      isEdit: false
    };
  }
  fetchUser () {
    const userId = this.props.params.userId;
    let user = Users.getAll().filter( user => {
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
  toggleIsEdit () {
    this.setState({
      isEdit: !this.state.isEdit
    });
  }
  editConfirm () {
    let newUser = {
      name: this.refs.name.value.trim(),
      email: this.refs.email.value.trim()
    };
    if(!newUser.name || !newUser.email) {
      return;
    }
    Users.editById(this.state.user.id, newUser);
    this.setState({
      isEdit: !this.state.isEdit,
      user: newUser
    });
  }
  cancelEdit () {
    this.setState({
      isEdit: !this.state.isEdit
    });
  }
  handleDelete () {
    Users.deleteById(this.state.user.id);
    this.props.history.pushState(null, '/users');
  }
  render() {
    return (
      <div>
      { this.state.isEdit ? <div><button onClick={this.editConfirm.bind(this)}>确认</button> <button onClick={this.cancelEdit.bind(this)}>取消</button> </div> :<div><button onClick={this.toggleIsEdit.bind(this)}>编辑</button> <button onClick={this.handleDelete.bind(this)}>删除</button></div> }
        <p>
          姓名: {this.state.isEdit ? <input type="text" defaultValue={this.state.user.name} ref='name' /> : this.state.user.name }
        </p>
        <p>
          邮箱: {this.state.isEdit ? <input type="email" defaultValue={this.state.user.email} ref='email' /> : this.state.user.email}
        </p>
      </div>
    );
  }
}
