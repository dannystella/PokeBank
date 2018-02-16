const axios = require("axios");
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();



let grabPokemon = (name, callback) => {
  P.getPokemonByName(name, function(response, error) { // with callback
      if(!error) {
        callback(response);
      } else {
        console.log(error)
      }
    });

}









module.exports.grabPokemon = grabPokemon;