// Import Express and set up the app
const express = require('express');
const app = express();

const routes = require('./routes.js');

// Import the error handlers from errorHandlers.js
const { notFoundHandler, globalErrorHandler } = require('./errorHandlers.js');


app.use('/',routes);
app.use('/error', routes);
app.use(notFoundHandler);
app.use(globalErrorHandler);

 // Turn on Express server
 app.listen(3000, () => {
  console.log('Server listening on port 3000');
})