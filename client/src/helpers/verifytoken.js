import jwt from 'jsonwebtoken';


/**
 * @description verifies/authentication token
 * @function
 *
 * @returns { bool } true of false representing valid or invalid token
 */
const verifyToken = () => {
  const { token } = window.localStorage;
  let verified;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (error) => {
      if (error) {
        verified = false;
      } else {
        verified = true;
      }
    });
  } else {
    verified = false;
  }
  return verified;
};

export default verifyToken;