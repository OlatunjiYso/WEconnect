const initialState = {
    awaitingResponse: false,
    response: null,
    errors: {},
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_UPDATE_REQUEST':
            return {
                ...state,
                awaitingResponse: action.bool,
            };
        case 'USER_UPDATE_ERROR':
            return {
                ...state,
                errors: action.error
            };
        case 'USER_UPDATE_SUCCESS':
            return {
                ...state,
                response: action.response,
                errors: {}
            };
        default:
            return state;
    }
};

export default userReducer;