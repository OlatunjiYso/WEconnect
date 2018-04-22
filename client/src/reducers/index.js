import { combineReducers } from 'redux';

import authReducers from './authReducer';

const allReducers = {
    authReducers
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;