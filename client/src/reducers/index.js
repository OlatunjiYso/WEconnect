import { combineReducers } from 'redux';

import businessReducer from './businessReducer';
import reviewReducer from './reviewReducer';
import userReducer from './userReducer';

const allReducers = {
    businessReducer,
    reviewReducer,
    userReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;