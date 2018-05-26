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

// const user = localStorage.getItem('user');
// if(user) {
//   store.dispatch({ type: 'SIGNIN_SUCCESS' });
// }

if (jwt.decode(localStorage.user) !== null) {
    setToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
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
