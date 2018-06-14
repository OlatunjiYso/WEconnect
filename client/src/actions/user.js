import jwt from 'jsonwebtoken';

import { alertSuccess, alertError } from '../actions/flashMessage';
import userApi from '../service/userApi';
import setToken from '../helpers/authorization';

import { USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_ERROR, SET_CURRENT_USER } from '../actions/types';

/**
  * @description - starts spinner when awaiting a response
  *
  * @param {bool} bool - true lor false
  * @return {obj} -actionable object containing type and payload
  */
export const isRequesting = bool => ({
    type: USER_UPDATE_REQUEST,
    bool
});

/**
* @description - action responsible for flagging errors
*
*@param {obj} error - the error message
*
* @return {obj} -actionable object containing type and payload
*/
export const errorResponse = error => ({
    type: USER_UPDATE_ERROR,
    error
});

/**
 * @description - indicates success after successful attempt
 *
 *@param {object} message - response object
 * @return {obj} -actionable object containing type and payload
 */
export const success = message => ({
    type: USER_UPDATE_SUCCESS,
    response: message
});

/**
 * @description handles setting current user information in redux store
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
* @description - method responsible for changing a user's password
*
* @param {string} passwords - object containing both old and new passwords
* @return { obj } - actionable object containing payload and type
*/
export const changePassword = passwords => (dispatch) => {
    setToken(localStorage.token);
    dispatch(isRequesting(true));
    userApi.changePassword(passwords)
        .then((response) => {
            dispatch(isRequesting(false));
            alertSuccess(response.data.message);
        })
        .catch((error) => {
            if (error.response.status === 400) {
                alertError(error.response.data.errors[0]);
            }
            if (error.response.status === 401) {
                alertError(error.response.data.message);
            }
            dispatch(isRequesting(false));
        });
};

/**
* @description - method responsible for changing a user's information as email and password
*
*@param {string} userId - id of user
* @param {object} details - object containing both email and username
*
* @return { obj } - actionable object containing payload and type
*/
export const changeDetails = (userId, details) => (dispatch) => {
    setToken(localStorage.token);
    dispatch(isRequesting(true));
    userApi.changeDetails(userId, details)
        .then((response) => {
            const user = {};
            const newToken = jwt.sign(
                {
                    id: userId,
                    username: details.username,
                    email: details.email
                },
                process.env.SECRET_KEY,
                { expiresIn: '720m' }
            );
            localStorage.setItem('token', newToken);
            setToken(newToken);
            user.id = userId;
            user.username = details.username;
            user.email = details.email;
            dispatch(setCurrentUser(user));
            alertSuccess(response.data.message);
            dispatch(isRequesting(false));
        })
        .catch((error) => {
            console.log(error);
            if (error.response.status === 400) {
                alertError(error.response.data.errors[0]);
            }
            if (error.response.status === 409) {
                alertError(error.response.data.message);
            }
            dispatch(errorResponse(error.response.data));
            dispatch(isRequesting(false));
        });
};

