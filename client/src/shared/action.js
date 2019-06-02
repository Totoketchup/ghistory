export const RECEIVE_AUTH = 'RECEIVE_AUTH';
export function receiveAuthentication(user, accessToken) {
  return {
    type: RECEIVE_AUTH,
    user,
    accessToken
  };
}

export function finishAuth(userInfo) {
  return (dispatch, getState) => {
    const { user, accessToken } = userInfo;
    dispatch(receiveAuthentication(JSON.parse(user), accessToken));
  };
}
