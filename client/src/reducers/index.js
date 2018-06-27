import { combineReducers } from 'redux';

import authReducers from './authReducer';
import businessReducer from './businessReducer';
import userReducer from './userReducer';
import landingPageReducer from './landingPageReducer';
import reviewReducer from './reviewReducer';

const allReducers = {
    authReducers,
    businessReducer,
    userReducer,
    reviewReducer,
    landingPageReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;