import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './history';

import store from './store';
import App from './App';


const user = localStorage.getItem('user');
if(user) {
  store.dispatch({ type: 'SIGNIN_SUCCESS' });
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
