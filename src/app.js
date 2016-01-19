import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Index from './components/index/index';
import Users from './components/users/users';
import User from './components/user/user';
import UserAdd from './components/user_add/user_add';

React.render((
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User} />
        <Route path="/users/add" component={UserAdd} />
      </Route>
    </Route>
  </Router>
), document.body);
