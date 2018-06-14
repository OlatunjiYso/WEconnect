const initialState = {
    awaitingResponse: false,
    response: {},
    reviewErrors: {}
};
const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MAKING_REVIEW_REQUEST':
            return {
                ...state,
                awaitingResponse: action.bool,
            };
        case 'REVIEW_SUCCESS':
            return {
                ...state,
                response: action.response
            };
        case 'REVIEW_ERROR':
            return {
                ...state,
                reviewErrors: action.error
            };
        default:
            return state;
    }
};

export default reviewReducer;