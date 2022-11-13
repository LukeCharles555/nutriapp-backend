const RecipeNotFoundError = require('../../errors/RecipeNotFoundError');
const Recipe = require('../../models/Recipe');

/**
 * @desc - Create a recipe
 *
 * @param request - request coming into the function
 *
 * @returns
 */
const createRecipe = (request) => {
  const { title, description, ingredients, method } = request.body;

  const recipe = Recipe.create({
    title,
    description,
    ingredients,
    method,
  });

  return recipe;
};

const getRecipes = () => {
  const recipes = Recipe.find();

  return recipes;
};

const getRecipeById = (request) => {
  const { id } = request.params;
  const recipe = Recipe.findById(id);

  return recipe;
};

const updateRecipe = async (request) => {
  const _id = request.params.id;
  const { title, description, ingredients, method } = request.body;

  let recipeToUpdate = await Recipe.findOne({ _id });

  if (!recipeToUpdate) {
    return Promise.reject(new RecipeNotFoundError(_id));
  } else {
    recipeToUpdate.title = title;
    recipeToUpdate.description = description;
    recipeToUpdate.ingredients = ingredients;
    recipeToUpdate.method = method;
    await recipeToUpdate.save();
    return recipeToUpdate;
  }
};

const deleteRecipe = async (request) => {
  const _id = request.params.id;

  const recipe = await Recipe.deleteOne({ _id });

  // Here we can tell the user a helpful error message if a recipe isnt found in the DB
  if (recipe.deletedCount === 0) {
    return Promise.reject(new RecipeNotFoundError(_id));
  } else {
    return recipe;
  }
};

module.exports = {
  createRecipe,
  getRecipeById,
  getRecipes,
  updateRecipe,
  deleteRecipe,
};
