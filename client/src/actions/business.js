import businessApi from '../service/businessApi';
import history from '../history';
import setToken from '../helpers/authorization';
import {
    FETCHED_BUSINESSES, FETCHED_BUSINESS, FOUND_MY_BUSINESSES, GOT_NO_BUSINESSES,
    NOT_FOUND, CONFLICT, BAD_REQUEST, FORBIDDEN, UNKNOWN_ERROR, ATTEMPT, PASSWORD_MISMATCH,
    SUCCESS, STOP_SPINNER
    } from '../actions/types';

    /**
     * @description - action responsible for getting all businesses
     *
     * @param { array } businesses - array of businesses
     *
     * @return {obj} -actionable object containing type and payload
     */
    export const gotAllBusinesses = businesses => ({
            type: FETCHED_BUSINESSES,
            allBusinesses: businesses
        });

     /**
     * @description - action for getting a particular business
     *
     *@param {obj} business - a business object
     *
     * @return {obj} -actionable object containing type and payload
     */
    export const gotBusiness = business => ({
            type: FETCHED_BUSINESS,
            business,
            reviews: business.Reviews
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
     * @description - action for sending business not found message
     *
     * @return {obj} -actionable object containing type and payload
     */
    export const notFound = () => ({
            type: NOT_FOUND,
            notFound: true
        });

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
     * @description - action responsible for flagging badrequest
     *
     *@param {obj} errors - an array of validation errors
     *
     * @return {obj} -actionable object containing type and payload
     */
    export const badRequest = errors => ({
            type: BAD_REQUEST,
            awaiting: false,
            error: errors
        });

    /**
     * @description - action responsible for flagging Forbidden case error
     *
     *@param {obj} error - forbidden error message
     *
     * @return {obj} -actionable object containing type and payload
     */
    export const forbiddenRequest = error => ({
            type: FORBIDDEN,
            awaiting: false,
            error
        });

    /**
     * @description - action responsible for flagging some non statndard errors
     *
     *
     * @return {obj} -actionable object containing type and payload
     */
    export const unknownError = () => ({
            type: UNKNOWN_ERROR,
            awaiting: false,
        });

    /**
     * @description - loads spinner for in attempt to register || update || delete business
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
     * @description - fetches all businesses from database
     *
     *
     * @return {obj} -actionable object containing type and payload
     */
    export const fetchAllBusinesses = () => (dispatch) => {
            businessApi.getAllBusinesses()
            .then((response) => {
                const { businesses } = response.data;
                dispatch(gotAllBusinesses(businesses));
            })
            .catch((error) => {
                console.log(error);
            });
        };

    /**
     *@description - fetches a specified business
     *
     *@param { string } businessId - id for the business of interest
     *
     *@return {obj} -actionable object containing type and payload
     */
    export const fetchThisBusiness = businessId => (dispatch) => {
        businessApi.getThisBusiness(businessId)
        .then((response) => {
            const { business } = response.data;
            dispatch(gotBusiness(business));
        })
        .catch((error) => {
            if (error.response.status === 404) {
                dispatch(notFound());
                history.push('/businesses');
            }
        });
    };

    /**
     *@description - registers a business
     *
     *@param { object } business - object containing information of business to be registered
     *
     *@return { object } -actionable object containing type and payload
     */
    export const registerBusiness = business => (dispatch) => {
        setToken(localStorage.token);
        dispatch(attempt());
        businessApi.registerBusiness(business)
        .then(() => {
            dispatch(success());
            history.push('/userProfile');
        })
        .catch((error) => {
            console.log(error);
            if (error && error.response.status === 401) {
                history.push('/login');
                dispatch(unknownError());
            }
            if (error && error.response.status === 400) {
                dispatch(badRequest(error.response.data.errors));
            }
            if (error && error.response.status === 409) {
                dispatch(conflict(error.response.data.message));
            }
        });
    };

     /**
     *@description - updates a business
     *
     *@param { string } businessId - id of business to be modified
     *@param { object } business - object containing information of business to be updated
     *
     *@return { object } -actionable object containing type and payload
     */
    export const updateBusiness = (businessId, business) => (dispatch) => {
        setToken(localStorage.token);
        dispatch(attempt());
        businessApi.updateBusiness(businessId, business)
        .then(() => {
            dispatch(success());
            // redirect to business page
            history.push(`/businesses/${businessId}`);
        })
        .catch((error) => {
            console.log(error);
            if (error && error.response.status === 400) {
                dispatch(badRequest(error.response.data.errors));
            }
            if (error && error.response.status === 401) {
                history.push('/login');
                dispatch(unknownError());
            }
            if (error && error.response.status === 409) {
                dispatch(conflict(error.response.data.message));
            }
            if (error && error.response.status === 403) {
                dispatch(forbiddenRequest(error.response.data.message));
            }
        });
    };

/**
     *@description - deletes a business
     *
     *@param { string } pass - password of business owner
     *@param { string } businessId - id of business to be modified
     *
     *@return { object } -actionable object containing type and payload
     */
    export const deleteBusiness = (pass, businessId) => (dispatch) => {
        setToken(localStorage.token);
        dispatch(attempt());
        businessApi.deleteBusiness(pass, businessId)
        .then(() => {
            dispatch(success());
            history.push('/userProfile');
        })
        .catch((error) => {
            console.log(error.response);
            if (error && error.response.status === 401) {
                dispatch(stopSpinner());
                history.push('/login');
            }
            if (error && error.response.status === 403) {
                dispatch(forbiddenRequest(error.response.data.message));
            }
            if (error && error.response.status === 422) {
                dispatch(passwordMismatch());
            }
        });
    };
