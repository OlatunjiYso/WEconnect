import { combineReducers } from 'redux';

import authReducers from './authReducer';
import businessReducer from './businessReducer';

const allReducers = {
    authReducers,
    businessReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;