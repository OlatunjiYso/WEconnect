import users from '../tables/users';

/**
 * @class Validations
*/
class Validations {
 /**
     * Trims spaces off values
     * @param {Object} req api request
     * @param {Object} res api response
     * @param {Object} next -calls on the next handler
     * @return {Function} api response
     */
    static trimbody(req, res, next) {
        // Trims body values
      const fields = Object.keys(req.body);
      fields.forEach((field) => {
          if (typeof req.body[field] === 'string' && req.body[field] !== undefined) {
            req.body[field] = req.body[field].trim();
          }
          next();
      });
    }

    /**
    * Ensures empty fields are not added
     * @param {Object} req api request
     * @param {Object} res api response
     * @param {Object} next -calls on the next handler
     * @return {Function} api response
     */
    static EnsureNotEmpty(req, res, next) {
        const fields = Object.keys(req.body);
      fields.forEach((field) => {
          if (req.body[field] === undefined) {
            res.status(400)
                .send({
                    message: `${field} required in body!`
                });
          }
          next();
      });
    }
    /**
   * Checks if username already exists
   * @param{Object} req - api request
   * @param{Object} res - route response
   * @param{Function} next - next middleware
   * @return{undefined}
   */
  static checkUsernameExistence(req, res, next) {
    const queriedUser = users.filter(user => user.username === req.body.username);
    if (queriedUser.length > 0) {
        res.statuS(400)
            .send({
                message: 'This username exists'
            });
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
  static checkEmailExistence(req, res, next) {
    const queriedUser = users.filter(user => user.email === req.body.email);
    if (queriedUser.length > 0) {
        res.statuS(400)
            .send({
                message: 'This username exists'
            });
    }
    next();
  }
}

export default Validations;