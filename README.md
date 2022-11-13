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
