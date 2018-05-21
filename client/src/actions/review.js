import reviewApi from '../service/reviewApi';
import history from '../history';
import setToken from '../helpers/authorization';

    
    /**
     *@description - posts a review
     *
     *@param { string } businessId - id of business that is to be reviewed
     *@param { object } review - object containing information of review to be created
     *
     *@return { object } -actionable object containing type and payload
     */
    export const postReview = (businessId, review) => {
        setToken(localStorage.token);
        reviewApi.postReview(businessId, review)
        .then(() => {
            history.push(`/businessProfile/${businessId}`);
        })
        .catch((error) => {
            console.log(error.response);
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
    export const updateReview = (businessId, reviewId, newReview) => {
        setToken(localStorage.token);
        reviewApi.updateReview(businessId, reviewId, newReview)
        .then(() => {
            this.setState({
                ...this.state,
               isFetching: null
            });
        })
        .catch((error) => {
            this.setState({
                ...this.state,
               isFetching: null
            });
            if (error && error.response.status === 401) {
                history.push('/login');
            }
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
    export const deleteReview = (businessId, reviewId) => {
        setToken(localStorage.token);
        reviewApi.deleteReview(businessId, reviewId)
        .then(() => {
            this.setState({
                ...this.state,
               isFetching: null
            });
        })
        .catch((error) => {
            this.setState({
                ...this.state,
               isFetching: null
            });
            if (error && error.response.status === 401) {
                history.push('/login');
            }
        });
    };
