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
        const errors = req.validationErrors();
        if (errors) {
            return res.status(400)
                .send({ errors: errors[0].msg });
        }
        return next();
    }

    /**
      * @description Ensures a user signin parameters are valid
      *
      * @param {object} req - api request
      * @param {object} res - api response
      * @param {function} next - calls on the next handler
      *
      * @return {undefined} api response
      */
    static validatelogin(req, res, next) {
        req.checkBody('username', 'Please input username').trim().notEmpty();
        req.checkBody('password', 'Please input password').trim().notEmpty();
        const errors = req.validationErrors();
        if (errors) {
            return res.status(400)
                .send({ errors: errors[0].msg });
        }
        return next();
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
            .isInt();
        req.checkBody('email', 'email is required')
            .notEmpty();
        req.checkBody('email', 'Invalid email')
            .isEmail();
        req.checkBody('phone', 'Please input business phone number')
            .trim()
            .notEmpty();
        const errors = req.validationErrors();
        if (errors) {
            return res.status(400)
                .send({ errors: errors[0].msg });
        }
        return next();
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
    static validatebusinessUpdate(req, res, next) {
        if (req.body.title) {
            req.checkBody('category', 'Title cannot be blank')
                .trim().notEmpty();
        }
        if (req.body.category) {
            req.checkBody('category', 'Category cannot be blank')
                .trim().notEmpty();
        }
        if (req.body.location) {
            req.checkBody('location', 'Location cannot be blank')
                .trim().notEmpty();
        }
        if (req.body.description) {
            req.checkBody('description', 'Description cannot be blank')
                .trim().notEmpty();
            req.checkBody('description', 'description must be a minimum of 20 characters')
                .isLength({ min: 20 });
        }
        if (req.body.email) {
            req.checkBody('email', 'email is required')
                .notEmpty();
            req.checkBody('email', 'Invalid email')
                .isEmail();
        }
        if (req.body.phone) {
            req.checkBody('phone', 'Phone number cannot be blank')
                .trim()
                .notEmpty();
        }
        const errors = req.validationErrors();
        if (errors) {
            return res.status(400)
                .send({ errors: errors[0].msg });
        }
        return next();
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
        const check = allusernames.indexOf(req.body.username);
        if (check >= 0) {
            return res.status(400)
                .send({
                    message: 'This username exists!'
                });
        }
        return next();
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
        const check = alluserId.indexOf(req.body.ownerId);
        if (check < 0) {
            return next();
        }
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
        const check = emails.indexOf(req.body.email);
        if (check >= 0) {
            return res.status(400)
                .send({
                    message: 'This email exists',
                });
        }
        return next();
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
        const businessId = parseInt(req.params.businessId, 10);
        const allBusinessId = businesses.map(business => business.id);
        const check = allBusinessId.indexOf(businessId);
        if (check >= 0) {
            return next();
        }
        return res.status(400)
            .send({
                message: 'The business with the specified id doesnot exist'
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
        const businessId = parseInt(req.params.businessId, 10);
        if (businessId) {
            if (typeof businessId !== 'number') {
                return res.status(400)
                    .json({
                        message: 'unsupported parameters'
                    });
            }
        }
        return next();
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
                    .json({
                        message: 'unsupported category query parameters!'
                    });
            }
        }
        return next();
    }

    /**
      * @description Ensures a valid comment is added
      *
      * @param {object} req - api request
      * @param {object} res - api response
      * @param {function} next - calls on the next handler
      *
      * @return {undefined} api response
      */
    static validateReview(req, res, next) {
        req.checkBody('date', 'date is required!').trim().notEmpty();
        req.checkBody('message', 'message required!').trim().notEmpty();
        req.checkBody('commentor', 'your name is required!').trim().notEmpty();
        const errors = req.validationErrors();
        if (errors) {
            return res.status(400)
                .json({ errors: errors[0].msg });
        }
        return next();
    }
}

export default Validations;