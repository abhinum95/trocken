const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');


//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.get('/', (req,res) => {
  console.log(req);
  res.render('index');
});

app.get('/contacts', (req,res) => {
  res.render('contact');
});


app.listen(4000 , ()=> {
  console.log('App started on 4000 port');
});