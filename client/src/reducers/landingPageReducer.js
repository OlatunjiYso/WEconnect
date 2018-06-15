const initialState = {
    landingPageFilter: {
        category: null,
        state: 'location'
    }
};
const landingPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                landingPageFilter: {
                    ...state.landingPageFilter, category: action.category
                },
            };
        case 'CLEAR_CATEGORY':
            return {
                ...state,
                landingPageFilter: {
                    ...state.landingPageFilter, category: action.category
                },
            };
        default:
            return state;
    }
};

export default landingPageReducer;