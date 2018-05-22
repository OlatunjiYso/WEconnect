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
                phone: req.body.phone
            })
            .then((user) => {
                res.status(201)
                    .json({
                        message: 'You are signed up!',
                        username: user.username,
                        email: user.email,
                        id: user.id
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
      * @description -changes the password of a user.
      *
      * @param {Object} req -the api request
      * @param {Object} res -the api response
      *
      * @return {json} message
      */
    static changePassword(req, res) {
        User
            .findOne({
                where: {
                    id: req.user.id
                }
            })
            .then((user) => {
                bcrypt.compare(req.body.currentPassword, user.password)
                    .then((validPassword) => {
                        if (!validPassword) {
                            res.status(401)
                                .json({
                                    message: 'Please enter the correct current password to proceed'
                                });
                        } else {
                            if (req.body.currentPassword === req.body.newPassword) {
                                return res.json({
                                    message: 'Your password remains unchanged'
                                });
                            }
                            const password = bcrypt.hashSync(req.body.newPassword, 10);
                            user.update({
                                password
                            })
                                .then(() => {
                                    res.status(200)
                                        .json({
                                            success: true,
                                            message: 'You have successfully changed your password',
                                        });
                                });
                        }
                    })
                    .catch((err) => {
                        res.status(500)
                            .json({
                                error: err.message
                            });
                    });
            });
    }

    /**
    * @description -updates the details of a user.
    *
    * @param {Object} req -the api request
    * @param {Object} res -the api response
    *
    * @return {json} message
    */
    static updateUser(req, res) {
        User
            .findOne({
                where: {
                    id: req.params.userId
                }
            })
            .then((user) => {
                const initialUser = { ...user };
                const initialParameters = Object.keys(initialUser.dataValues)
                    .map(key => initialUser.dataValues[key]);
                user
                    .update({
                        username: req.body.username || user.username,
                        email: req.body.email || user.email,
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
                                    message: 'No changes made, your details remains intact',
                                });
                        }
                        return res.status(200)
                            .json({
                                success: true,
                                modified: true,
                                message: 'details successfully modified',
                            });
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
      * @description -logs in a registered user
      *
      * @param {Object} req -the api request
      * @param {Object} res -the api response
      *
      * @return {json} message
      */
    static login(req, res) {
        // Handle validations in middleware
        User
            .findOne({
                where: { username: req.body.username },
            })
            .then((user) => {
                if (!user) {
                    res.status(404)
                        .json({
                            success: false,
                            message: 'No such user exists'
                        });
                } else {
                    // compare password
                    bcrypt.compare(req.body.password, user.password)
                        .then((validPassword) => {
                            if (!validPassword) {
                                res.status(401)
                                    .json({
                                        success: false,
                                        message: 'invalid password'
                                    });
                            } else {
                                // issue jsonwebtoken that lasts for 6 x 60 minutes
                                const token = jwt.sign(
                                    {
                                        id: user.id
                                    },
                                    process.env.SECRET_KEY,
                                    { expiresIn: '360m' }
                                );
                                res.status(200)
                                    .json({
                                        message: 'you are logged in!',
                                        token,
                                        id: user.id,
                                        username: user.username,
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
            });
    }

    /**
     * @description -gets all user's businesses
     *
     * @param {Object} req -the api request
     * @param {Object} res -the api response
     *
     * @return {json} message
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
                    if (businesses.length > 0) {
                        return res.status(200)
                            .json({
                                success: true,
                                message: 'all your businesses',
                                businesses
                            });
                    }
                    return res.status(200)
                        .json({
                            success: true,
                            message: 'You have no business registered yet',
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

export default UserController;