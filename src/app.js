import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { syncHistory, routeReducer } from 'redux-simple-router';
import thunk from 'redux-thunk';
import reducers from './reducers';

// pages
import Index from './containers/index';
import Main from './containers/main';
import Users from './containers/users';
import UserAdd from 'components/users/user_add/user_add';
// import Index from 'components/index/index';
// import Users from 'components/users/users/users';
// import User from 'components/users/user/user';
// import UserAdd from 'components/users/user_add/user_add';

// redux
const reducer = combineReducers(
  Object.assign(
    {}, reducers, { routing: routeReducer }
  )
);
const browserHistory = createHistory();
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware, thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

store.subscribe(() =>{
  console.log('-------store begin--------');
  console.log(store.getState());
  console.log('-------store   end--------');
  }
);
// Required for replaying actions from devtools to work
// reduxRouterMiddleware.listenForReplays(store);




ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Index} />
          <Route path="users" component={Users}>
            <Route path="add" component={UserAdd} />
          </Route>
      </Route>
        {
          /* <Route path="users" component={Users}>
            <Route path="/user/:userId" component={User} />
            <Route path="/users/add" component={UserAdd} />
          </Route> */
        }
    </Router>
  </Provider>
), document.getElementById('app'));
