import localStorage from './localStorage';
import createGithubClient from './github';

export const RECEIVE_AUTH = 'RECEIVE_AUTH';
export function receiveAuthentication(user, token, client) {
  return {
    client,
    token,
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

export const GITHUB_CLIENT_CREATED = 'GITHUB_CLIENT_CREATED';
export function githubClientCreated(client) {
  return {
    client,
    type: GITHUB_CLIENT_CREATED,
  };
}

export const GITHUB_CLIENT_ERROR = 'GITHUB_CLIENT_CREATED';
export function githubClientError() {
  return {
    type: GITHUB_CLIENT_ERROR
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
    dispatch(receiveAuthentication(JSON.parse(user), accessToken, createGithubClient(accessToken)));
    localStorage.set(userInfo);
  };
}
