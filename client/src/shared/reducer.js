import { RECEIVE_AUTH, USER_LOGOUT } from './action';

const initialState = {
  client: undefined,
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
  default:
    return state;
  }
}
