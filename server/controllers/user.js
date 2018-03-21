/**
 * Controller to handle :
     Adding a new comments,
     Getting all comments for a business
 */

import User from '../model/user';

import users from '../tables/users';

/**
 *@description Adds a new user
 *
 * @param {Object} req - api request
 * @param {Object} res - api response
 *
 * @return {Object} return - response onject
 */
const addUser = (req, res) => {
    const userId = users.length + 1;
    const newUser = new User(userId, req.body.username, req.body.password, req.body.email);
    users.push(newUser);
    return res.status(201).json({
        message: 'signup successful!',
        username: req.body.username,
        email: req.body.email
    });
};

const getUser = (req, res) => res.status(201).json({
        message: users
    });


/**
 * Signs in a registered user
 *
 * @param {Object} req - api request
 * @param {Object} res - api response
 *
 * @return {Object} return - response onject
 */
const login = (req, res) => {
    const usernames = users.map(user => user.username);
    const userIndex = usernames.indexOf(req.body.username);

    if (userIndex < 0) {
        return res.status(404)
            .send({
                message: 'no such user exists'
            });
    }
    if (req.body.password !== users[userIndex].password) {
        return res.status(400)
            .send({
                message: 'Invalid Password'
            });
    }
    return res.status(200)
        .send({
            message: 'You are signed in!',
            username: req.body.username
        });
};

const handleError = (req, res) => res.status(404)
        .send({
            message: 'You are welcome to WEconnect!'
        });

const userController = {
 addUser, login, handleError, getUser
};

export default userController;