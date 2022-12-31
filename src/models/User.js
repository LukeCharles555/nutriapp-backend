const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  followedRecipes: [String], // Recipe IDs
  ratedRecipes: [
    {
      // This will be a recipe id
      recipe: {
        type: String,
        required: false,
      },
      rating: {
        type: Number,
        required: false,
      },
    },
  ],
  roles: [String], // Roles such as Admin, Guest, User etc
});

module.exports = User = mongoose.model('users', UserSchema);
