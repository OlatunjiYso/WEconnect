import users from '../tables/users';

import businesses from '../tables/businesses';

/**
 * @class Validations
 *
*/
class Validations {
    /**
      * @description Ensures a valid user is added
      *
      * @param {object} req - api request
      * @param {object} res - api response
      * @param {function} next - calls on the next handler
      *
      * @return {undefined} api response
      */
    static validateSignup(req, res, next) {
        req.checkBody('username', 'Please input username').trim().notEmpty();
        req.checkBody('password', 'Please input password').trim().notEmpty();
        req.checkBody('password', 'password must be a min length of 5').isLength({ min: 5 });
        req.checkBody('email', 'email is required').notEmpty();
        req.checkBody('email', 'Invalid email').isEmail();
        req.checkBody('phone', 'Please input your phone number').trim().notEmpty();
        const errors = req.validationErrors();
        if (errors) {
            res.status(400)
                .send({ errors: errors[0].msg });
        }
        next();
    }

    /**
      * @description Ensures a valid business is added
      *
      * @param {object} req - api request
      * @param {object} res - api response
      * @param {function} next - calls on the next handler
      *
      * @return {undefined} api response
      */
    static validatebusinessRegistration(req, res, next) {
        req.checkBody('title', 'Please input business title')
            .trim()
            .notEmpty();
        req.checkBody('category', 'Please input business category')
            .trim()
            .notEmpty();
        req.checkBody('location', 'Please input business location')
            .trim()
            .notEmpty();
        req.checkBody('description', 'Please input business description')
            .trim()
            .notEmpty();
        req.checkBody('description', 'description must be a minimum of 20 characters')
            .isLength({ min: 20 });
        req.checkBody('ownerId', 'ownerId is required')
            .trim()
            .notEmpty();
        req.checkBody('ownerId', 'ownerId must be a number')
            .isNumber();
        req.checkBody('email', 'email is required')
            .notEmpty();
        req.checkBody('email', 'Invalid email')
            .isEmail();
        req.checkBody('phone', 'Please input business phone number')
            .trim()
            .notEmpty();
        const errors = req.validationErrors();
        if (errors) {
            res.status(400)
                .send({ errors: errors[0].msg });
        }
        next();
    }
    /**
      * @description Checks if username already exists
      *
      * @param {object} req - api request
      * @param {object} res - api response
      * @param {function} next - calls on the next handler
      *
      * @return {undefined} api response
      */
    static checkUsernameExistence(req, res, next) {
        const allusernames = users.map(user => user.username);
        allusernames.forEach((username) => {
            if (username === req.body.username) {
                return res.status(400)
                    .send({
                        message: 'This username exists',
                    });
            }
        });
        next();
    }

    /**
      * @description checks if userId exists
      *
      * @param {object} req - api request
      * @param {object} res - api response
      * @param {function} next - calls on the next handler
      *
      * @return {undefined} -api response
      */
    static checkUserIdExistence(req, res, next) {
        const alluserId = users.map(user => user.id);
        alluserId.forEach((id) => {
            if (id === req.body.ownerId) {
                next();
            }
        });
        return res.status(400)
            .send({
                message: 'User with Specified Id doesnot exist',
            });
    }

    /**
      * @description Checks if email already exists
      *
      * @param {object} req - api request
      * @param {object} res - api response
      * @param {function} next - calls on the next handler
      *
      * @return {undefined} api response
      */
    static checkEmailExistence(req, res, next) {
        const emails = users.map(user => user.email);
        emails.forEach((email) => {
            if (email === req.body.email) {
                return res.status(400)
                    .send({
                        message: 'This email exists',
                    });
            }
        });
        next();
    }

    /**
     * @description Checks if business exists
     *
     * @param {object} req - api request
     * @param {object} res - api response
     * @param {function} next - calls on the next handler
     *
     * @return {undefined} api response
     */
    static checkBusinessExistence(req, res, next) {
        const allBusinessId = businesses.map(business => business.id);
        allBusinessId.forEach((id) => {
            if (id === req.param.businessId) {
                next();
            }
        });
        return res.status(400)
            .send({
                message: 'The business with specified id doesnot exist'
            });
    }

    /**
    * @description Checks if business parameters is an integer
    *
    * @param {object} req - api request
    * @param {object} res - api response
    * @param {function} next - calls on the next handler
    *
    * @return {undefined} api response
    */
    static verifyBusinessParamIsNumber(req, res, next) {
        if (req.param.businessId) {
            if (typeof req.params.businessId !== 'number') {
                return res.status(400)
                    .send({
                        message: 'unsupported parameters'
                    });
            }
        }
        next();
    }
    /** @description validates query parameters
    *
    * @param {object} req - api request
    * @param {object} res - api response
    * @param {function} next - calls on the next handler
    *
    * @return {undefined} api response
    */
    static verifyQueryParams(req, res, next) {
        if (req.query.location) {
            if (typeof req.query.location !== 'string') {
                return res.status(400)
                    .send({
                        message: 'unsupported location query parameters!'
                    });
            }
        }
        if (req.query.category) {
            if (typeof req.query.category !== 'string') {
                return res.status(400)
                    .send({
                        message: 'unsupported category query parameters!'
                    });
            }
        }
        next();
    }
}

export default Validations;