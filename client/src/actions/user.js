import alertify from 'alertifyjs';

import history from '../history';
import userApi from '../service/userApi';
import setToken from '../helpers/authorization';

import {
    FOUND_MY_BUSINESSES, GOT_NO_BUSINESSES, IS_REQUESTING,
    SUCCESS, REQUEST_ERROR
} from '../actions/types';

/**
     * @description - starts spinner when awaiting a response
     *
     * @param {bool} bool - true lor false
     * @return {obj} -actionable object containing type and payload
     */
    export const isRequesting = bool => ({
        type: IS_REQUESTING,
        bool
    });

/**
* @description - action responsible for flagging errors
*
*@param {obj} error - the conflict error message
*
* @return {obj} -actionable object containing type and payload
*/
export const failureResponse = error => ({
    type: REQUEST_ERROR,
    error
});

/**
 * @description - indicates success after successful attempt
 *
 *@param {object} message - response object
 * @return {obj} -actionable object containing type and payload
 */
export const success = message => ({
    type: SUCCESS,
    response: message
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
    dispatch(isRequesting(true));
    console.log(passwords);
    userApi.changePassword(passwords)
        .then((response) => {
            if (response.data.message === 'Your password remains unchanged') {
                // dispatch(success(false));
                alertify.set('notifier', 'position', 'top-right');
                alertify.success('No changes, Your password remains the same');
            } else {
                // dispatch(success());
                alertify.set('notifier', 'position', 'top-right');
                alertify.success('Password successfully modified');
            }
            dispatch(isRequesting(false));
        })
        .catch((error) => {
            console.log(error.response);
            // if (error && error.response.status === 401) {
            //     dispatch(passwordMismatch());
            // }
            // if (error && error.response.status === 400) {
                dispatch(failureResponse(error.response.data));
            // }
            dispatch(isRequesting(false));
        });
};

/**
* @description - method responsible for changing a user's information
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
            dispatch(success(response.data.message));
            dispatch(isRequesting(false));
        })
        .catch((error) => {
            dispatch(failureResponse(error.response.data));
            dispatch(isRequesting(false));
        });
};

