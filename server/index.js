const express = require('express');
const bodyParser = require('body-parser');
const pokeMethods = require('./models');
const grabPokemon = require('./helpers')


let app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

//GET ROUTE


app.get('/poke', function(req, res){
  res.end()
})





//POST ROUTE
app.post('/poke', function(req, res){
  var input = req.body.pokemon.userInput;
  grabPokemon.grabPokemon(input, function(data){
    data.types.forEach(function(type){
      console.log(type.type.name);
    })
    pokeMethods.pokeMethods.save(data);
  });
  res.end()
})


let port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});