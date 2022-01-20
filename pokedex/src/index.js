import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { GlobalStyles } from './styles'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById('root')
);