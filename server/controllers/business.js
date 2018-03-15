import db from '../models';

const { Business } = db;

/**
 * Business Controllers to handle :
            Adding a new business,
            Getting a business,
            Getting all business
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
       Business
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

}