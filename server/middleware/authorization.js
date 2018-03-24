import jwt from 'jsonwebtoken';

import db from '../models';

const { Business } = db;

/**
 * Checks if a user that is about to perform an action on a business is the owner
 *
 * @param {Object} req -api request
 * @param {Object} res -api response
 * @param {Object} next -pass on to next handler
 *
 * @return {undefined}
 */
export default function confirmOwnership(req, res, next) {
    const token = req.body.token || req.headers.token;
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        req.user = decoded;
    });
        // find the actuall owner
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
                            message: 'no such business exists'
                        });
                }
                if (req.user.id !== business.ownerId) {
                    return res.status(401)
                        .send({
                            message: 'You are not authorized to perform such action on this business'
                        });
                }
                return next();
            })
            .catch(err => res.status(500)
                    .send({
                        messsage: err.message
                    }));
    }
