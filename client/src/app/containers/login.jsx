import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { finishAuth } from '../../shared/action';
import querystring from 'querystring';
import { Redirect } from 'react-router-dom';

const Login = ({ dispatch, token, user }) => {

  const userInfo = querystring.parse(window.location.search.substr(1));

  if (userInfo.user !== undefined && userInfo.accessToken !== undefined) {
    dispatch(finishAuth(userInfo));
  }

  return (
    <div className='App'>
      {
        user !== undefined ? (
          <span> TODO </span>
        ) : (
          <Redirect
            to={{ pathname: '/' }}
          />
        )
      }
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    user: state.user,
    token: state.token
  }
}

export default connect(mapStateToProps)(Login);
