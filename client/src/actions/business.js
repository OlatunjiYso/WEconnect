/**
 * @description class that contains all business actions
 *
 */
class BusinessActions {
    /**
     * @description - action responsible for getting all businesses
     *
     * @param {array} businesses - array of businesses
     * 
     * @return {obj} -actionable object containing type and payload
     */
    static getAllBusinesses(businesses) {
        return {
            type: 'FETCHED_BUSINESSES',
            allBusinesses: businesses
        };
    }

     /**
     * @description - action for storing a particular business
     *
     *@param {obj} business - a business object
     * 
     * @return {obj} -actionable object containing type and payload
     */
    static getBusiness(business) {
        return {
            type: 'FETCHED_BUSINESS',
            business,
            reviews: business.Reviews
        };
    }

    /**
     * @description - action for getting a user's business
     *
     *@param {obj} businesses - an array of user's businesses
     *
     *
     * @return {obj} -actionable object containing type and payload
     */
    static gotMyBusinesses(businesses) {
        return {
            type: 'FOUND_MY_BUSINESSES',
            businesses,
            gotBusinesses: true
        };
    }

    /**
     * @description - action for getting a user's business
     *
     *@param {obj} businesses - an array of user's businesses
     *
     *
     * @return {obj} -actionable object containing type and payload
     */
    static gotNoBusiness() {
        return {
            type: 'GOT_NO_BUSINESSES',
            gotBusinesses: false
        };
    }

    /**
     * @description - action for sending business not found message
     *
     * @return {obj} -actionable object containing type and payload
     */
    static notFound() {
        return {
            type: 'NOT_FOUND',
            notFound: true
        };
    }

     /**
     * @description - action for sending business information to be previewed
     *
     *@param {obj} business - business object to be previewed

     * @return {obj} -actionable object containing type and business information
     */
    static previewBusiness(business) {
        return {
            type: 'PREVIEW',
            business
        };
    }

     /**
     * @description - action responsible for flagging conflicts
     *
     *@param {obj} error - the conflict error message
     *
     * @return {obj} -actionable object containing type and payload
     */
    static conflict(error) {
        return {
            type: 'CONFLICT',
            awaiting: false,
            error
        };
    }

    /**
     * @description - action responsible for flagging badrequest
     *
     *@param {obj} errors - an array of validation errors
     *
     * @return {obj} -actionable object containing type and payload
     */
    static badRequest(errors) {
        return {
            type: 'BAD_REQUEST',
            awaiting: false,
            error: errors
        };
    }
    /**
     * @description - action responsible for redirecting to user profile after success
     *
     *
     * @return {obj} -actionable object containing type and payload
     */
    static unknownError() {
        return {
            type: 'UNKNOWN_ERROR',
            awaiting: false,
        };
    }

    /**
     * @description - action responsible for flagging badrequest
     *
     *@param {obj} errors - an array of validation errors
     *
     * @return {obj} -actionable object containing type and payload
     */
    static createAttempt() {
        return {
            type: 'ATTEMPT',
            awaiting: true,
            error: null
        };
    }

    /**
     * @description - action responsible for redirecting to user profile after success
     *
     *
     * @return {obj} -actionable object containing type and payload
     */
    static createSuccess() {
        return {
            type: 'SUCCESS',
            awaiting: false,
            error: null
        };
    }
     /**
     * @description - action responsible for updating a business
     *
     * @return {obj} -actionable object containing type and payload
     */
    static UpdateBusiness() {
        return {
            type: '',
            payload: {}
        };
    }

     /**
     * @description - action responsible for deleting a business
     *
     * @return {obj} -actionable object containing type and payload
     */
    static deleteBusiness() {
        return {
            type: '',
            payload: {}
        };
    }
}

export default BusinessActions;