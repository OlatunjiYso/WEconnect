import React, { Component } from 'react';

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
import RegistrationGuide from './containers/registration_guide';
import BusinessPreview from './containers/preview_business';

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
                                <Route path="/businesses/:businessId" component={ BusinessProfile } />
                                <Route path="/businesses" component={ AllBusinesses } />
                                <Route path="/businessRegistration" component={ BusinessRegForm } />
                                <Route path="/businessUpdate" component={ BusinessUpdateForm } />
                                <Route path="/manageBusiness" component={ ManageBusiness } />
                                <Route path="/registrationGuide" component={ RegistrationGuide } />
                                <Route path="/preview" component={ BusinessPreview } />
                        </Switch>
                )

        }
}

export default App;

