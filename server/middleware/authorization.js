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
     // find the actual owner
        Business
            .findOne({
                where: {
                    id: req.params.businessId
                }
            })
            .then((business) => {
                if (!business) {
                   return res.status(404)
                        .json({
                            success: false,
                            message: 'no such business exists'
                        });
                }
                if (req.user.id !== business.ownerId) {
                    return res.status(403)
                        .json({
                            success: false,
                            message: 'You are not authorized to edit or delete this business'
                        });
                }
                return next();
            })
            .catch(err => res.status(500)
                    .json({
                        error: err.message
                    }));
    }
