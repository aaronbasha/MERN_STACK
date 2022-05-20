const mongoose = require("mongoose");

// ENTER IN DATABASE NAME AFTER mongodb://localhost/database_name
mongoose.connect("mongodb://localhost/prod_man", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("CONNECTED TO THE DATABASE"))
    .catch(err => console.log("CANNOT CONNECT TO THE DATABASE", err));