import React from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import Home from './containers/home';
import Login from './containers/login';
import Signup from './containers/signup';
import UserProfile from './containers/user_profile';
import AllBusinesses from './containers/all_businesses';

ReactDOM.render(
<BrowserRouter>
        <AllBusinesses />
</BrowserRouter>,
document.getElementById('app')
);