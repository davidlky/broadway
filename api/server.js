var express = require('express');
var path = require('path');
var compression = require('compression');
var bodyParser = require('body-parser');

var db = require('./models/index.js');

var app = express();

app.use(compression());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

db.sequelize
  .sync()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, '../public')));
app.use('/bower_components',  express.static(path.join(__dirname, '../bower_components')));

// custom routes
var api_route = require('./routes/api');
app.use('/api', api_route);

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT);
});
