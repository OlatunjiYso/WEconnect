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
     * @description - action for getting a particular business
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
     * @description - action responsible for flagging Forbidden case error
     *
     *@param {obj} error - forbidden error message
     *
     * @return {obj} -actionable object containing type and payload
     */
    static forbiddenRequest(error) {
        return {
            type: 'FORBIDDEN',
            awaiting: false,
            error
        };
    }

    /**
     * @description - action responsible for flagging some non statndard errors
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
     * @description - loads spinner for in attempt to register || update || delete business
     *
     *
     * @return {obj} -actionable object containing type and payload
     */
    static attempt() {
        return {
            type: 'ATTEMPT',
            awaiting: true,
        };
    }

    /**
     * @description - displays password mismatch in attempt to delete a business
     *
     *
     * @return {obj} -actionable object containing type and payload
     */
    static passwordMismatch() {
        return {
            type: 'PASSWORD_MISMATCH',
            awaiting: false,
            error: true
        };
    }

    /**
     * @description - loads spinner after successful attempt to register || update || delete business
     *
     *
     * @return {obj} -actionable object containing type and payload
     */
    static success() {
        return {
            type: 'SUCCESS',
            awaiting: false,
            error: null
        };
    }
        /**
     * @description - stops spinner after  attempt to register || update || delete business
     *
     *
     * @return {obj} -actionable object containing type and payload
     */
    static stopSpinner() {
        return {
            type: 'STOP_SPINNER',
            awaiting: false
        };
    }
}

export default BusinessActions;