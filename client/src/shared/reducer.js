import { RECEIVE_AUTH, USER_LOGOUT } from './action';

const initialState = {
  token: '',
  user: undefined
};

export default function(state = initialState, action) {
  switch (action.type) {
  case RECEIVE_AUTH:
    return {
      accessToken: action.accessToken,
      user: action.user
    };
  case USER_LOGOUT:
    return initialState;
  default:
    return state;
  }
}
