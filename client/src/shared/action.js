import fetch from 'isomorphic-fetch';

export const REQUEST_AUTHENTICATION = 'REQUEST_AUTHENTICATION';
export function requestAuthentication() {
  return {
    type: REQUEST_AUTHENTICATION
  };
}

export const RECEIVE_AUTHENFICATION = 'RECEIVE_AUTHENFICATION';
export function receiveAuthentication(token) {
  return {
    type: RECEIVE_AUTHENFICATION,
    token: token
  };
}

export function authenticate() {
  return (dispatch, getState) => {
    dispatch(requestAuthentication());
    console.log('ni');
    fetch('/api/auth/github', { method: 'GET' })
    .then((response) => {
      if (response.status >= 400) {
        return response.json()
          .catch(() => {
            throw new Error(`Error ${response.status} when , invalid json returned.`);
          })
          .then((json) => {
            throw new Error(`Error ${response.status} when : ${json.message}`);
          });
      }
      else {
        return response.text();
      }
    })
    .then((token) => Promise.resolve(dispatch(receiveAuthentication(token))))
    .catch((error) => {
      console.log(error);
    });
  };
}
