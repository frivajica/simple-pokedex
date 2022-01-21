import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { GlobalStyles } from './styles'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>  
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles>
          <BrowserRouter basename="/">
            <App />
          </BrowserRouter>
        </GlobalStyles>
      </PersistGate>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);