import db from '../models';

const { Businesses, Reviews } = db;

/**
 * Business Controllers to handle :
            Adding a new business
            Getting a business,
            Getting all businesses
            Modifying business profile
            Deleting a business
            Getting business by category
            Getting business by location
 */
class businessController {
  /**
     * Creates a new business
     * @param {Object} req -the api request
     * @param {Object} res -the api response
     * @return {json} message key
     */
  static createBusiness(req, res) {
    Businesses
      .create({
        ownerId: req.user.id,
        title: req.body.title,
        slogan: req.body.slogan || null,
        overview: req.body.overview || null,
        email: req.body.email,
        website: req.body.website || null,
        phone1: req.body.phone1,
        phone2: req.body.phone2 || null,
        facebook: req.body.facebook || null,
        tweeter: req.body.tweeter || null,
        image1: req.body.image1 || null,
        image2: null,
        image3: null,
        image4: null,

      })
      .then((business) => {
        res.status(201)
          .send({
            message: 'business successfully created',
            business
          });
      })
      .catch((err) => {
        res.status(400)
          .send({
            message: err.errors ? err.errors : err.message
          });
      });
  }

  /**
   * Gets a business
   * @param {Object} req -the api request
   * @param {Object} res -the api response
   * @return {json} message key
   */
  static getBusiness(req, res) {
    Businesses
      .findOne({
        where: {
          id: req.params.businessId
        },
        include: [{
          model: Reviews
        }]
      })
      .then((business) => {
        res.status(200)
          .send({
            message: 'business found',
            business
          });
      })
      .catch((err) => {
        res.status(400)
          .send({
            message: err.errors ? err.errors : err.message
          });
      });
  }

  /**
   * Gets all businesses
   * @param {Object} req -the api request
   * @param {Object} res -the api response
   * @return {json} message key
   */
  static getAllBusinesses(req, res) {
    Businesses
      .findAll({
        include: [{
          model: Reviews
        }]
      })
      .then((businesses) => {
        if (businesses) {
          res.status(200)
            .send({
              message: 'all businesses',
              businesses
            });
        } else {
          res.status(200)
            .send({
              message: 'no businesses yet'
            });
        }
      })
      .catch((err) => {
        res.status(400)
          .send({
            message: err.errors ? err.errors : err.message
          });
      });
  }

  /**
   * Modifies a specified businesses
   * @param {Object} req -the api request
   * @param {Object} res -the api response
   * @return {json} message key
   */
  static modifyBusiness(req, res) {
    Businesses
      .findOne({
        where: {
          id: req.params.businessId
        }
      })
      .then((business) => {
        if (business) {
          business
            .update({
              title: req.body.title || business.title,
              slogan: req.body.slogan || business.slogan,
              overview: req.body.overview || business.slogan,
              email: req.body.email || business.email,
              website: req.body.website || business.website,
              phone1: req.body.phone1 || business.phone1,
              phone2: req.body.phone2 || business.phone2,
              facebook: req.body.facebook || business.facebook,
              tweeter: req.body.tweeter || business.tweeter,
              image1: req.body.image1 || business.image1,
              image2: req.body.image2 || business.image1,
              image3: req.body.image3 || business.image1,
              image4: req.body.image4 || business.image1
            })
            .then((updated) => {
              res.status(200)
                .send({
                  message: 'business modified',
                  updated
                });
            })
            .catch((err) => {
              res.status(400)
                .send({
                  message: err.errors ? err.errors : err.message
                });
            });
        } else {
          res.status(404)
            .send({
              message: 'no such business with specified id'
            });
        }
      })
      .catch((err) => {
        res.status(400)
                .send({
                  message: err.errors ? err.errors : err.message
                });
      });
  }

  /**
   * Modifies a specified businesses
   * @param {Object} req -the api request
   * @param {Object} res -the api response
   * @return {json} message key
   */
  static deleteBusiness(req, res) {
    Businesses
      .findOne({
        where: {
          id: req.params.businessId
        }
      })
      .then((business) => {
        if (business) {
          business
            .destroy()
            .then(() => {
              res.status(200)
                .send({
                  message: 'business deleted'
                });
            })
            .catch((err) => {
              res.status(400)
                .send({
                  message: err.errors ? err.errors : err.message
                });
            });
        } else {
          res.status(404)
            .send({
              message: 'no such business with specified id'
            });
        }
      })
      .catch((err) => {
        res.status(400)
                .send({
                  message: err.errors ? err.errors : err.message
                });
      });
  }
}