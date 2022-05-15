const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    name: String,
    punchline: String 
});

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;