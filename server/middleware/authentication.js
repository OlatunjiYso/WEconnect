import jwt from 'jsonwebtoken';

/**
 * @description -checks if a user has a valid token or has no token at all
 *
 * @param {Object} req -api request
 * @param {Object} res -api response
 * @param {Object} next -pass on to next handler
 *
 * @return {undefined}
 */
export default function authenticate(req, res, next) {
    const token = req.body.token || req.headers.token;
    if (!token) {
        return res.status(401)
            .send({
                message: 'no token!'
            });
    }
    // check if the presented token is valid
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401)
                .send({
                    message: 'token Invalid'
                });
        }
        req.user = decoded;
        return next();

    });

}