import React, {Component } from 'react';

import ReactDOM from 'react-dom';

import { Switch, Route } from 'react-router-dom';

import Home from './containers/home';
import Login from './containers/login';
import Signup from './containers/signup';
import UserProfile from './containers/user_profile';
import BusinessProfile from './containers/business_profile';
import AllBusinesses from './containers/all_businesses';
import BusinessRegForm from './containers/business_reg_form';
import BusinessUpdateForm from './containers/business_update_form';
import ManageBusiness from './containers/manage_business';
import Welcome from './containers/welcome';

/**
 * @class App
 * 
 * @extends {React.Component}
 */
class App extends Component {

        /** 
            *
            *
            * @returns {JSX} JSX
            * 
            * @memberof App Component
            */
        render() {
                return (
                        <div>
                                <Route exact = {true} path="/" component = { Home} /> 
                                <Route path="/login" component = { Login } /> 
                                <Route path="/welcome" component = { Welcome } /> 
                                <Route path="/signup" component = { Signup } />
                                <Route path="/user/profile" component = { UserProfile } />
                                <Route path="/business/profile" component = { BusinessProfile } />
                                <Route path="/businesses" component = { AllBusinesses } />
                                <Route path="/business/registration" component = { BusinessRegForm } />
                                <Route path="/business/update" component = { BusinessUpdateForm } />
                                <Route path="/business/manage" component = { ManageBusiness } />
                                
                        </div>
                )

        }
}

export default App;

