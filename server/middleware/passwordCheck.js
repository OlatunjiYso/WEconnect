import bcrypt from 'bcrypt';

import db from '../models';

const { Business, User } = db;

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
    // find the actual owner
    Business
        .findOne({
            where: {
                id: req.params.businessId
            }
        })
        .then((business) => {
            User
                .findOne({
                    where: {
                        id: business.ownerId
                    }
                })
                .then((user) => {
                    if (!req.body.password) {
                        return res.status(400)
                            .json({
                                message: 'Please provide your password to proceed'
                            });
                    }
                    bcrypt.compare(req.body.password, user.password)
                        .then((passwordIsValid) => {
                            if (!passwordIsValid) {
                                return res.status(422)
                                    .json({
                                        message: 'Invalid password'
                                    });
                            }
                            if (passwordIsValid) {
                                return next();
                            }
                        });
                });
        })
        .catch(err => res.status(500)
            .json({
                error: err.message
            }));
}
