import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt';

import db from '../models';

const { User } = db;

/**
 * Usercontroller class
*/
class UserController {

    /**
     * Creates a new user with a hashed password and issues a json web token
     * @param {Object} req -the api request
     * @param {Object} res -the api response
     * @return {json} message key
     */
    static createUser(req, res) {
        if (
            req.body.password === 'undefined' ||
            req.body.password === 'null' ||
            req.body.password.length < 5
        ) {
            res.status(400)
                .send({
                    message: 'password is too short'
                });
        } else {
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

}