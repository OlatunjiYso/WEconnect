import { combineReducers } from 'redux';

import authReducers from './authReducer';
import businessReducer from './businessReducer';
import userReducer from './userReducer';

const allReducers = {
    authReducers,
    businessReducer,
    userReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;