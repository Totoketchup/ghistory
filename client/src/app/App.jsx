import GithubCorner from 'react-github-corner';
import Gravatar from 'react-gravatar';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import './App.css';

const App = ({ accessToken, user }) => {
  const redirectToAuth = () => {
    window.location.href = 'http://localhost/api/auth/github';
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
      {user !== undefined ? (
        <div>
          <div>The token is: {accessToken}</div>
          <Gravatar email={user.email} />
        </div>
      ) : (
        <button type="button" onClick={redirectToAuth}>
          Authenticate
        </button>
      )}
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
  accessToken: '',
  user: undefined
};

App.propTypes = {
  accessToken: PropTypes.string,
  user: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    accessToken: state.accessToken,
    user: state.user
  };
};

export default connect(mapStateToProps)(App);
