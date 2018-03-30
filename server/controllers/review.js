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
        reviewerId: req.user.id
      })
      .then((review) => {
        res.status(201)
          .send({
            message: 'review successfully created',
            review
          });
      })
      .catch((err) => {
        res.status(400)
          .send({
            message: err.message
          });
      });
  }

  /**
   *@description -gets a specified business review
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
      .then((review) => {
        if (review) {
          return res.status(200)
            .send({
              review
            });
        }
        return res.status(404)
          .send({
            message: 'no such review found'
          });
      })
      .catch(err => res.status(400)
          .send({
            message: err.message
          }));
  }

  /**
 *@description -updates a specified business review
 *
 * @param {Object} req -the api request
 * @param {Object} res -the api response
 *
 * @return {json} -message key
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
            return res.status(401)
              .send({
                message: 'You cannot update others review'
              });
          }
          review
            .update({
              description: req.body.description || review.description
            }).then(() => res.status(200)
                .send({
                  message: 'review successfully modified',
                }))
            .catch(err => res.status(400)
                .send({
                  message: err.message
                }));
        } else {
          res.status(404)
          .send({
            message: 'no such review found'
          });
        }
      })
      .catch((err) => {
        res.status(400)
          .send({
            message: err.message
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
            return res.status(401)
              .send({
                message: 'You are cannot delete others review'
              });
          }
          review
            .destroy()
            .then(() => res.status(200)
                .send({
                  message: 'review successfully deleted'
                }))
            .catch(err => res.status(400)
                .send({
                  message: err.message
                }));
        } else {
          return res.status(404)
          .send({
            message: 'no such review found'
          });
        }
      })
      .catch((err) => {
        res.status(400)
          .send({
            message: err.message
          });
      });
  }
}

export default reviewController;
