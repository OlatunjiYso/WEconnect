import business from '../dummy/all_businesses';

const initialState = {
    businesses: business,
    filter: {
        category: 'All',
        state: 'Lagos'
    }
};
const businessReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHED_BUSINESSES':
            return {
                ...state,
                businesses: action.allBusinesses
            };

        default:
            return state;
    }
    };

export default businessReducer;