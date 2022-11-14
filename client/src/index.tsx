import React from 'react';
import ReactDOM from 'react-dom/client';
import './App/Layout/styles.css';
import App from './App/Layout/App';
import reportWebVitals from './reportWebVitals';
import {  Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { StoreProvider } from './App/context/StoreContext';

export const history = createBrowserHistory();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Router history={history}>
      <StoreProvider>
      <App />
      </StoreProvider>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
