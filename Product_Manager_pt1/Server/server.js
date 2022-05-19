// IMPORT DEPENDENCIES (Do first)
const express = require('express');

const app = express();
const port = 8000;

// CONFIGURE YOUR MONGOOSE "Create mongoose.config.js file first" (do fourth)
require("./config/mongoose.config")

// CONFIGURE EXPRESS (Do second)
// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({exteneded:true}))

// CONNECT ROUTES TO EXPRESS SERVER "create routes file first" (do fifth)
require("./routes/product.route")(app)
// const productRoutes = require("./routes/product.route")productRoutes(app)

// RUN EXPRESS SERVER (Do third)
app.listen(port, () => console.log(`LOCKED AND LOADED ON PORT: ${port}`) );
