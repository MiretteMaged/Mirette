//require depenciess
var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var multer=require('multer');


var DB_URI = "mongodb://localhost:27017/students";
var session = require('express-session');

var paginate = require('express-paginate');

var app = express();

app.set('view engine', 'ejs');

// configure app
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/uploads'));
app.use(session({
  secret: 'marmora',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))



mongoose.connect(DB_URI);
app.use(router);


// start the server
app.listen(8080, function(){
    console.log("server is listening on port 8080");
})