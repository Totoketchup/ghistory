import { RECEIVE_AUTH } from './action';

const initialState = {
  token: '',
  user: undefined
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_AUTH:
      return {
        accessToken: action.accessToken,
        user: action.user
      };
    default:
      return state;
  }
};
