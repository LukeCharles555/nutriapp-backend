# NutriApp Backend

## Overview

This project is written for a nutrition app. This is where the backend code is stored which will handle requests to the mongo database, and will also handle validation to return meaningful errors to the front-end.

## Usage

Clone this project to your local machine.

```bash
git clone https://gitlab.com/LukeCharles555/nutriapp-backend.git
```

Open the project in an appropriate IDE, and then install all the required dependencies:

```bash
npm install
```

Once installed, the project is ready to go! Run:

```bash
npm run server
```

Or:

```bash
npm start
```

npm run server will start the API with nodemon so it will reload after every file change, helpful if developing on this project.

npm start will start the API with node so it will just act as a static server, preferred if you just want to use the API and not develop on it.

## Configuration

There is only one bit of configuration you need to set up with this project, and that is to hook it up to a mongo database, I use Mongo DB Atlas.

An example config file of how to set this up can be found [here](./src/config/keys.js.example)

## Requests

There are 2 endpoints in this project so far, users and recipes.

Users is used for authentication, such as logging in and registering.

Recipes is used for CRUD functionality on the recipes collection in MongoDB.

Once you're all set up, the endpoints to send requests to can be found here:

### Users

| Endpoint                               |                                    Description                                     |                                                                                                    Request to send |
| -------------------------------------- | :--------------------------------------------------------------------------------: | -----------------------------------------------------------------------------------------------------------------: |
| http://localhost:4000/users/register   |       Sends a POST request to the user collection in mongo, with a new user        | POST with{ "name": "testName", "email": "test@test.com", "password": "testPassword", "password2": "testPassword" } |
| http://localhost:4000/users/login      | Sends a POST request to the user collection in mongo, to check if that user exists |                                                 POST with { "email": "test@test.com", "password": "testPassword" } |
| http://localhost:4000/users/userHealth |             Sends a GET request to check that the user endpoint is OK              |                                                                                                        GET Request |

### Recipes

| Endpoint                                       |                                                       Description                                                        |                                   Request to send |
| ---------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------: |
| http://localhost:4000/recipes/recipeHealth     |                               Sends a GET request to check that the recipe endpoint is OK                                |                                       GET Request |
| http://localhost:4000/recipes/createRecipe     |                     Sends a POST request to the recipe collection in mongo, to create a new question                     |        POST with [find-here](./data.json.example) |
| http://localhost:4000/recipes/getRecipes       |                                  Sends a GET request to the recipes collection in mongo                                  |                                       GET Request |
| http://localhost:4000/recipes/updateRecipe/:id |  Sends a PUT request to the recipe collection in mongo, with :id in the url replaced by what recipe you want to update   |         PUT with [find-here](./data.json.example) |
| http://localhost:4000/recipes/deleteRecipe/:id | Sends a DELETE request to the recipe collection in mongo, with :id in the url replaced by what recipe you want to delete | DELETE with id of object replacing :id in the url |
