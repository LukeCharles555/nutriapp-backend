const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: String,
  description: String,
  ingredients: [
    {
      ingredient: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
    },
  ],
  method: [
    {
      step: {
        type: Number,
        required: true,
      },
      stepDescription: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('Recipe', RecipeSchema);
