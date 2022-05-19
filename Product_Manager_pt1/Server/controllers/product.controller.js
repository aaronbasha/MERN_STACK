// Destructured from the model.js file exports.Product. 
// require is imported into the route.js file
const {Product} = require("../models/product.model")

module.exports.test = (req,res) => {
    res.json("HELLO WORLD")
}

// Look at API routs and put in here commented out for future reference

    // CREATE

    // READ

    // UPDATE

    // DELETE