/**
* Module dependencies.
*/
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
//var methodOverride = require('method-override');
var session = require('express-session');

var PORT = process.env.PORT || 8080;

var app = express();
var mysql = require('mysql');
var bodyParser = require("body-parser");
var connection;


if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
  });
};

connection.connect();

global.db = connection;

// all environments


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

// development only

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});//call for main index page
app.get('/index', routes.index);//call for signup page
//app.get('/home/index', routes.index);

app.get('/home', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});
app.get('/signup', user.signup);//call for signup page
app.post('/signup', user.signup);//call for signup post
app.get('/home/signup', user.signup);//call for signup page from home
app.get('/login', routes.index);//call for login page
app.post('/login', user.login);//call for login post
app.get('/home/dashboard', user.dashboard);//call for dashboard page after login
//app.get('/home/logout', user.logout);//call for logout
app.post('/dashboard/add', user.dashboardinsert);
app.get('/dashboard/get', user.dashboardget);
app.get('/home/logout', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});//call for main index page
app.get('/home/profile', user.profile);//to render users profile

//Middleware
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
