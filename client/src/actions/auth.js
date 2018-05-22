import alertify from 'alertifyjs';

import history from '../history';
import userApi from '../service/userApi';

import {
    AUTHENTICATED, ATTEMPT, SIGNUP_SUCCESS, BAD_REQUEST, CONFLICT, PASSWORD_MISMATCH,
    FAILED_SIGNIN, SIGNIN_SUCCESS, ON_BOARDING_SUCCESS, UNAUTHENTICATED
} from '../actions/types';


/**
 * @description - method responsible for starting the spinner
 *
 * @return { obj } - actionable object containing payload and type
 */
export const signupAttempt = () => {

    return {
        type: ATTEMPT,
        awaiting: true,
        outcome: 1,
        error: null
    };
};

/**
* @description - method responsible for stopping the spinner
*
* @param {obj} user -user details of newly signed up member
*
* @return { obj } - actionable object containing payload and type
*/
export const signupSuccess = (user) => {
    return {
        type: SIGNUP_SUCCESS,
        awaiting: false,
        error: null,
        userDetails: user
    };
};


/**
 *@description - method responsible for showing errors for bad requests
 *
 *@param {obj} errorsArray -an array of all validation errors
 *
 * @return { obj } - actionable object containing payload and type
 */
export const signupBadRequest = (errorsArray) => {
    return {
        type: BAD_REQUEST,
        awaiting: false,
        error: errorsArray,
        outcome: 0,
    };
};

/**
 *@description - method responsible for showing errors for conflicting requests
 *
 *@param {obj} errors - conflict message
 *
 * @return { obj } - actionable object containing payload and type
 */
export const signupConflict = errors => ({
    type: CONFLICT,
    awaiting: false,
    error: errors,
});

/**
*@description - method responsible for showing password mismatch
*
*
* @return { obj } - actionable object containing payload and type
*/
export const passwordMismatch = () => ({
    type: PASSWORD_MISMATCH,
    misMatch: true,
});

/**
 * @description - method responsible for starting the spinner
 *
 * @return { obj } - actionable object containing payload and type
 */
export const loginAttempt = () => ({
    type: ATTEMPT,
    awaiting: true,
    error: null
});

/**
 * @description - method responsible for displaying login errors
 *
 * @param {obj} message reason for failed authentication
 *
 * @return { obj } - actionable object containing payload and type
 */
export const loginFailed = message => ({
    type: FAILED_SIGNIN,
    awaiting: false,
    outcome: 0,
    error: message,
    authenticated: false,
});

/**
 * @description - method responsible for stopping the spinner on success
 *
 *
 * @return { obj } - actionable object containing payload and type
 */
export const loginSuccess = () => ({
    type: SIGNIN_SUCCESS,
    awaiting: false,
    error: null,
    authenticated: true,
});

/**
* @description - method responsible for stopping the spinner on success
*
* @return { obj } - actionable object containing payload and type
*/
export const onBoardingSuccess = () => ({
    type: ON_BOARDING_SUCCESS,
    awaiting: false,
    userDetails: null,
    authenticated: true,
});

/**
* @description - method responsible for logging out users
*
* @return { obj } - actionable object containing payload and type
*/
export const loggedOut = () => {
    localStorage.clear();
    return {
        type: UNAUTHENTICATED,
        authenticated: false,
    };
};

/**
 * @description - method responsible for logging out users
 *
 * @return { obj } - actionable object containing payload and type
 */
export const loggedIn = () => ({
    type: AUTHENTICATED,
    authenticated: true,
});

/**
* @description - method responsible for logging in users
*
* @param {obj} user - user information
*
* @return { obj } - actionable object containing payload and type
*/
export const login = (user) => {
    return (dispatch) => {
        dispatch(loginAttempt());
        userApi.login(user)
            .then((response) => {
                dispatch(loginSuccess());
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('username', response.data.username);
                history.push('/');
                alertify.set('notifier', 'position', 'top-right');
            alertify.success('Login Successful');
            })
            .catch((error) => {
                dispatch(loginFailed(error.response.data.message));
            });
    };
};

/**
* @description - method responsible for adding a new user
*
* @param {obj} newUser - new user to signed up.
*
* @return { obj } - actionable object containing payload and type
*/
export const signup = newUser => (dispatch) => {
    if (newUser.confirmPassword !== newUser.password) {
        dispatch(passwordMismatch());
    }
    dispatch(signupAttempt());
    userApi.signup(newUser)
        .then(() => {
            dispatch(signupSuccess(newUser));
            history.push('/welcome');
            alertify.set('notifier', 'position', 'top-right');
            alertify.success('Registration Successful');
        })
        .catch((error) => {
            if (error && error.response.status === 400) {
                dispatch(signupBadRequest(error.response.data.errors));
            }
            if (error && error.response.status === 409) {
                dispatch(signupConflict(error.response.data.message));
            }
        });
};

/**
* @description - method responsible for on-boarding a new user
*
* @param {obj} newUser - new user to signed up.
*
* @return { obj } - actionable object containing payload and type
*/
export const onBoardUser = newUser => (dispatch) => {
    dispatch(loginAttempt());
    userApi.login(newUser)
        .then((response) => {
            dispatch(onBoardingSuccess());
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.id);
            localStorage.setItem('username', response.data.username);
            history.push('/');
        })
        .catch((error) => {
            dispatch(loginFailed(error.response.data.message));
        });
};
