import axios from 'axios';

const rootUrl = 'api/v1/businesses';

/**
 * @class BusinessApi
 *
 * @extends {React.Component}
 */
class BusinessApi {
    /**
     * @description - api endpoint call that gets all businesses
     *
     *@param {object} filter - obvject containing location and category
     * @return { undefined } asynchronuos call can give varying outcome
     */
    static getAllBusinesses(filter) {
        return axios.get(`${rootUrl}?category=${filter.category}&&location=${filter.state}`);
    }

    /**
     * @description - api endpoint call gets a particular business
     *
     *@param {string} businessId
     * @return { undefined } asynchronuos call can give varying outcome
     */
    static getThisBusiness(businessId) {
        return axios.get(`${rootUrl}/${businessId}`);
    }

    /**
     * @description - api endpoint register a business
     *
     *@param { object } business - business information to be persisted
     * @return { undefined } asynchronuos call can give varying outcome
     */
    static registerBusiness(business) {
        return axios.post(`${rootUrl}/`, (business));
    }

    /**
     *@description - api endpoint that updates a business
     *
     *@param { string } businessId - id of business
     *@param { object } business - business information to be persisted
     *
     *@return { undefined } asynchronuos call can give varying outcome
     */
    static updateBusiness(businessId, business) {
        return axios.put(`${rootUrl}/${businessId}`, (business));
    }

    /**
     *@description - api endpoint that deletes a business
     *
     *@param { string } pass - password of business owner
     *@param { string } businessId - id of business
     *
     *@return { undefined } asynchronuos call can give varying outcome
     */
    static deleteBusiness(pass, businessId) {
        return axios.delete(`${rootUrl}/${businessId}`, { data: pass });
    }
}

export default BusinessApi;