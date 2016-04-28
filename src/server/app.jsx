
'use strict'

var express = require('express')
, cons = require('consolidate')
, app = express();





//
// Get jade templating working
//
app.engine('jade', cons.jade);
app.set('view engine', 'jade');
app.set('views', './src/views');


// Compiled Components
app.use('/c', express.static('./compiled_assets'));


// app.route("/")
//   .get( function(req, res) {
//       res.render('index', { state: 'empty' });
//   });

app.get("/", function(req, res) {
  res.render('index', { title: 'Home Page'} )
})



// Login Page


app.listen(3000, function() {
  console.log('Running Expres App on port 3000');
})


//
