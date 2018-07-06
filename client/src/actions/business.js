import axios from 'axios';

import cloudConfig from '../cloudConfig';
import { alertSuccess, alertError } from '../actions/flashMessage';
import businessApi from '../service/businessApi';
import userApi from '../service/userApi';
import history from '../history';
import setToken from '../helpers/authorization';
import {
    FETCH_BUSINESSES_SUCCESS, FETCH_BUSINESS_SUCCESS, FIND_MY_BUSINESSES_SUCCESS,
    FETCH_BUSINESS_FAILED, MAKING_BUSINESS_REQUEST, REGISTER_BUSINESS_FAILED, UPDATE_BUSINESS_FAILED, DELETE_BUSINESS_FAILED,
    SET_CATEGORY, CLEAR_CATEGORY
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
 * @description - sets value into the landing page business filter
 *
 * @param {string} chosenCategory - the category user picks from the landing page
 * @return {obj} -actionable object containing type and payload
 */
export const setCategory = chosenCategory => ({
    type: SET_CATEGORY,
    category: chosenCategory
});

/**
 * @description - removes value from the landing page business filter
 *
 * @return {obj} -actionable object containing type and payload
 */
export const clearCategory = () => ({
    type: CLEAR_CATEGORY,
    category: null
});

/**
 * @description - action called when all businesses were fetched
 *
 * @param { array } businesses - array of businesses
 * @param {object} filterUsed - filter used in filtering business
 * @param {integer} pages - total pages
 *
 * @return {obj} -actionable object containing type and payload
 */
export const getAllBusinessesSuccess = (businesses, filterUsed, pages) => ({
    type: FETCH_BUSINESSES_SUCCESS,
    allBusinesses: businesses,
    selectedFilter: filterUsed,
    pages
});

/**
* @description - action called when a particular business is fetched
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
 * @param {int} pageNumber - pageNumber to show
 * @return {obj} -actionable object containing type and payload
 */
export const fetchAllBusinesses = (filter, pageNumber) => (dispatch) => {
    businessApi.getAllBusinesses(filter, pageNumber)
        .then((response) => {
            const { businesses } = response.data;
            const { pages } = response.data;
            dispatch(getAllBusinessesSuccess(businesses, filter, pages));
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
 * @description - method responsible for fetching a users business
 *
 * @return { obj } - actionable object containing payload and type
 */
export const fetchMyBusinesses = () => (dispatch) => {
    setToken(localStorage.token);
    userApi.getMyBusinesses()
        .then((response) => {
                const { businesses } = response.data;
                dispatch(getMyBusinessesSuccess(businesses));
        })
        .catch(() => {
        });
};

/**
 *@description - registers a business
 *
 * @param { string } cloudImageUrl - contains string of uploaded image
 *@param { object } business - object containing information of business to be registered
 *
 *@return { object } -actionable object containing type and payload
 */
export const registerBusiness = (cloudImageUrl, business) => (dispatch) => {
    business.image = cloudImageUrl;
    setToken(localStorage.token);
    dispatch(isRequesting(true));
    businessApi.registerBusiness(business)
        .then(() => {
            dispatch(isRequesting(false));
            history.push('/userProfile');
        })
        .catch((error) => {
            dispatch(isRequesting(false));
            dispatch(registerBusinessFailure(error.response));
            alertError('Business not created');
        });
};

/**
 * @description handles business creation request
 *
 * @param { object } image - contains object of business image to be uploaded
 * @param { object } business - contains object of business to be registered
 *
 * @returns { function } create business action - a call to create business
 */
export const initiateBusinessRegistration = (image, business) => (
  (dispatch) => {
    let cloudImageUrl = cloudConfig.defaultImageUrl;
    dispatch(isRequesting(true));
    if (image.imageFile.name) {
      delete axios.defaults.headers.common.token;
      const imageData = new FormData();
      imageData.append('file', image.imageFile);
      imageData.append('upload_preset', cloudConfig.uploadPreset);
      return axios.post(cloudConfig.cloudinaryUrl, imageData)
        .then((response) => {
          dispatch(isRequesting(false));
          cloudImageUrl = response.data.url;
          return dispatch(registerBusiness(cloudImageUrl, business));
        }).catch(() => {
          dispatch(isRequesting(false));
          alertError('Image upload failed');
        });
    }
       return dispatch(registerBusiness(cloudImageUrl, business));
  }
);


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
 * @description handles business update request
 *
 * @param { object } image - contains object of business image to be uploaded
 * @param { object } business - contains object of business to be updated
 *
 * @returns { function } update business action - a call to update business
 */
export const initiateBusinessUpdate = (image, business) => (
    (dispatch) => {
      let cloudImageUrl = business.image;
      dispatch(isRequesting(true));
      if (image.imageFile.name) {
        delete axios.defaults.headers.common.token;
        const imageData = new FormData();
        imageData.append('file', image.imageFile);
        imageData.append('upload_preset', cloudConfig.uploadPreset);
        return axios.post(cloudConfig.cloudinaryUrl, imageData)
          .then((response) => {
            dispatch(isRequesting(false));
            cloudImageUrl = response.data.url;
            business.image = cloudImageUrl;
            return dispatch(updateBusiness(business.id, business));
          }).catch(() => {
            dispatch(isRequesting(false));
            alertError('Image upload failed');
          });
      }
         dispatch(isRequesting(false));
         return dispatch(updateBusiness(business.id, business));
    }
  );


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
            alertSuccess('Business successfully deleted');
        })
        .catch((error) => {
            dispatch(isRequesting(false));
            dispatch(deleteBusinessFailure(error.response));
            alertError('Invalid password. Business not deleted');
        });
};
