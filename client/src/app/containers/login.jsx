import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { finishAuth } from '../../shared/action';
import querystring from 'querystring';
import { Redirect } from 'react-router-dom';
import Loading from '../widgets/loading';

const Login = ({ dispatch, accessToken, user }) => {

  const userInfo = querystring.parse(window.location.search.substr(1));

  if (userInfo.user !== undefined && userInfo.accessToken !== undefined) {
    dispatch(finishAuth(userInfo));
  }

  return (
    <div className='App'>
      {
        user !== undefined && accessToken !== undefined ? (
          <Loading />
        ) : (
          <Redirect to={{ pathname: '/' }} />
        )
      }
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    user: state.user,
    accessToken: state.accessToken
  }
}

export default connect(mapStateToProps)(Login);
