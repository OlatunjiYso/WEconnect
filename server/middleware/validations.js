import db from '../models';

const { Users, Businesses } = db;

/**
 * Validations class
 * This class handles the following validations
 * -- Ensures that empty spaces are trimmed off
 * -- Checks if required input field is empty.
 * -- Checks if username already exists.
 * -- Check if email already exists
 * -- Checks if a business exists
 * -- Checks if request parameters are integers
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
     * Checks if username already exists.
     * @param {Object} req - request body
     * @param {Object} res - response body
     * @param {Function} next - calls on the next handler
     * @return {undefined}
     */
    static checkUsernameExistence(req, res, next) {
        Users
            .findOne({
                where: {
                    username: req.body.username
                }
            })
            .then((user) => {
                if (user) {
                    return res.status(400)
                        .send({
                            message: 'This username exist already'
                        });
                }
                return next();
            })
            .catch(err => res.status(500)
                .send({
                    message: err.message
                }));
    }

    /**
     * Checks if email already exists.
     * @param {Object} req - request body
     * @param {Object} res - response body
     * @param {Function} next - calls on the next handler
     * @return {undefined}
     */
    static checkEmailExistence(req, res, next) {
        Users
            .findOne({
                where: {
                    email: req.body.email
                }
            })
            .then((user) => {
                if (user) {
                    return res.status(400)
                        .send({
                            message: 'This email exist already'
                        });
                }
                return next();
            })
            .catch(err => res.status(500)
                .send({
                    message: err.message
                }));
    }

    /**
     * Checks if Business exists.
     * @param {Object} req - request body
     * @param {Object} res - response body
     * @param {Function} next - calls on the next handler
     * @return {undefined}
     */
    static checkBusinessExistence(req, res, next) {
        Businesses
            .findOne({
                where: {
                    id: req.params.businessId
                }
            })
            .then((business) => {
                if (!business) {
                    return res.status(400)
                        .send({
                            message: 'No such business exists'
                        });
                }
                return next();
            })
            .catch(err => res.status(500)
                .send({
                    message: err.message
                }));
    }

    /**
      * @description Ensures a valid business update is done
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
      * @description Ensures a valid comment is added
      *
      * @param {object} req - api request
      * @param {object} res - api response
      * @param {function} next - calls on the next handler
      *
      * @return {undefined} api response
      */
    static validateReview(req, res, next) {
        req.checkBody('description', 'message required!').trim().notEmpty();
        const errors = req.validationErrors();
        if (errors) {
            return res.status(400)
                .json({ errors: errors[0].msg });
        }
        return next();
    }
}

export default Validations;