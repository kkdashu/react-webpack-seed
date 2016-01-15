import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Index from './components/index/index';
import Users from './components/users/users';
import User from './components/user/user';

React.render((
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User} />
      </Route>
    </Route>
  </Router>
), document.body);
