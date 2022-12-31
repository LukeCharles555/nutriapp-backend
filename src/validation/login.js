const Validator = require('validator');
const isEmpty = require('is-empty');

/**
 * @desc - Validation function to check if the login data coming through is filled correctly
 *
 * @param {Object} data - Data to be validated
 *
 * @returns { {errors: {email: string | undefined, password: string | undefined}, isValid: boolean } }
 */
const validateLoginInput = (data) => {
  // Initialize errors
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateLoginInput;
