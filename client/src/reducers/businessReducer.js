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
        others: null,
        forbidden: null
    },
    awaiting: false,
    notFound: false,
    gotBusinesses: false,
    passwordMismatch: null,
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
        case 'NOT_FOUND': // Not getting a particular business
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


    // Reducers for Registering, Updating and Deleting businesses
        case 'ATTEMPT': // Wish to register || update || delete my business
            return {
                ...state,
                awaiting: action.awaiting,
                errors: {
                     ...state.errors,
                    validationErrors: action.error,
                    conflict: action.error,
                    others: action.error,
                    forbidden: action.error
                }
            };
        case 'BAD_REQUEST': // Business registration || update  was not successful
            return {
                ...state,
                awaiting: action.awaiting,
                errors: { ...state.errors, validationErrors: action.error }
            };
        case 'CONFLICT': // Business registration || update was conflicting
        return {
            ...state,
            awaiting: action.awaiting,
            errors: { ...state.errors, conflict: action.error }
        };
        case 'FORBIDDEN': // Business update || delete by authorized persons
        return {
            ...state,
            awaiting: action.awaiting,
            errors: { ...state.errors, forbidden: action.error }
        };
        case 'UNKNOWN_ERROR': // Unknown error occured
        return {
            ...state,
            awaiting: action.awaiting,
            errors: { ...state.errors, others: action.error }
        };
        case 'PASSWORD_MISMATCH': // Unknown error occured
        return {
            ...state,
            awaiting: action.awaiting,
            passwordMismatch: action.error
        };
        case 'SUCCESS': // Business Registration || Update ||delete was successful
        return {
            ...state,
            awaiting: action.awaiting,
            errors: {
                ...state.errors,
               validationErrors: action.error,
               conflict: action.error,
               others: action.error,
               forbidden: action.error
           },
           passwordMismatch: action.error
        };

        case 'STOP_SPINNER': // STOP SPINNER
        return {
            ...state,
            awaiting: action.awaiting,
        };
        default:
            return state;
    }
};

export default businessReducer;