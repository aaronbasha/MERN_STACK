// Destructured from the model.js file exports.Product. 
// require is imported into the route.js file
const { Product } = require("../models/product.model")

module.exports.test = (req, res) => {
    res.json("HELLO WORLD")
}

// Look at API routs and put in here commented out for future reference

// CREATE
module.exports.create = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json(err))
}

// READ
module.exports.allProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err))
}

module.exports.oneProduct = (req, res) => {
    // console.log(req.params.product_id)
    Product.findOne({ _id: req.params.product_id })
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.status(400).json(err));

};

// UPDATE
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.product_id }, req.body, { new: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(400).json(err));
};

// DELETE
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.product_id })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
};