import fakebusiness from '../dummy/all_businesses';

const initialState = {
    businesses: fakebusiness,
    filter: {
        category: 'All',
        state: 'Lagos'
    },
    business: {},
    notFound: false,
    myReviews: [],
    myBusinesses: [],
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

        default:
            return state;
    }
};

export default businessReducer;