const express = require('express');
const app = express();

// Consts
import { PORT } from './consts/project';

// define a route handler for the default home page
app.get('/', (req: any, res: any) => {
  res.send('Hello world!');
});

// start the Express server
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
