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
  var input = (parseInt(req.body.pokemon.userInput));
  grabPokemon.grabPokemon(input, function(err, data){
    console.log(data);
  });
  res.end()
})


let port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});