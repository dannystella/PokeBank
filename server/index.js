const express = require('express');
const bodyParser = require('body-parser');
const taskMethods = require('./models');



let app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

//GET ROUTE


app.get('/tasks', function(req, res){
  console.log("hi");
  res.end()
})





//POST ROUTE
app.post('/tasks', function(req, res){
  console.log(req.body);
  res.end()
})


let port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});