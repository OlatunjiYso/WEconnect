import alertify from 'alertifyjs';

import history from '../history';
import userApi from '../service/userApi';
import setToken from '../helpers/authorization';

import {
    FOUND_MY_BUSINESSES, GOT_NO_BUSINESSES, CONFLICT, ATTEMPT, PASSWORD_MISMATCH,
    SUCCESS, STOP_SPINNER, BAD_REQUEST
} from '../actions/types';

/**
* @description - action responsible for flagging conflicts
*
*@param {obj} error - the conflict error message
*
* @return {obj} -actionable object containing type and payload
*/
export const conflict = error => ({
    type: CONFLICT,
    awaiting: false,
    error
});

/**
     * @description - starts spinner in attempt to update user password || details|| picture
     *
     *
     * @return {obj} -actionable object containing type and payload
     */
export const attempt = () => ({
    type: ATTEMPT,
    awaiting: true,
});

/**
 * @description - displays password mismatch in attempt to delete a business
 *
 *
 * @return {obj} -actionable object containing type and payload
 */
export const passwordMismatch = () => ({
    type: PASSWORD_MISMATCH,
    awaiting: false,
    error: true
});

/**
* @description - flags bad requests
*
*@param {array} errors - an array of validation errors
* @return {obj} -actionable object containing type and payload
*/
export const badRequest = errors => ({
    type: BAD_REQUEST,
    awaiting: false,
    error: errors
});
/**
 * @description - stops spinner after successful attempt to register || update || delete business
 *
 *
 * @return {obj} -actionable object containing type and payload
 */
export const success = () => ({
    type: SUCCESS,
    awaiting: false,
    error: null
});

/**
* @description - hides spinner
*
*
* @return {obj} -actionable object containing type and payload
*/
export const stopSpinner = () => ({
    type: STOP_SPINNER,
    awaiting: false
});


/**
     * @description - action for updating store with user's business
     *
     *@param {obj} businesses - an array of user's businesses
     *
     *
     * @return {obj} -actionable object containing type and payload
     */
export const gotMyBusinesses = businesses => ({
    type: FOUND_MY_BUSINESSES,
    businesses,
    gotBusinesses: true
});

/**
 *@description - action for indicating that a user has got no business
 *
 *@param {obj} businesses - an array of user's businesses
 *
 *
 * @return {obj} -actionable object containing type and payload
 */
export const gotNoBusiness = () => ({
    type: GOT_NO_BUSINESSES,
    gotBusinesses: false
});


/**
 * @description - method responsible for fetching a users business
 *
 * @return { obj } - actionable object containing payload and type
 */
export const fetchMyBusinesses = () => (dispatch) => {
    setToken(localStorage.token);
    userApi.getMyBusinesses()
        .then((response) => {
            if (response.data.message === 'You have no business registered yet') {
                dispatch(gotNoBusiness());
            }
            if (response.data.message === 'all your businesses') {
                const { businesses } = response.data;
                dispatch(gotMyBusinesses(businesses));
            }
        })
        .catch((error) => {
            console.log(error);
            if (error.response.status === 401) {
                history.push('/Login'); // Flash a message telling user to login
            }
        });
};

/**
* @description - method responsible for changing a user's password
*
* @param {string} passwords - object containing both old and new passwords
* @return { obj } - actionable object containing payload and type
*/
export const changePassword = passwords => (dispatch) => {
    setToken(localStorage.token);
    dispatch(attempt());
    console.log(passwords);
    userApi.changePassword(passwords)
        .then((response) => {
            if (response.data.message === 'Your password remains unchanged') {
                dispatch(success());
                alertify.set('notifier', 'position', 'top-right');
                alertify.success('No changes, Your password remains the same');
            } else {
                dispatch(success());
                alertify.set('notifier', 'position', 'top-right');
                alertify.success('Password successfully modified');
            }
        })
        .catch((error) => {
            console.log(error.response);
            if (error && error.response.status === 401) {
                dispatch(passwordMismatch());
            }
            if (error && error.response.status === 400) {
                dispatch(badRequest(error.response.data.errors));
            }
        });
};

/**
* @description - method responsible for changing a user's password
*
*@param {string} userId - id of user
* @param {object} details - object containing both email and username
*
* @return { obj } - actionable object containing payload and type
*/
export const changeDetails = (userId, details) => (dispatch) => {
    setToken(localStorage.token);
    dispatch(attempt());
    userApi.changeDetails(userId, details)
        .then((response) => {
            if (response.data.message === 'Your password remains unchanged') {
                dispatch(success());
                alertify.set('notifier', 'position', 'top-right');
                alertify.success('No changes, Your password remains the same');
            } else {
                dispatch(success());
                alertify.set('notifier', 'position', 'top-right');
                alertify.success('Password successfully modified');
            }
        })
        .catch((error) => {
            console.log(error.response);
            if (error && error.response.status === 409) {

                dispatch(passwordMismatch());
            }
            if (error && error.response.status === 400) {
                dispatch(badRequest(error.response.data.errors));
            }
        });
};

