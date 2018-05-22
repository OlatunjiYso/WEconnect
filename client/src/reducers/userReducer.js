const initialState = {
    errors: {
        conflict: null,
        validationErrors: false,
        passwordMismatch: null,
        login: null,
    },
    awaitingResponse: false,
};
const userReducer = (state = initialState, action) => {
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
        case 'CHANGE_PASSWORD_SUCCESS':
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
                    }
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
        case 'PASSWORD_MISMATCH':
            return {
                ...state,
                errors:
                    { ...state.errors, passwordMismatch: action.error },
                awaitingResponse: action.awaiting,
            };

        default:
            return state;
    }
};

export default userReducer;