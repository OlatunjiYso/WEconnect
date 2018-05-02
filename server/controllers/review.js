import db from '../models';

const { Review } = db;

/**
 * Reviews controller to handle :
            adding a new review,
            getting a business review,
 */
class reviewController {
  /**
     * @description Creates a new review
     *
     * @param {Object} req -the api request
     * @param {Object} res -the api response
     *
     * @return {json} -message
     */
  static createReview(req, res) {
    Review
      .create({
        businessId: req.params.businessId,
        description: req.body.description,
        reviewerName: req.body.username,
        reviewerId: req.user.id
      })
      .then((review) => {
        res.status(201)
          .json({
            success: true,
            message: 'review successfully created',
            review
          });
      })
      .catch((err) => {
        res.status(500)
          .json({
            error: err.message
          });
      });
  }

  /**
   *@description -gets all reviews for a specified business
   *
   * @param {Object} req -the api request
   * @param {Object} res -the api response
   *
   * @return {json} -message key
   */
  static getReview(req, res) {
    Review
      .findAll({
        where: {
          businessId: req.params.businessId
        }
      })
      .then((reviews) => {
        if (reviews.length > 0) {
          return res.status(200)
            .json({
              success: true,
              message: 'business reviews',
              reviews
            });
        }
        return res.status(404)
          .json({
            success: true,
              message: 'no business reviews yet',
          });
      })
      .catch(err => res.status(500)
          .json({
           error: err.message
          }));
  }

/**
 *@description -updates a specific business review
 *
 * @param {Object} req -the api request
 * @param {Object} res -the api response
 *
 * @return {json} -message
 */
  static updateReview(req, res) {
    Review
      .findOne({
        where: {
          id: req.params.reviewId
        }
      })
      .then((review) => {
        if (review) {
          if (review.reviewerId !== req.user.id) {
            return res.status(403)
              .json({
                message: 'You cannot update others review'
              });
          }
          review
            .update({
              description: req.body.description || review.description
            })
            .then(() => res.status(200)
                .json({
                  message: 'review successfully modified',
                }))
            .catch(err => res.status(500)
                .json({
                  error: err.message
                }));
        } else {
          res.status(404)
          .json({
            message: 'no such review found'
          });
        }
      })
      .catch((err) => {
        res.status(500)
          .json({
            error: err.message
          });
      });
  }

/**
 *@description -deletes a specified business review
 *
 * @param {Object} req -the api request
 * @param {Object} res -the api response
 *
 * @return {json} -message key
 */
  static deleteReview(req, res) {
    Review
      .findOne({
        where: {
          id: req.params.reviewId
        }
      })
      .then((review) => {
        if (review) {
          if (review.reviewerId !== req.user.id) {
            return res.status(403)
              .json({
                message: 'You cannot delete others review'
              });
          }
          review
            .destroy()
            .then(() => res.status(200)
                .json({
                  success: true,
                  message: 'review successfully deleted'
                }))
            .catch(err => res.status(500)
                .json({
                  error: err.message
                }));
        } else {
          return res.status(404)
          .json({
            success: false,
            message: 'no such review found'
          });
        }
      })
      .catch((err) => {
        res.status(500)
          .json({
            error: err.message
          });
      });
  }
}

export default reviewController;
