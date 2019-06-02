import { RECEIVE_AUTHENFICATION, REQUEST_AUTHENTICATION } from './action';

const initialState = {
  token: 'init tok'
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_AUTHENTICATION:
      return state;
    case RECEIVE_AUTHENFICATION:
      return {
        token: action.token
      };
    default:
      return state;
  }
};
