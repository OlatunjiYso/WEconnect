import db from '../models';

const { User, Business } = db;

/**
 * Validations class
 * This class handles the following validations
 * -- Ensures only valid user information is added
 * -- Ensures signin parameters are valid
 * -- Checks if username or email already exists.
 * -- Checks if a business exists
 * -- Checks if business name and email exists
 * -- Ensures a valid review is added
 */
class Validations {
    /**
      * @description Ensures a valid user information is added
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
            const errorList = errors.map(error => error.msg);
            return res.status(400)
                .send({ errors: errorList });
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
            const errorList = errors.map(error => error.msg);
            return res.status(400)
                .send({ errors: errorList });
        }
        return next();
    }

    /**
     * Checks if email user already exists.
     * @param {Object} req - request body
     * @param {Object} res - response body
     * @param {Function} next - calls on the next handler
     * @return {undefined}
     */
    static checkEmailExistence(req, res, next) {
        User
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
     * Checks if username already exists.
     * @param {Object} req - request body
     * @param {Object} res - response body
     * @param {Function} next - calls on the next handler
     * @return {undefined}
     */
    static checkUsernameExistence(req, res, next) {
        User
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
 * @description Ensures a valid password is added
 *
 * @param {object} req - api request
 * @param {object} res - api response
 * @param {function} next - calls on the next handler
 *
 * @return {undefined} api response
 */
    static validatePasswordUpdate(req, res, next) {
        req.checkBody('currentPassword', 'Please input your current password')
            .trim()
            .notEmpty();
        req.checkBody('newPassword', 'Please input your new password')
            .trim()
            .notEmpty();
        req.checkBody('newPassword', 'password must be a min length of 5').isLength({ min: 5 });
        const errors = req.validationErrors();
        if (errors) {
            const errorList = errors.map(error => error.msg);
            return res.status(400)
                .send({ errors: errorList });
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
        req.checkBody('address', 'Please input business address')
            .trim()
            .notEmpty();
        req.checkBody('slogan', 'Please input business slogan')
            .trim()
            .notEmpty();
        req.checkBody('overview', 'Please input business overview')
            .trim()
            .notEmpty();
        req.checkBody('overview', 'overview must be a minimum of 20 characters')
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
            const errorList = errors.map(error => error.msg);
            return res.status(400)
                .send({ errors: errorList });
        }
        return next();
    }

    /**
     * Checks if business email already exists.
     * @param {Object} req - request body
     * @param {Object} res - response body
     * @param {Function} next - calls on the next handler
     * @return {undefined}
     */
    static checkBusinessEmailExistence(req, res, next) {
        Business
            .findOne({
                where: {
                    email: req.body.email
                }
            })
            .then((business) => {
                if (business) {
                    return res.status(400)
                        .send({
                            message: 'This business email exist already'
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
        console.log(req.params.businessId);
        Business
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
     * Checks if Business name already exists.
     * @param {Object} req - request body
     * @param {Object} res - response body
     * @param {Function} next - calls on the next handler
     * @return {undefined}
     */
    static checkBusinessNameExistence(req, res, next) {
        Business
            .findOne({
                where: {
                    title: req.body.title
                }
            })
            .then((business) => {
                if (business) {
                    return res.status(400)
                        .send({
                            message: 'This business name exists already'
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
            Business
                .findOne({
                    where: {
                        title: req.body.title
                    }
                })
                .then((business) => {
                    if (business) {
                        if (req.user.id !== business.ownerId) {
                            return res.status(400)
                                .send({
                                    message: 'This business name is in use'
                                });
                        }
                    }
                })
                .catch(err => res.status(500)
                    .send({
                        message: err.message
                    }));
        }
        if (req.body.email) {
            Business
                .findOne({
                    where: {
                        email: req.body.email
                    }
                })
                .then((business) => {
                    if (business) {
                        if (req.user.id !== business.ownerId) {
                            return res.status(400)
                                .send({
                                    message: 'This business email is in use'
                                });
                        }
                    }
                })
                .catch(err => res.status(500)
                    .send({
                        message: err.message
                    }));
        }
        if (req.body.title) {
            req.checkBody('title', 'Title cannot be blank')
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
        if (req.body.address) {
            req.checkBody('address', 'Address cannot be blank')
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
            const errorList = errors.map(error => error.msg);
            return res.status(400)
                .send({ errors: errorList });
        }
        return next();
    }

    /**
      * @description Ensures a valid review is added
      *
      * @param {object} req - api request
      * @param {object} res - api response
      * @param {function} next - calls on the next handler
      *
      * @return {undefined} api response
      */
    static validatebusinessReview(req, res, next) {
        req.checkBody('description', 'Please input your review')
            .trim()
            .notEmpty();
        const errors = req.validationErrors();
        if (errors) {
            const errorList = errors.map(error => error.msg);
            return res.status(400)
                .send({ errors: errorList });
        }
        return next();
    }

    /**
      * @description Ensures a valid review is added as update
      *
      * @param {object} req - api request
      * @param {object} res - api response
      * @param {function} next - calls on the next handler
      *
      * @return {undefined} api response
      */
    static validateBusinessReviewUpdate(req, res, next) {
        if (req.body.description) {
            req.checkBody('description', 'Please input your review')
                .trim()
                .notEmpty();
        }
        const errors = req.validationErrors();
        if (errors) {
            const errorList = errors.map(error => error.msg);
            return res.status(400)
                .send({ errors: errorList });
        }
        return next();
    }
}

export default Validations;