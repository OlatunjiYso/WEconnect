import jwt from 'jsonwebtoken';


/**
 * @description verifies/authentication token
 * @function
 *
 * @returns { bool } true of false representing valid or invalid token
 */
const verifyToken = () => {
  const { token } = localStorage;
  let verified;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
          return verified === false;
      }
      if (decoded) {
        return verified === true;
      }
  });
  } else {
    verified = false;
  }
  return verified;
};

export default verifyToken;