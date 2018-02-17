const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/poke')
var db = mongoose.connection;


let pokeSchema = mongoose.Schema({
    id: {type: Number, unique: true},
    url: String,
    name: String,
    sprite: String,
    types: [] 
})

let Poke = mongoose.model('Poke', pokeSchema);

let pokeMethods = {};
pokeMethods.save = (pokemon) => {
    var types = pokemon.types.map(type => {
        return type.type.name;
    })
    pokemon.types = types;
    var sprite = pokemon.sprites.front_default;
    pokemon.sprite = sprite;
    return Poke.create(pokemon);
}

pokeMethods.grabAll = () => {
    return Poke.find({}).exec();
}



module.exports.pokeMethods = pokeMethods;