import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/global';
import Header from './components/Header';
import { ProductsProvider } from './contexts/ProductsProvider';
import Home from './pages/Home';
import { light } from './assets/styles/themes/index';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={light}>
      <ProductsProvider>
        <Header />
        <Home />
        <GlobalStyle />
      </ProductsProvider>
    </ThemeProvider>
  );
}

export default App;
