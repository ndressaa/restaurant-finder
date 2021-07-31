import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import Home from './pages/Home/Home';

import GlobalStyle from './assets/styles/global.style';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Home />
    </Provider>
  );
}

export default App;