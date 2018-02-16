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


// "types": [
//         {
//             "slot": 2,
//             "type": {
//                 "url": "https://pokeapi.co/api/v2/type/4/",
//                 "name": "poison"
//             }
//         },
//         {
//             "slot": 1,
//             "type": {
//                 "url": "https://pokeapi.co/api/v2/type/12/",
//                 "name": "grass"
//             }
//         }




module.exports.pokeMethods = pokeMethods;