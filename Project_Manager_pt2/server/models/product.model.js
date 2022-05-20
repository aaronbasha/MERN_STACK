// IMPORT DEPENDENCIES
const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
}, { timestamps: true })

// exports.Product imported to {Product} in controller.js file
module.exports.Product = mongoose.model("Product", ProductSchema)