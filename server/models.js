const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/poke')
var db = mongoose.connection;


let pokeSchema = mongoose.Schema({
    id: Number,
    url: String,
    name: String, 
    type: String
})

let Poke= mongoose.model('Poke', pokeSchema);

let pokeMethods = {};

pokeMethods.save = (pokemon) => {
    return Poke.create(pokemon);
}

pokeMethods.grabAll = () => {
    return Poke.find({}).exec();
}

module.exports.pokeMethods = pokeMethods;