const bodyParser = require('body-parser');
const cors = require('cors');

const recipeRouter = require('../routes/recipes/recipeRouter');

const initialiseServer = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(cors());

  app.use('/recipes', recipeRouter(app));

  return app;
};

module.exports = initialiseServer;
