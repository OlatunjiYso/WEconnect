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
      .findOne({
        where: {
          businessId: req.params.businessId
        }
      })
      .then((review) => {
        res.status(200)
          .send({
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
}

export default reviewController;
