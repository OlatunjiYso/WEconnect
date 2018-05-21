import history from '../history';
import userApi from '../service/userApi';
import setToken from '../helpers/authorization';

import { FOUND_MY_BUSINESSES, GOT_NO_BUSINESSES } from '../actions/types';

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
