import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import 'normalize.css';
import 'flexboxgrid';

import { GlobalStyles, Fonts } from './assets/styles';
import theme from './assets/styles/theme';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Fonts />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
