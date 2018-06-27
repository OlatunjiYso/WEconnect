import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import setToken from './helpers/authorization';
import history from './history';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';
import store from './store';
import App from './App';
import { setCurrentUser } from './actions/auth';

if (jwt.decode(localStorage.token) !== null) {
    setToken(localStorage.token);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.token)));
  } else {
    setToken('');
    store.dispatch(setCurrentUser({}));
  }

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
