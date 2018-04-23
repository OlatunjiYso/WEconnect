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
     * @description - action responsible for getting a particular business
     *
     *@param {obj} business - a business object
     * 
     * @return {obj} -actionable object containing type and payload
     */
    static getBusiness(business) {
        return {
            type: 'FETCHED_BUSINESSES',
            singleBusinesses: business
        };
    }

     /**
     * @description - action responsible for creating a business
     *
     * @return {obj} -actionable object containing type and payload
     */
    static CreateBusiness() {
        return {
            type: '',
            payload: {}
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