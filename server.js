const express = require('express');
const path = require("path");
const db = require("./db")

// This sets up the basic properties for our express server and tells node that
// we are creating an "express" server
const app = express();

// Create a binding to hold the port number. This will be used to set the port
// for the server.
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  express.static(path.join(__dirname, "./public"), {extensions: [".html"] })
);

// The code below points the server to a series of "route" files. These routes
// give our server a "map" of how to respond when users visit or request data
// from various URLs.
// require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


// The below code effectively "starts" our server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
