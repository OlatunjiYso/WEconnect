import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt';

import db from '../models';

const { User, Review, Business } = db;

/**
 * usercontroller class to handle:
 *        Creating a new user
 *        Logging in a registered user
 *        Issuing of jsonwebtoken upon succesful signin
*/
class UserController {
    /**
     * @description -creates a new user with a hashed password and issues a json web token
     *
     * @param {Object} req -the api request
     * @param {Object} res -the api response
     *
     * @return {json} message
     */
    static createUser(req, res) {
        // Hash the password before saving to database
        const password = bcrypt.hashSync(req.body.password, 10);
        // Handle the rest of validation in middleware...
        User
            .create({
                username: req.body.username,
                password,
                email: req.body.email,
                role: 'user',
                phone: req.body.phone
            })
            .then((user) => {
                const anonymousUser = user;
                anonymousUser.password = 'Your Password';

                res.status(201)
                    .send({
                        message: 'You are signed up!',
                        username: user.username,
                        email: user.email
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
     * @description -logs in a registered user
     *
     * @param {Object} req -the api request
     * @param {Object} res -the api response
     *
     * @return {json} success message or error message
     */
    static login(req, res) {
        // Handle validations in middleware
        User
            .findOne({
                where: { username: req.body.username },
            })
            .then((user) => {
                if (!user) {
                    res.status(401)
                        .send({
                            message: 'No such user exists'
                        });
                } else {
                    // compare password
                    bcrypt.compare(req.body.password, user.password)
                        .then((validPassword) => {
                            if (!validPassword) {
                                res.status(401)
                                    .send({
                                        message: 'invalid password'
                                    });
                            } else {
                                // issue jsonwebtoken that lasts for 60 minutes
                                const token = jwt.sign(
                                    {
                                        id: user.id,
                                        role: user.role
                                    },
                                    process.env.SECRET_KEY,
                                    { expiresIn: '60m' }
                                );
                                res.status(200)
                                    .send({
                                        message: 'you are logged in!',
                                        token
                                    });
                            }
                        })
                        .catch((err) => {
                            res.status(500)
                                .send({
                                    message: err.message
                                });
                        });
                }
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
        where: { ownerId: 1 },
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

export default UserController;