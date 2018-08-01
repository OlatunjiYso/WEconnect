const initialState = {
    signupErrors: {},
    signinErrors: {},
    awaitingResponse: false,
    user: null,
    response: {}
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MAKING_AUTH_REQUEST':
            return {
                ...state,
                awaitingResponse: action.bool,
            };
        case 'SIGNIN_REQUEST_ERROR':
            return {
                ...state,
                signinErrors: action.error
            };
        case 'SIGNUP_REQUEST_ERROR':
            return {
                ...state,
                signupErrors: action.error
            };
        case 'SIGNIN_REQUEST_SUCCESS':
            return {
                ...state,
                response: action.response
            };
        case 'SIGNUP_REQUEST_SUCCESS':
            return {
                ...state,
                response: action.response
            };
        case 'ON_BOARDING_SUCCESS':
            return {
                ...state,
                response: action.response
            };
       case 'SET_CURRENT_USER':
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};

export default authReducer;