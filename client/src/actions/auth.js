/**
 * @description - class containing all user actions
 *
 */
class authActions {
    /**
     * @description - method responsible for starting the spinner
     *
     * @return { obj } - actionable object containing payload and type
     */
    static signupAttempt() {
        return {
            type: 'ATTEMPT',
            awaiting: true,
            outcome: 1,
            error: null
        };
    }

     /**
     * @description - method responsible for stopping the spinner
     *
     * @param {obj} user -user details of newly signed up member
     * 
     * @return { obj } - actionable object containing payload and type
     */
    static signupSuccess(user) {
        return {
            type: 'SIGNUP_SUCCESS',
            awaiting: false,
            error: null,
            userDetails: user
        };
    }


    /**
     *@description - method responsible for showing errors for bad requests
     *
     *@param {obj} errorsArray -an array of all validation errors
     *
     * @return { obj } - actionable object containing payload and type
     */
    static signupBadRequest(errorsArray) {
        return {
            type: 'BAD_REQUEST',
            awaiting: false,
            error: errorsArray,
            outcome: 0,
        };
    }

    /**
     *@description - method responsible for showing errors for conflicting requests
     *
     *@param {obj} errors - conflict message
     *
     * @return { obj } - actionable object containing payload and type
     */
    static signupConflict(errors) {
        return {
            type: 'CONFLICT',
            awaiting: false,
            error: errors,
        };
    }

     /**
     *@description - method responsible for showing password mismatch
     *
     *
     * @return { obj } - actionable object containing payload and type
     */
    static passwordMismatch() {
        return {
            type: 'PASSWORD_MISMATCH',
            misMatch: true,
        };
    }

    /**
     * @description - method responsible for starting the spinner
     *
     * @return { obj } - actionable object containing payload and type
     */
    static signinAttempt() {
        return {
            type: 'ATTEMPT',
            awaiting: true,
            error: null
        };
    }

    /**
     * @description - method responsible for displaying signin errors
     *
     * @param {obj} message reason for failed authentication
     * 
     * @return { obj } - actionable object containing payload and type
     */
    static signinFailed(message) {
        return {
            type: 'FAILED_SIGNIN',
            awaiting: false,
            outcome: 0,
            error: message
        };
    }

    /**
     * @description - method responsible for stopping the spinner on success
     *
     * 
     * @return { obj } - actionable object containing payload and type
     */
    static signinSuccess() {
        return {
            type: 'SIGNIN_SUCCESS',
            awaiting: false,
            error: null
        };
    }

        /**
     * @description - method responsible for stopping the spinner on success
     *
     * 
     * @return { obj } - actionable object containing payload and type
     */
    static onBoardingSuccess() {
        return {
            type: 'ON_BOARDING_SUCCESS',
            awaiting: false,
            userDetails: null
        };
    }
}
export default authActions;