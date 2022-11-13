const bodyParser = require('body-parser');
const cors = require('cors');

// Consts
const { RECIPES } = require('../consts/Routes');

// Routes
const recipeRouter = require('../routes/recipes/recipeRouter');

const initialiseServer = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(cors());

  app.use(RECIPES, recipeRouter(app));

  return app;
};

module.exports = initialiseServer;
