import { RECEIVE_AUTH, RECEIVE_RATE_LIMIT, USER_LOGOUT, RECEIVE_REPOS } from './action';

const initialState = {
  client: undefined,
  rateLimit: undefined,
  repos: undefined,
  token: undefined,
  user: undefined
};

export default function(state = initialState, action) {
  switch (action.type) {
  case RECEIVE_AUTH:
    return {
      client: action.client,
      token: action.token,
      user: action.user
    };
  case USER_LOGOUT:
    return initialState;
  case RECEIVE_RATE_LIMIT:
    return Object.assign({}, state, {
      rateLimit: action.rateLimit
    });
  case RECEIVE_REPOS:
    console.log(state);
    return Object.assign({}, state, {
      repos: action.repos
    });
  default:
    return state;
  }
}
