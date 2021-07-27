import React from 'react';

import Home from './pages/Home/Home';

// import { ThemeProvider } from 'styled-components';
// import theme from './theme';

import GlobalStyle from './assets/styles/global.style';

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;