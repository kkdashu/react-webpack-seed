// import assignToEmpty from '../utils/assign';

const initialState = {
  isFetching: false,
  users: []
};

function usersReducer(state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case 'RECEIVE_USERS':
      console.log(action.users);
      const users = [];
      action.users.forEach(function(user) {
        users.push(user);
      });
      return {
        users: users,
        isFetching: false
      };
    case 'RECEIVE_USER':
      console.log(action.user);
      return {
        users: [
          ...state.users,
          Object.assign({}, action.user)
        ],
        isFetching: false
      };
    default:
      return state;
  }
}

export default usersReducer;
