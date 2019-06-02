import React from 'react';
import querystring from 'querystring';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { finishAuth } from '../../shared/action';
import Loading from '../widgets/loading';

import '../App.css';

const Login = ({ accessToken, dispatch, user }) => {
  const userInfo = querystring.parse(window.location.search.substr(1));

  if (userInfo.user !== undefined && userInfo.accessToken !== undefined) {
    dispatch(finishAuth(userInfo));
  }

  return (
    <div className="App">
      {user !== undefined && accessToken !== undefined ? (
        <Loading />
      ) : (
        <Redirect to={{ pathname: '/' }} />
      )}
    </div>
  );
};

Login.defaultProps = {
  accessToken: '',
  user: undefined
};

Login.propTypes = {
  accessToken: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    accessToken: state.accessToken,
    user: state.user
  };
};

export default connect(mapStateToProps)(Login);
