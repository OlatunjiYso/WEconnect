import fakebusiness from '../dummy/all_businesses';

const initialState = {
    businesses: fakebusiness,
    filter: {
        category: 'All',
        state: 'Lagos'
    },
    business: {},
    notFound: false
};

const businessReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHED_BUSINESSES':
            return {
                ...state,
                businesses: action.allBusinesses
            };
        case 'FETCHED_BUSINESS':
            return {
                ...state,
                business: action.business,
                myReviews: action.reviews
            };
        case 'NOT_FOUND':
            return {
                ...state,
                notFound: action.notFound
            };


        default:
            return state;
    }
};

export default businessReducer;