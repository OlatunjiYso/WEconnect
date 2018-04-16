/**
 * @description - class containing all user actions
 *
 */
class userActions {
    /**
     * @description - method responsible for registering a new user
     *
     * @return { obj } - ationable object containing payload and type
     */
    static signup() {
        return {
            type: '',
            payload: {}
        };
    }

    /**
     * @description - method responsible for signing-in a user
     *
     * @return { obj } - actionable object containing payload and type
     */
    static signin() {
        return {
            type: '',
            payload: {}
        };
    }

    /**
     * @description - method responsible for getting all businesses for a user
     *
     * @return { obj } - ationable object containing payload and type
     */
    static getMyBusinesses() {
        return {
            type: '',
            payload: {}
        };
    }

    /**
     * @description - method responsible for changing password
     *
     * @return { obj } - ationable object containing payload and type
     */
    static changePassword() {
        return {
            type: '',
            payload: {}
        };
    }

    /**
     * @description - method responsible for updating a user's profile
     *
     * @return { obj } - ationable object containing payload and type
     */
    static updateProfile() {
        return {
            type: '',
            payload: {}
        };
    }
}

export default userActions;