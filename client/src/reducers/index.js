import { combineReducers } from 'redux';

import authReducers from './authReducer';
import businessReducer from './businessReducer';
import userReducer from './userReducer';
import landingPageReducer from './landingPageReducer';

const allReducers = {
    authReducers,
    businessReducer,
    userReducer,
    landingPageReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;