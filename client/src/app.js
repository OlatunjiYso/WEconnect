import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import { Switch, Route } from 'react-router-dom';

import Home from './containers/home';
import Login from './containers/login';
import Signup from './containers/signup';
import UserProfile from './containers/user_profile';
import BusinessProfile from './containers/business_profile';
import ProfileUpdate from './containers/profileUpdate'
import AllBusinesses from './containers/all_businesses';
import BusinessRegForm from './containers/business_reg_form';
import BusinessUpdate from './containers/business_update';
import ManageBusiness from './containers/manage_business';
import Welcome from './containers/welcome';
import RegistrationGuide from './containers/registration_guide';
import DeleteBusiness from './containers/delete_business';


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
                        <Switch>
                                <Route exact={true} path="/" component={ Home } />
                                <Route path="/login" component={ Login } />
                                <Route path="/welcome" component={ Welcome } />
                                <Route path="/signup" component={ Signup } />
                                <Route path="/userProfile" component={ UserProfile } />
                                <Route path="/updateProfile" component={ ProfileUpdate } />
                                <Route path="/businesses/:businessId" component={ BusinessProfile } />
                                <Route path="/businesses" component={ AllBusinesses } />
                                <Route path="/businessRegistration" component={ BusinessRegForm } />
                                <Route path="/businessUpdate/:businessId" component={ BusinessUpdate } />
                                <Route path="/manageBusiness/:businessId" component={ ManageBusiness } />
                                <Route path="/registrationGuide" component={ RegistrationGuide } />
                                <Route path="/businessDelete/:businessId" component={ DeleteBusiness } />
                        </Switch>
                )

        }
}

export default App;

