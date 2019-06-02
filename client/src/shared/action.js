export const RECEIVE_AUTH = 'RECEIVE_AUTH';
export function receiveAuthentication(user, accessToken) {
  return {
    accessToken,
    type: RECEIVE_AUTH,
    user
  };
}

export function finishAuth(userInfo) {
  return (dispatch) => {
    const { user, accessToken } = userInfo;
    dispatch(receiveAuthentication(JSON.parse(user), accessToken));
  };
}
