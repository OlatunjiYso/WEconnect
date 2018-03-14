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
      * Eliminate spaces from request body fields
      * @param {Object} req - request body
      * @param {Object} res - response body
      * @param {Function} next - calls on the next handler
      * @return {undefined}
      */
     static trimBody(req, res, next) {
        if (req.body) {
            // get an array of request body keys
            Object.keys(req.body).forEach((key) => {
                const entry = req.body[key];
                // trim strings alone
                if (typeof entry === 'string' && entry !== undefined) {
                    req.body[key] = req.body[key].trim();
                }
            });
            next();
        }
    }
    /**
     * Checks if required input field is empty.
     * @param {Object} req - request body
     * @param {Object} res - response body
     * @param {Function} next - calls on the next handler
     * @return {undefined}
     */
    static reportEmptyFields(req, res, next) {
        if (req.body) {
            const fields = Object.keys(req.body);
            fields.forEach((field) => {
                if (req.body[field] === null ||
                    req.body[field] === undefined ||
                    req.body[field].length === 0
                ) {
                    res.status(400)
                        .send({
                            message: `${field} field is required!`
                        });
                }
            });
            next();
        } else {
            next();
        }
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
                    res.status(400)
                        .send({
                            message: 'This username exist already'
                        });
                }
                return next();
            })
            .catch((err) => {
                res.status(500)
                    .send({
                        message: err.message
                    });
            });
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
                    res.status(400)
                        .send({
                            message: 'This email exist already'
                        });
                }
                return next();
            })
            .catch((err) => {
                res.status(500)
                    .send({
                        message: err.message
                    });
            });
    }
}

export default Validations;