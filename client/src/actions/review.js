import reviewApi from '../service/reviewApi';
import setToken from '../helpers/authorization';
import { alertSuccess, alertError } from '../actions/flashMessage';
import { MAKING_REVIEW_REQUEST, REVIEW_SUCCESS, REVIEW_ERROR } from '../actions/types';

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
    reviewApi.postReview(businessId, review)
        .then((response) => {
            dispatch(isRequesting(false));
            dispatch(reviewSuccess(response.data));
            alertSuccess('Your review was added');
        })
        .catch((error) => {
            dispatch(isRequesting(false));
            dispatch(reviewError(error.response));
            alertError('Please login to give a review');
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
    reviewApi.updateReview(businessId, reviewId, newReview)
        .then((response) => {
            dispatch(isRequesting(false));
            dispatch(reviewSuccess(response.data));
            alertSuccess('Review updated!');
        })
        .catch((error) => {
            dispatch(isRequesting(true));
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
    reviewApi.deleteReview(businessId, reviewId)
        .then((response) => {
            dispatch(isRequesting(false));
            dispatch(reviewSuccess(response.data));
            alertSuccess('Review deleted!');
        })
        .catch((error) => {
            dispatch(isRequesting(false));
            dispatch(reviewError(error.response));
        });
};
