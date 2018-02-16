const axios = require("axios");


let grabPokemon = (name, callback) => {
  name = 1;
  var url = "http://pokeapi.co/api/v2/pokemon/" + name;
  axios.get(url).then(data => {
    //   console.log(data.data.name);
      callback(data.data.name);
  });

}









module.exports.grabPokemon = grabPokemon;