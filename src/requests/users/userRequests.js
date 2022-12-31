const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const ValidationError = require('../../errors/ValidationError');
const EmailNotFoundError = require('../../errors/EmailNotFoundError');
const PasswordIncorrectError = require('../../errors/PasswordIncorrectError');

const User = require('../../models/User');

const registerUser = async (request) => {
  const { errors, isValid } = validateRegisterInput(request.body);

  if (!isValid) {
    return Promise.reject(new ValidationError(Object.values(errors)));
  }

  return User.findOne({ email: request.body.email }).then((user) => {
    if (user) {
      return Promise.reject(new ValidationError('Email already exists'));
    } else {
      // Initialize user information here
      const newUser = new User({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        roles: request.body.roles || ['User'],
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newUser.password, salt, (error, hash) => {
          if (error) throw error;
          newUser.password = hash;
          newUser.save();
          return newUser;
        });
      });
    }
  });
};

// Handling response within here so we can grab the JWT token after user has logged in
const loginUser = async (request, response) => {
  const { errors, isValid } = validateLoginInput(request.body);

  if (!isValid) {
    return Promise.reject(new ValidationError(errors));
  }

  const email = request.body.email;
  const password = request.body.password;

  // Find user by email
  return User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return Promise.reject(new EmailNotFoundError(email));
    }
    // Check password
    return bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          roles: user.roles,
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (error, token) => {
            return response.json({
              success: true,
              token: 'Bearer ' + token,
            });
          },
        );
      } else {
        return Promise.reject(new PasswordIncorrectError());
      }
    });
  });
};

module.exports = {
  registerUser,
  loginUser,
};
