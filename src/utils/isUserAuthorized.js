const jwt_decode = require('jwt-decode');

/**
 * @desc - A util to check if the user it authorized before sending certain requests
 *
 * @param {Object} request - Request coming into function
 *
 * @returns {boolean}
 */
const isUserAuthorized = (request) => {
  const token = request.headers.authorization;
  const user = jwt_decode(token);

  if (user.roles.includes('Admin')) {
    return true;
  }

  return false;
};

module.exports = isUserAuthorized;
