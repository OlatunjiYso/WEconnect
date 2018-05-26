const initialState = {
    awaitingResponse: false,
    successMessage: null,
    errors: {},
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_REQUESTING':
            return {
                ...state,
                awaitingResponse: action.bool,
            };
        case 'REQUEST_ERROR':
            return {
                ...state,
                errors: action.error
            };
        case 'SUCCESS':
            return {
                ...state,
                successMessage: action.response
            };
        default:
            return state;
    }
};

export default userReducer;