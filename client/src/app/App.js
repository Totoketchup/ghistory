import React from 'react';
import './App.css';
import GithubCorner from 'react-github-corner';
function App() {
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
      <footer>
        <div className='GHistory-footer'>
          Made with <span role='img' aria-label='sheep'>❤️</span> by Anthony D'Amato
        </div>
      </footer>
    </div>
  );
}

export default App;
