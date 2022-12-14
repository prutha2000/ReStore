import ReactDOM from 'react-dom/client';
import './App/Layout/styles.css';
import App from './App/Layout/App';
import reportWebVitals from './reportWebVitals';
import {  Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';
import { store } from './App/store/configureStore';

export const history = createBrowserHistory();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Router history={history}>
        <Provider store={store}>
        <App />
        </Provider>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
