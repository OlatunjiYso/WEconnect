const initialState = {
    errors: {
        conflict: null,
        validationErrors: false,
        passwordMismatch: null,
        login: null,
    },
    awaitingResponse: false,
    user: null,
    authenticated: false,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ATTEMPT':
            return {
                ...state,
                awaitingResponse: action.awaiting,
                errors:
                    {
                        ...state.errors,
                        validationErrors: action.error,
                        conflict: action.error,
                        passwordMismatch: action.error,
                        login: action.error
                    },
            };
        case 'BAD_REQUEST':
            return {
                ...state,
                errors:
                    { ...state.errors, validationErrors: action.error },
                awaitingResponse: action.awaiting
            };
        case 'CONFLICT':
            return {
                ...state,
                errors:
                    { ...state.errors, conflict: action.error },
                awaitingResponse: action.awaiting
            };
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                awaitingResponse: action.awaiting,
                errors:
                    {
                        ...state.errors,
                        validationErrors: action.error,
                        conflict: action.error,
                        passwordMismatch: action.error,
                        login: action.error
                    },
                user: action.userDetails
            };
        case 'ON_BOARDING_SUCCESS':
            return {
                ...state,
                awaitingResponse: action.awaiting,
                authenticated: action.authenticated,
            };
        case 'SIGNIN_SUCCESS':
            return {
                ...state,
                awaitingResponse: action.awaiting,
                authenticated: action.authenticated,
                errors:
                    {
                        ...state.errors,
                        validationErrors: action.error,
                        conflict: action.error,
                        passwordMismatch: action.error,
                        login: action.error
                    }
            };
        case 'FAILED_SIGNIN':
            return {
                ...state,
                errors:
                    { ...state.errors, login: action.error },
                awaitingResponse: action.awaiting,
                authenticated: action.authenticated,
            };
        case 'PASSWORD_MISMATCH':
            return {
                ...state,
                errors:
                    { ...state.errors, passwordMismatch: action.misMatch },
                awaitingResponse: action.awaiting,
            };
        case 'AUTHENTICATED':
            return {
                ...state,
                authenticated: action.authenticated,
            };
        case 'UNAUTHENTICATED':
            return {
                ...state,
                authenticated: action.authenticated,
            };
        default:
            return state;
    }
};

export default authReducer;