import fetch from 'isomorphic-fetch';

/**
 * 获取用户
 */
export function fetchUsers() {
  return dispatch => {
    return fetch('http://127.0.0.1:8000/api/users')
      .then(req => req.json())
      .then(json => dispatch(receiveUsers(json)));
  };
}

/**
 * 获取用户
 */
function receiveUsers(json) {
  return {
    type: 'RECEIVE_USERS',
    users: json.users,
    reveivedAt: Date.now()
  };
}

export function addUser(user) {
  return dispatch => {
    return fetch('http://127.0.0.1:8000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(req => req.json())
      .then(json => dispatch(receiveUser(json)));
  };
}

function receiveUser(json) {
  return {
    type: 'RECEIVE_USER',
    user: json.user,
    receivedAt: Date.now()
  };
}
