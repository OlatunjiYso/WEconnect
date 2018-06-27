import axios from 'axios';

const rootUrl = 'api/v1/businesses';

/**
 * @class ReviewApi
 *
 */
class ReviewApi {
    /**
     *@description - api endpoint call gets all review a business has
     *
     *@param {string} businessId - id of business whose review is to be gotten
     *@return { undefined } asynchronuos call can give varying outcome
     */
    static getAllReviews(businessId) {
        return axios.get(`${rootUrl}/${businessId}/reviews`);
    }


    /**
     *@description - api endpoint call that creates a review.
     *
     *@param {string} businessId - id of business to be reviewed
     *@param {object} review - review object
     *@return { undefined } asynchronuos call can give varying outcome
     */
    static postReview(businessId, review) {
        return axios.post(`${rootUrl}/${businessId}/reviews`, (review));
    }

    /**
     * @description - api endpoint call that updates a review
     *
     *@param {string} businessId - id of business whose review is to be updated
     *@param {string} reviewId - id of review to be modified
     *@param {object} newReview - new review object
     *@return { undefined } asynchronuos call can give varying outcome
     */
    static updateReview(businessId, reviewId, newReview) {
        return axios.put(`${rootUrl}/${businessId}/reviews/${reviewId}`, (newReview));
    }

    /**
     *@description - api endpoint call that deletes a review
     *@param {string} businessId - id of business whose review is to be deleted
     *@param {string} reviewId - id of review to be deleted
     *
     *@return { undefined } asynchronuos call can give varying outcome
     */
    static deleteReview(businessId, reviewId) {
        return axios.delete(`${rootUrl}/${businessId}/reviews/${reviewId}`);
    }
}

export default ReviewApi;