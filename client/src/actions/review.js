import reviewApi from '../service/reviewApi';
import setToken from '../helpers/authorization';
import { alertSuccess, alertError } from '../actions/flashMessage';
import { MAKING_REVIEW_REQUEST, REVIEW_SUCCESS, REVIEW_ERROR, GET_ALL_REVIEW, MAKE_REVIEW_EDITABLE } from '../actions/types';

/**
* @description - starts spinner when awaiting a response
*
* @param {bool} bool - true lor false
* @return {obj} -actionable object containing type and payload
*/
export const isRequesting = bool => ({
    type: MAKING_REVIEW_REQUEST,
    bool
});

/**
* @description - sends a response after a successful review action
*
* @param {object} response - success response
* @return {obj} -actionable object containing type and payload
*/
export const reviewSuccess = response => ({
    type: REVIEW_SUCCESS,
    response
});


/**
* @description - updates the array of reviews in store
*
* @param {object} reviews - the reviews of thre business
* @return {obj} -actionable object containing type and payload
*/
export const getAllBusinessReview = reviews => ({
    type: GET_ALL_REVIEW,
    reviews
});

/**
* @description - makes a review editable
* @param {number} id - id of review to be edited
*
* @return {obj} -actionable object containing type and payload
*/
export const makeEditable = id => ({
    type: MAKE_REVIEW_EDITABLE,
    id
});


/**
* @description - sends an error message after an unsuccessful review action
*
* @param {object} error - error message
* @return {obj} -actionable object containing type and payload
*/
export const reviewError = error => ({
    type: REVIEW_ERROR,
    error
});

/**
 *@description - get all reviews for a business
 *
 *@param { string } businessId - id of business that is to be reviewed
 *@param { object } review - object containing information of review to be created
 *
 *@return { object } -actionable object containing type and payload
 */
export const getAllReviews = businessId => (dispatch) => {
    setToken(localStorage.token);
    dispatch(isRequesting(true));
    return reviewApi.getAllReviews(businessId)
        .then((response) => {
            dispatch(isRequesting(false));
            dispatch(getAllBusinessReview(response.data.reviews));
        })
        .catch((error) => {
            dispatch(isRequesting(false));
            dispatch(reviewError(error.response.data.reviews));
        });
};


/**
 *@description - posts a review
 *
 *@param { string } businessId - id of business that is to be reviewed
 *@param { object } review - object containing information of review to be created
 *
 *@return { object } -actionable object containing type and payload
 */
export const postReview = (businessId, review) => (dispatch) => {
    setToken(localStorage.token);
    dispatch(isRequesting(true));
    return reviewApi.postReview(businessId, review)
        .then((response) => {
            dispatch(isRequesting(false));
            dispatch(reviewSuccess(response.data));
            alertSuccess('Your review was added');
            dispatch(getAllReviews(businessId));
        })
        .catch((error) => {
            dispatch(isRequesting(false));
            dispatch(reviewError(error.response.status));
            if (error.response.status === 400) {
                alertError('Please enter your review');
            } else {
                alertError('Please login to give a review');
            }
        });
};

/**
*@description - updates a review
*
*@param { string } businessId - id of business whose review is to be modified
*@param { string } reviewId - id of review that is to be modified
*@param { object } newReview - object containing information of new review to be created
*
*@return { object } -actionable object containing type and payload
*/
export const updateReview = (businessId, reviewId, newReview) => (dispatch) => {
    setToken(localStorage.token);
    dispatch(isRequesting(true));
    return reviewApi.updateReview(businessId, reviewId, newReview)
        .then((response) => {
            dispatch(isRequesting(false));
            dispatch(reviewSuccess(response.data));
            alertSuccess('Review updated!');
            dispatch(getAllReviews(businessId));
        })
        .catch((error) => {
            dispatch(isRequesting(false));
            dispatch(reviewError(error.response));
        });
};

/**
*@description - deletes a review
*
*@param { string } businessId - id of business whose review is to be deleted
*@param { string } reviewId - id of review that is to be deleted
*
*@return { object } -actionable object containing type and payload
*/
export const deleteReview = (businessId, reviewId) => (dispatch) => {
    setToken(localStorage.token);
    dispatch(isRequesting(true));
    return reviewApi.deleteReview(businessId, reviewId)
        .then((response) => {
            dispatch(isRequesting(false));
            dispatch(reviewSuccess(response.data));
            alertSuccess('Review deleted!');
            dispatch(getAllReviews(businessId));
        })
        .catch((error) => {
            dispatch(isRequesting(false));
            dispatch(reviewError(error.response));
        });
};
