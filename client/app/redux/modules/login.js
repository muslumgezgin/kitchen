import { Map, fromJS } from 'immutable';
import * as actionTypes from '../../actions/actionConstants';
import { updateObject } from '../helpers/utilty';
import { authLogin } from '../../actions/auth';
import { login } from '../../data/data';

const initialState = {
  usersLogin: Map({
    email: 'muslum_admin@hotmail.com',
    password: '12345daw@daw',
    remember: false
  })
};
const authStart = (state, action) => updateObject(state, {
  error: null,
  loading: true
});

const loginStart = (state, action) => {

  console.log(state);
  console.log(action);
  const { entries } = state._root;
  console.log(entries[0][1])
  const data = entries[0][1]._root.entries;

  let username = data[0][1];
  let password = data[1][1];
  console.log(username);
  const x = login(username, password);
  console.log(x);
  return {};
}

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.user.token,
    username: action.user.username,
    userId: action.user.userId,
    error: null,
    loading: false
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null
  });
};


const initialImmutableState = fromJS(initialState);
export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
}
