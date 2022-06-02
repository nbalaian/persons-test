import React from 'react';
import * as Styled from './App.styled';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { People } from './pages/people';
import { Header } from './components/header/header';

import { Welcome } from './pages/welcome';
import { Grommet } from 'grommet';

function App() {
  const mainTheme = {
    global: {
      colors: {
        brand: 'var(--primary-color)',
        active: 'var(--accent)',
        placeholder: 'var(--gray)',
      },
    },
  };

  return (
    <Grommet theme={mainTheme}>
      <Header />
      <Styled.Container>
        <BrowserRouter basename='/test'>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/people' element={<People />} />
          </Routes>
        </BrowserRouter>
      </Styled.Container>
    </Grommet>
  );
}

export default App;
