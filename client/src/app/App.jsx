import React from 'react';
import './App.css';
import GithubCorner from 'react-github-corner';
import { connect } from 'react-redux';
import Gravatar from 'react-gravatar';

const App = ({ accessToken, dispatch, user }) => {
  const redirectToAuth = () => {
    window.location.href = 'http://localhost/api/auth/github';
  }

  return (
    <div className='App'>
      <header className='GHistory-title'>
        GHistory
      </header>
      <GithubCorner
        href='https://github.com/Totoketchup/ghistory'
        bannerColor='white'
        octoColor='grey'
        size={ 120 }
        />
      <button  onClick={ redirectToAuth }>
        Authenticate
      </button>
      {
        user !== undefined ? (
          <div>
            <div>
              The token is: { accessToken }
            </div>
            <Gravatar email={ user.email } />
          </div>

        ) : (
          null
        )
      }
      <footer>
        <div className='GHistory-footer'>
          Made with <span role='img' aria-label='sheep'>❤️</span> by Anthony D'Amato
        </div>
      </footer>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    accessToken: state.accessToken,
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
