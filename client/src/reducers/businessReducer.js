import fakebusiness from '../dummy/all_businesses';

const initialState = {
    businesses: fakebusiness,
    filter: {
        category: 'All',
        state: 'Lagos'
    },
    business: {},
    myReviews: [],
    myBusinesses: [],
    errors: {
        validationErrors: null,
        conflict: null,
        others: null
    },
    awaiting: false,
    notFound: false,
    gotBusinesses: false,
};

const businessReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHED_BUSINESSES': // Fetching general business
            return {
                ...state,
                businesses: action.allBusinesses
            };
        case 'FETCHED_BUSINESS': // Fetching a particular business
            return {
                ...state,
                business: action.business,
                myReviews: action.reviews
            };
        case 'NOT_FOUND': // Not getting a particulat business
            return {
                ...state,
                notFound: action.notFound
            };
        case 'FOUND_MY_BUSINESSES': // Fetching my own business
            return {
                ...state,
                myBusinesses: action.businesses,
                gotBusinesses: action.gotBusinesses,
            };
        case 'GOT_NO_BUSINESSES': // Fetching my business, but I have got none
            return {
                ...state,
                gotBusinesses: action.gotBusinesses,
            };
        case 'PREVIEW': // Wish to preview my business before creating
            return {
                ...state,
                trialBusiness: action.business,
            };
        case 'ATTEMPT': // Wish to register my business
            return {
                ...state,
                awaiting: action.awaiting,
                errors: { ...state.errors,
                    validationErrors: action.error,
                    conflict: action.error,
                    others: action.error
                }
            };
        case 'BAD_REQUEST': // Business registration  wasnt successful
            return {
                ...state,
                awaiting: action.awaiting,
                errors: { ...state.errors, validationErrors: action.error }
            };
        case 'CONFLICT': // Business registration  wasnt successful
        return {
            ...state,
            awaiting: action.awaiting,
            errors: { ...state.errors, validationErrors: action.error }
        };
        case 'UNKNOWN_ERROR': // Unknown error occured
        return {
            ...state,
            awaiting: action.awaiting,
            errors: { ...state.errors, others: action.error }
        };
        case 'SUCCESS': // Wish to preview my business before creating
        return {
            ...state,
            awaiting: action.awaiting,
            errors: { ...state.errors, validationErrors: action.error }
        };
        default:
            return state;
    }
};

export default businessReducer;