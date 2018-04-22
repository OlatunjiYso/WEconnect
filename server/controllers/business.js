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
        name: req.body.name,
        slogan: req.body.slogan,
        email: req.body.email,
        category: req.body.category,
        city: req.body.city,
        state: req.body.state,
        address: req.body.address,
        phone: req.body.phone,
        heading1: req.body.heading1,
        heading2: req.body.heading2 || null,
        heading3: req.body.heading3 || null,
        body1: req.body.body1,
        body2: req.body.body2 || null,
        body3: req.body.body3 || null,
        whatsapp: req.body.whatsapp || null,
        facebook: req.body.facebook || null,
        twitter: req.body.twitter || null,
        instagram: req.body.instagram || null,
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
      filter.state = req.query.location;
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
          if (businesses.length > 0) {
            return res.status(200)
              .json({
                success: true,
                businesses,
                location: req.query.location,
                category: req.query.category,
              });
          }
          return res.status(404)
            .json({
              success: false,
              location: req.query.location,
              category: req.query.category,
              message: 'not found',
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
              name: req.body.name || business.name,
              slogan: req.body.slogan || business.slogan,
              overview: req.body.overview || business.overview,
              email: req.body.email || business.email,
              phone: req.body.phone || business.phone,
              category: req.body.category || business.category,
              city: req.body.city || business.city,
              state: req.body.state || business.state,
              heading1: req.body.heading1 || business.heading1,
              heading2: req.body.heading2 || business.heading2,
              heading3: req.body.heading3 || business.heading3,
              body1: req.body.body1 || business.body1,
              body2: req.body.body2 || business.body2,
              body3: req.body.body3 || business.body3,
              whatsapp: req.body.whatsapp || business.whatsapp,
              facebook: req.body.facebook || business.facebook,
              twitter: req.body.twitter || business.twitter,
              instagram: req.body.instagram || business.instagram,
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
                    modified: false,
                    message: 'No changes made, your business details remains intact',
                    business: updated,
                  });
              }
              return res.status(200)
                .json({
                  success: true,
                  modified: true,
                  message: 'business successfully modified',
                  business: updated
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