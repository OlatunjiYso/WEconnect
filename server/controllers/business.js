import db from '../models/index';

const { Business, Review, } = db;

/**
 * Business Controllers to handle :
            Adding a new business,
            Getting a business,
            Getting all businesses,
            Modifying business profile,
            Deleting a business,
            Getting business by category,
            Getting business by location,
            Getting business by location and category.
 */
class businessController {
  /**
     * @description Creates a new business
     *
     * @param {Object} req -the api request
     * @param {Object} res -the api response
     *
     * @return {json} message key
     */
  static createBusiness(req, res) {
    Business
      .create({
        ownerId: req.user.id,
        title: req.body.title,
        slogan: req.body.slogan || null,
        overview: req.body.overview,
        email: req.body.email,
        category: req.body.category,
        location: req.body.location,
        address: req.body.address,
        phone: req.body.phone,
        whatsapp: req.body.whatsapp || null,
        facebook: req.body.facebook || null,
        twitter: req.body.twitter || null,
        image: req.body.image || null,
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
            message: err.message,
            messaging: err
          });
      });
  }

  /**
   *@description -gets a specified business
   *
   * @param {Object} req -the api request
   * @param {Object} res -the api response
   *
   * @return {json} -message key
   */
  static getBusiness(req, res) {
    Business
      .findOne({
        where: {
          id: req.params.businessId
        },
        include: [{
          model: Review
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
            message: err.message
          });
      });
  }

  /**
   * @description -gets all businesses
   *
   * @param {Object} req -the api request
   * @param {Object} res -the api response
   *
   * @return {json} message key
   */
  static getAllBusinesses(req, res) {
    const filter = {};
    if (req.query.category) {
      filter.category = req.query.category;
    }
    if (req.query.location) {
      filter.location = req.query.location;
    }
    Business
      .findAll({
        where: filter,
        include: [{
          model: Review
        }]
      })
      .then((businesses) => {
        if (businesses) {
          return res.status(200)
            .send({
              message: 'all businesses',
              businesses
            });
        }
       return res.status(200)
          .send({
            message: 'no businesses yet'
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
   * @description -modifies a specified businesses
   *
   * @param {Object} req -the api request
   * @param {Object} res -the api response
   *
   * @return {json} - message
   */
  static modifyBusiness(req, res) {
    Business
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
              overview: req.body.overview || business.overview,
              email: req.body.email || business.email,
              phone: req.body.phone || business.phone,
              category: req.body.category || business.category,
              location: req.body.location || business.location,
              website: req.body.website || business.website,
              whatsapp: req.body.whatsapp || business.whatsapp,
              facebook: req.body.facebook || business.facebook,
              tweeter: req.body.twitter || business.twitter,
              image: req.body.image || business.image,
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
                  message: err.message
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
   * @description -deletes a specified businesses
   *
   * @param {Object} req -the api request
   * @param {Object} res -the api response
   *
   * @return {json} message key
   */
  static deleteBusiness(req, res) {
    Business
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
                  message: err.message
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
            message: err.message
          });
      });
  }

 /**
   * @description -gets all user's businesses
   *
   * @param {Object} req -the api request
   * @param {Object} res -the api response
   *
   * @return {json} message key
   */
  static getMyBusinesses(req, res) {
    Business
      .findAll({
        where: { ownerId: req.user.id },
        include: [{
          model: Review
        }]
      })
      .then((businesses) => {
        if (businesses) {
          return res.status(200)
            .send({
              message: 'all Your businesses',
              businesses
            });
        }
        return res.status(200)
          .send({
            message: 'no businesses yet'
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

export default businessController;