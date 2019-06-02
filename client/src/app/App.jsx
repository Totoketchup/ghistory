import React from 'react';
import './App.css';
import GithubCorner from 'react-github-corner';
import { connect } from 'react-redux';
import { authenticate } from '../shared/action';

const App = ({ dispatch, token }) => {
  const onClickAuthentificate = () => {
    dispatch(authenticate())
  };

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
      <div>
        The token is: { token }
      </div>
      <button
        onClick={ onClickAuthentificate }>
        Authentificate
      </button>
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
    token: state.token
  }
}

export default connect(mapStateToProps)(App);
