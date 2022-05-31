import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Styled from './App.styled';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Styled.Box>
          <p>test</p>
          <p>test2</p>
        </Styled.Box>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
