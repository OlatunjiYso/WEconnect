import businessApi from '../service/businessApi';
import history from '../history';
import setToken from '../helpers/authorization';
import {
    FETCH_BUSINESSES_SUCCESS, FETCH_BUSINESS_SUCCESS, FIND_MY_BUSINESSES_SUCCESS, FIND_MY_BUSINESSES_FAILED,
    FETCH_BUSINESS_FAILED, MAKING_BUSINESS_REQUEST, REGISTER_BUSINESS_FAILED, UPDATE_BUSINESS_FAILED, DELETE_BUSINESS_FAILED
} from '../actions/types';
/**
 * @description - starts spinner when awaiting a response
 *
 * @param {bool} bool - true lor false
 * @return {obj} -actionable object containing type and payload
 */
export const isRequesting = bool => ({
    type: MAKING_BUSINESS_REQUEST,
    bool
});


/**
 * @description - action responsible for getting all businesses
 *
 * @param { array } businesses - array of businesses
 * @param {object} filterUsed - filter used in filtering business
 *
 * @return {obj} -actionable object containing type and payload
 */
export const getAllBusinessesSuccess = (businesses, filterUsed) => ({
    type: FETCH_BUSINESSES_SUCCESS,
    allBusinesses: businesses,
    selectedFilter: filterUsed
});

/**
* @description - action for getting a particular business
*
*@param {obj} business - a business object
*
* @return {obj} -actionable object containing type and payload
*/
export const getBusinessSuccess = business => ({
    type: FETCH_BUSINESS_SUCCESS,
    business,
    reviews: business.Reviews
});

/**
 * @description - action for fetching all businesses of a particular user
 *
 *@param {obj} businesses - an array of user's businesses
 *
 *
 * @return {obj} -actionable object containing type and payload
 */
export const getMyBusinessesSuccess = businesses => ({
    type: FIND_MY_BUSINESSES_SUCCESS,
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
    type: FIND_MY_BUSINESSES_FAILED,
    gotBusinesses: false
});

/**
 * @description - action for sending business not found message
 *
 * @param {object} error - error message
 *@param {object} filter - filter used for the search
 * @return {obj} -actionable object containing type and payload
 */
export const businessNotFound = (error, filter) => ({
    type: FETCH_BUSINESS_FAILED,
    error,
    filter,
    business: [],
});

/**
* @description - action responsible for flagging business registeration errors
*
*@param {obj} error - the error message
*
* @return {obj} -actionable object containing type and payload
*/
export const registerBusinessFailure = error => ({
    type: REGISTER_BUSINESS_FAILED,
    error
});

/**
* @description - action responsible for flagging business update errors
*
*@param {obj} error - the error message
*
* @return {obj} -actionable object containing type and payload
*/
export const updateBusinessFailure = error => ({
    type: UPDATE_BUSINESS_FAILED,
    error
});

/**
* @description - action responsible for flagging business delete errors
*
*@param {obj} error - the error message
*
* @return {obj} -actionable object containing type and payload
*/
export const deleteBusinessFailure = error => ({
    type: DELETE_BUSINESS_FAILED,
    error
});


/**
 * @description - fetches all businesses from database
 *
 *@param {object} filter - object containing location and category
 * @return {obj} -actionable object containing type and payload
 */
export const fetchAllBusinesses = filter => (dispatch) => {
    businessApi.getAllBusinesses(filter)
        .then((response) => {
            const { businesses } = response.data;
            dispatch(getAllBusinessesSuccess(businesses, filter));
        })
        .catch((error) => {
            dispatch(businessNotFound(error.response, filter));
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
            dispatch(getBusinessSuccess(business));
        })
        .catch((error) => {
                dispatch(businessNotFound(error.response));
                history.push('/businesses');
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
    dispatch(isRequesting(true));
    businessApi.registerBusiness(business)
        .then(() => {
            dispatch(isRequesting(false));
            history.push('/userProfile');
        })
        .catch((error) => {
            dispatch(registerBusinessFailure(error.response));
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
    dispatch(isRequesting(true));
    businessApi.updateBusiness(businessId, business)
        .then(() => {
            dispatch(isRequesting(false));
            history.push(`/businesses/${businessId}`);
        })
        .catch((error) => {
            dispatch(updateBusinessFailure(error.response));
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
    dispatch(isRequesting(true));
    businessApi.deleteBusiness(pass, businessId)
        .then(() => {
            dispatch(isRequesting(false));
            history.push('/userProfile');
        })
        .catch((error) => {
            dispatch(deleteBusinessFailure(error.response));
        });
};
