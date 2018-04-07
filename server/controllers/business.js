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
     * @return {json} message
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
          .json({
            success: true,
            message: 'business successfully created',
            business
          });
      })
      .catch((err) => {
        res.status(400)
          .send({
            success: false,
            error: err.message,
          });
      });
  }

  /**
   *@description -gets a specified business
   *
   * @param {Object} req -the api request
   * @param {Object} res -the api response
   *
   * @return {json} -message
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
          .json({
            success: true,
            message: 'business found',
            business
          });
      })
      .catch((err) => {
        res.status(500)
          .json({
            success: false,
            error: err.message
          });
      });
  }

  /**
   * @description -gets all businesses
   *
   * @param {Object} req -the api request
   * @param {Object} res -the api response
   *
   * @return {json} message
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
          const theLocation = (req.query.location) ? `in ${req.query.location}` : '';
          const theCategory = (req.query.category) ? req.query.category : '';
          if (businesses.length > 0) {
            return res.status(200)
              .json({
                success: true,
                message: `${theCategory} businesses ${theLocation}`,
                businesses
              });
          }
          return res.status(200)
            .json({
              success: true,
              message: `no ${theCategory} business ${theLocation} yet`,
            });
        }
      })
      .catch((err) => {
        res.status(400)
          .json({
            success: false,
            message: err.message
          });
      });
  }

  /**
   * @description -modifies a specified business
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
          const initialBusiness = {};
          Object.assign(initialBusiness, business);
          const initialParameters = Object.keys(initialBusiness.dataValues)
            .map(key => initialBusiness.dataValues[key]);
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
              twitter: req.body.twitter || business.twitter,
              image: req.body.image || business.image,
            })
            .then((updated) => {
              const updatedParameters = Object.keys(updated.dataValues)
                .map(key => updated.dataValues[key]);
              let changes = 0;
              let i = 0;
              updatedParameters.forEach(() => {
                if (updatedParameters[i] !== initialParameters[i]) {
                  changes += 1;
                }
                i += 1;
              });
              if (changes === 0) {
                return res.status(200)
                  .json({
                    success: true,
                    message: 'No changes, business details remains intact',
                    'your business': updated,
                  });
              }
              return res.status(200)
                .json({
                  success: true,
                  message: `business modified successfully, ${changes - 1} field(s) modified!`,
                  updated
                });
            })
            .catch((err) => {
              res.status(500)
                .json({
                  error: err.message
                });
            });
        } else {
          res.status(404)
            .json({
              message: 'no such business with specified id'
            });
        }
      })
      .catch((err) => {
        res.status(400)
          .json({
            error: err.message
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
                .json({
                  success: true,
                  message: 'business deleted'
                });
            })
            .catch((err) => {
              res.status(500)
                .json({
                  success: false,
                  message: err.message
                });
            });
        } else {
          res.status(404)
            .json({
              message: 'no such business with specified id'
            });
        }
      })
      .catch((err) => {
        res.status(500)
          .json({
            message: err.message
          });
      });
  }
}

export default businessController;