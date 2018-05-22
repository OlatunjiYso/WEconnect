import axios from 'axios';

const rootUrl = 'https://weconnect-main.herokuapp.com/api/v1/auth';

/**
 * @class UserApi
 *
 * @extends {React.Component}
 */
class UserApi {
    /**
     * @description - api endpoint call that signs up a new user
     *
     * @param {object} newUser - object holding new user information
     *
     * @return { undefined } asynchronuos call can give varying outcome
     */
    static signup(newUser) {
        return axios.post(`${rootUrl}/signup`, (newUser));
    }

    /**
     * @description - api endpoint call that logins in a user
     *
     * @param {object} user - object holding user information
     *
     * @return { undefined } asynchronuos call can give varying outcome
     */
    static login(user) {
        return axios.post(`${rootUrl}/login`, (user));
    }

    /**
     * @description - api endpoint that fetches a users business
     *
     *
     * @return { undefined } asynchronuos call can give varying outcome
     */
    static getMyBusinesses() {
        return axios.get(`${rootUrl}/myBusiness`);
    }

    /**
     * @description - api endpoint that changes a user's password
     *
     *@param {object} passwords - object containing both old and new passwords
     * @return { undefined } asynchronuos call can give varying outcome
     */
    static changePassword(passwords) {
        return axios.post(`${rootUrl}/passwords`, (passwords));
    }

    /**
     * @description - api endpoint that changes a user's email and username
     *
     *@param {string} userId - id of user
     *@param {object} details - object containing email and username
     *
     * @return { undefined } asynchronuos call can give varying outcome
     */
    static changeDetails(userId, details) {
        return axios.put(`${rootUrl}/profile/${userId}`, (details));
    }

     /**
     * @description - api endpoint that changes a user's email and username
     *
     *
     * @return { undefined } asynchronuos call can give varying outcome
     */
    static changePicture() {
        return axios.get(`${rootUrl}`);
    }
}

export default UserApi;