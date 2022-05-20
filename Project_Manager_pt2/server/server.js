 // IMPORT DEPENDENCIES (Do first)
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

// CONFIGURE YOUR MONGOOSE "Create mongoose.config.js file first" (do fourth)
require("./config/mongoose.config")

// CONFIGURE EXPRESS (Do second)
app.use(cors()) // Allows for react/express to communicate
app.use(express.json())
app.use(express.urlencoded({exteneded:true}))

// CONNECT ROUTES TO EXPRESS SERVER "create routes file first" (do fifth)
require("./routes/product.route")(app)
// const ProductRoutes = require("./routes/product.route")ProductRoutes(app)

// RUN EXPRESS SERVER (Do third)
app.listen(port, () => console.log(`LOCKED AND LOADED ON PORT: ${port}`) );
