const express = require('express');
const app = express();
const path = require('path');
// const middlewareFuncName = (request, response, next) => {
  // Middleware code to run here

  // Move onto next middleware function or the route handler
  // next();
// };
const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

//STATIC ASSETS - HTML, CSS, images, client-side JS files

// Configures entire app to use 2 middleware functions
app.use(urlLogger, timeLogger);

//Configures app to use a middleware functions
// For every request to the server, use this path for static files
// path.join... the absolute path of the public directory
app.use(express.static(path.join(__dirname, 'public')));




// SETTING UP A ROUTE
// app.get() creates a route handler
  // First argument- listens for GET requests from a client
  // Second argument- callback function that takes a request object and a response object.
    // The request object contains info about the request that came from the client
    // The response object contains info that we want to send as a response back to the client (also has functions that enable us to actually send a response).

app.get('/', (request, response) => {
  // Sends a response with content that can be delivered to an end user
  response.send('hello world');
});

app.get('/json', (request, response) => {
  // Respond with JSON data HERE
  response.status(200).json({"name": "Francy"});
});

app.get('/sunsets', (request, response) => {
  response.sendFile('/Users/franceslang/turing/mod4/express-tutorial/public/assets/sunset.jpg')
});

// Function tells the server to start listening for connections a port
app.listen(3000, () => {
  console.log('Express intro running on localost:3000')
});

app.use((request, response, next) => {
  response.status(404).send('No You May Not Enter')
})
