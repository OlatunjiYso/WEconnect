import users from '../tables/users';

/**
 * @class Validations
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
        req.checkBody('password', 'Please input password').notEmpty();
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
   * Checks if username already exists
   * @param{Object} req - api request
   * @param{Object} res - route response
   * @param{Function} next - next middleware
   * @return{undefined}
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
     * Checks if username already exists
     * @param{Object} req - api request
     * @param{Object} res - route response
     * @param{Function} next - next middleware
     * @return{undefined}
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
}

    export default Validations;