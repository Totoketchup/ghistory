import localStorage from './localStorage';

export const RECEIVE_AUTH = 'RECEIVE_AUTH';
export function receiveAuthentication(user, accessToken) {
  return {
    accessToken,
    type: RECEIVE_AUTH,
    user
  };
}

export const USER_LOGOUT = 'USER_LOGOUT';
export function userLogout() {
  localStorage.clean();
  return {
    type: USER_LOGOUT
  };
}
export function requestUser() {
  return (dispatch) => {
    const resumedUser = localStorage.get();

    if (resumedUser === undefined) {
      console.log('No user has been found in the local storage.');
      // The user had not been found in the local storage
      // -> No session restored
    } else {
      console.log('An user has been found in the local storage.');
      // An user is already connected:
      dispatch(finishAuth(resumedUser));
    }
  };
}

export function finishAuth(userInfo) {
  return (dispatch) => {
    const { user, accessToken } = userInfo;

    dispatch(receiveAuthentication(JSON.parse(user), accessToken));
    localStorage.set(userInfo);
  };
}
