const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require('../../requests/users/userRequests');

const userRouter = (app) => {
  router.get('/userHealth', (request, response) => {
    response.send('This is a user endpoint health check');
  });

  router.post('/register', async (request, response, next) => {
    return registerUser(request)
      .then((registeredUser) => {
        app.logger.info('User registered');
        app.logger.trace(registeredUser);
        response.jsonp(registeredUser);
      })
      .catch((error) => {
        app.logger.error(error);
        next(error);
      });
  });

  router.post('/login', async (request, response, next) => {
    return loginUser(request, response)
      .then((userRequest) => {
        app.logger.info('Successfully logged in');
        app.logger.trace(userRequest);
      })
      .catch((error) => {
        app.logger.error(error);
        next(error);
      });
  });

  return router;
};

module.exports = userRouter;
