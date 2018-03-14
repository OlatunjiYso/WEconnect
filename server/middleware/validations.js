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
}

export default Validations;