const initialState = {
    businesses: [],
    business: {},
    filter: { state: 'location', category: 'category' },
    myReviews: [],
    myBusinesses: [],
    errors: { },
    awaitingResponse: false,
    notFound: false,
    gotBusinesses: false,
};

const businessReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MAKING_BUSINESS_REQUEST':
            return {
                ...state,
                awaitingResponse: action.bool,
            };
        case 'FETCH_BUSINESSES_SUCCESS':
            return {
                ...state,
                businesses: action.allBusinesses,
                filter: action.selectedFilter
            };
        case 'FETCH_BUSINESS_SUCCESS':
            return {
                ...state,
                business: action.business,
                myReviews: action.reviews
            };
        case 'FETCH_BUSINESS_FAILED':
            return {
                ...state,
                errors: action.error,
                businesses: action.business,
                filter: action.filter
            };
        case 'FIND_MY_BUSINESSES_SUCCESS':
            return {
                ...state,
                myBusinesses: action.businesses,
                gotBusinesses: action.gotBusinesses,
            };
        case 'FIND_MY_BUSINESSES_FAILED':
            return {
                ...state,
                gotBusinesses: action.gotBusinesses,
            };

        case 'REGISTER_BUSINESS_FAILED':
            return {
                ...state,
                errors: action.error
            };
            case 'UPDATE_BUSINESS_FAILED':
            return {
                ...state,
                errors: action.error
            };
            case 'DELETE_BUSINESS_FAILED':
            return {
                ...state,
                errors: action.error
            };
        
        default:
            return state;
    }
};

export default businessReducer;