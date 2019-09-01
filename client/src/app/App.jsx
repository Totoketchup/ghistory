import GithubCorner from 'react-github-corner';
import Gravatar from 'react-gravatar';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { requestUser, userLogout } from '../shared/action';
import RateLimit from './widgets/rateLimit';
import './App.css';
import List from './widgets/list';

const App = ({ client, dispatch, token, user }) => {
  const [triedToResumeUser, setUserResumed] = useState(false);

  if (user === undefined && !triedToResumeUser) {
    dispatch(requestUser());
    setUserResumed(true);
  }

  const redirectToAuth = () => {
    window.location.href = 'http://localhost/api/auth/github';
  };

  const logout = () => {
    dispatch(userLogout());
  };

  return (
    <div className="App">
      <header className="GHistory-title">GHistory</header>
      <GithubCorner
        href="https://github.com/Totoketchup/ghistory"
        bannerColor="white"
        octoColor="grey"
        size={120}
      />
      {
        user != null && client != null ? (
          <div>
            <div>The token is: {token}</div><br />
            <Gravatar email={user.email} /><br />
            <RateLimit client={client} />
            <button type="button" onClick={logout}>
              Logout
            </button>
            <List client={client} />
          </div>
        ) : (
          <button type="button" onClick={redirectToAuth}>
            Authenticate
          </button>
        )
      }
      <footer>
        <div className="GHistory-footer">
          Made with
          <span role="img" aria-label="sheep">
            ❤️
          </span>
          by Anthony D&apos;Amato
        </div>
      </footer>
    </div>
  );
};

App.defaultProps = {
  client: undefined,
  token: undefined,
  user: undefined
};

App.propTypes = {
  client: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  token: PropTypes.string,
  user: PropTypes.object
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
