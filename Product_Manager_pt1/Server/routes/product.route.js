// require is imported from controller.js file
const ProductController = require("../controllers/product.controller")

// Routes below are imported into the server.js file

module.exports = app => {
    app.get("/api/products/test", ProductController.test)

}