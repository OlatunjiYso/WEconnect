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
        console.log('reached user Api service');
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
}

export default UserApi;