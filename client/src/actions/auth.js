
import { alertSuccess } from '../actions/flashMessage';
import history from '../history';
import userApi from '../service/userApi';
import setToken from '../helpers/authorization';
import {
    MAKING_AUTH_REQUEST, SIGNIN_REQUEST_SUCCESS, SIGNUP_REQUEST_SUCCESS, SIGNIN_REQUEST_ERROR, SIGNUP_REQUEST_ERROR, ON_BOARDING_SUCCESS, SET_CURRENT_USER
} from '../actions/types';


/**
 * @description handles setting current logged-in user
 *
 * @param { object } user - contains object of logged-in user details
 *
 * @returns { object } user details - returns details of current logged-in user
 */
export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    user
});


/**
     * @description - starts spinner when awaiting a response
     *
     * @param {bool} bool - true lor false
     * @return {obj} -actionable object containing type and payload
     */
export const isRequesting = bool => ({
    type: MAKING_AUTH_REQUEST,
    bool
});

/**
* @description - action responsible for flagging signin errors
*
*@param {obj} error - the conflict error message
*
* @return {obj} -actionable object containing type and payload
*/


export const signinFailure = error => ({
    type: SIGNIN_REQUEST_ERROR,
    error
});

/**
* @description - action responsible for flagging signup errors
*
*@param {obj} error - the conflict error message
*
* @return {obj} -actionable object containing type and payload
*/
export const signupFailure = error => ({
    type: SIGNUP_REQUEST_ERROR,
    error
});

/**
 * @description - indicates success after successful attempt to signin
 *
 *@param {object} message - response object
 * @return {obj} -actionable object containing type and payload
 */
export const signinSuccess = message => ({
    type: SIGNIN_REQUEST_SUCCESS,
    response: message
});

/**
 * @description - indicates success after successful attempt to signup
 *
 *@param {object} message - response object
 * @return {obj} -actionable object containing type and payload
 */
export const signupSuccess = message => ({
    type: SIGNUP_REQUEST_SUCCESS,
    response: message
});

/**
* @description - method responsible for stopping the spinner on success
*
* @return { obj } - actionable object containing payload and type
*/
export const onBoardingSuccess = () => ({
    type: ON_BOARDING_SUCCESS,
    userDetails: null,
});

/**
* @description - method responsible for logging in users
*
* @param {obj} userDetails - user information
*
* @return { obj } - actionable object containing payload and type
*/
export const login = userDetails => (dispatch) => {
    dispatch(isRequesting(true));
    const user = {};
    userApi.login(userDetails)
        .then((response) => {
            dispatch(signinSuccess(response.data));
            dispatch(isRequesting(false));
            localStorage.setItem('token', response.data.token);
            setToken(response.data.token);
            user.id = response.data.id;
            user.username = response.data.username;
            user.email = response.data.email;
            dispatch(setCurrentUser(user));
            history.push('/');
            alertSuccess('You are logged in');
        })
        .catch((error) => {
            dispatch(isRequesting(false));
            dispatch(signinFailure(error.response));
        });
};

/**
* @description - method responsible for adding a new user
*
* @param {obj} newUser - new user to signed up.
*
* @return { obj } - actionable object containing payload and type
*/
export const signup = newUser => (dispatch) => {
    dispatch(isRequesting(true));
    userApi.signup(newUser)
        .then(() => {
            console.log(newUser);
            dispatch(isRequesting(false));
            dispatch(signupSuccess(newUser));
            history.push('/welcome');
            alertSuccess('Welcome!');
        })
        .catch((error) => {
            dispatch(signupFailure(error.response));
            dispatch(isRequesting(false));
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
    dispatch(isRequesting(true));
    const user = {};
    userApi.login(newUser)
        .then((response) => {
            dispatch(isRequesting(false));
            dispatch(onBoardingSuccess());
            localStorage.setItem('token', response.data.token);
            setToken(response.data.token);
            user.id = response.data.id;
            user.username = response.data.username;
            user.email = response.data.email;
            dispatch(setCurrentUser(user));
            history.push('/');
            alertSuccess('You are logged in');
        })
        .catch((error) => {
            dispatch(signinFailure(error.response));
            dispatch(isRequesting(false));
        });
};
