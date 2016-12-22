var express = require('express');
var bodyParser = require('body-parser');
var router = require("./route");

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

// body Parser is express middleware to retrieve form's input from client side
// via request.body variable
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));
app.use("/",router);

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
