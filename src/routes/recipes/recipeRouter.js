const express = require('express');
const {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require('../../requests/recipes/recipeRequests');
const router = express.Router();

const recipeRouter = (app) => {
  /**
   * GET to check API health of the recipes router
   */
  router.get('/recipeHealth', (request, response) => {
    response.send('This is an API health check');
  });

  /**
   * Route to get all recipes
   */
  router.get('/getRecipes', async (request, response, next) => {
    return getRecipes()
      .then((recipes) => {
        app.logger.info('Recipes retrieved');
        app.logger.trace(recipes);
        response.jsonp(recipes);
      })
      .catch((error) => {
        app.logger.error(error);
        next(error);
      });
  });

  /**
   * Route to get a single recipe by ID
   */
  router.get('/getQuestions/:id', async (request, response, next) => {
    return getRecipeById(request)
      .then((question) => {
        app.logger.info('Recipe retrieved');
        app.logger.trace(question);
        response.jsonp(question);
      })
      .catch((error) => {
        app.logger.error(error);
        next(error);
      });
  });

  /**
   * Route to create a recipe
   */
  router.post('/createRecipe', async (request, response, next) => {
    return (
      createRecipe(request)
        // @ts-ignore
        .then(({ data: recipe }) => {
          app.logger.info('Recipe created');
          app.logger.trace(recipe);
          response.jsonp(recipe);
        })
        .catch((error) => {
          app.logger.error(error);
          next(error);
        })
    );
  });

  /**
   * Route to update a recipe from ID
   */
  router.put('/updateRecipe/:id', async (request, response, next) => {
    return (
      updateRecipe(request)
        // @ts-ignore
        .then(({ data: question }) => {
          app.logger.info('Recipe updated successfully');
          app.logger.trace(question);
          response.jsonp(question);
        })
        .catch((error) => {
          app.logger.error(error);
          next(error);
        })
    );
  });

  /**
   * Route to delete a recipe
   */
  router.delete('/deleteRecipe/:id', async (request, response, next) => {
    return deleteRecipe(request)
      .then((question) => {
        app.logger.info('Recipe deleted successfully');
        app.logger.trace(question);
        response.jsonp(question);
      })
      .catch((error) => {
        app.logger.error(error);
        next(error);
      });
  });

  return router;
};

module.exports = recipeRouter;
