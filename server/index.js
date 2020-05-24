// import express
const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');
const configs = require('./config');

require('dotenv').config({ path: 'variables.env' });

// const db = require('./config/database');

// db.authenticate()
//     .then(() => console.log('db connected'))
//     .catch(error => console.log(error))

// config express
const app = express();
  
// enable pug

app.set('view engine', 'pug');

// adding to views
app.set('views', path.join(__dirname, './views'));

// add a static public folder 
app.use(express.static('public'));


// validate if we are on development or production 
const config = configs[app.get('env')];

// create variable for web site
app.locals.title = config.siteName;


// show the current date and the current page(ruta)
app.use((req, res, next) =>{
    // create a new date
    const date = new Date();

    res.locals.currentDate = date.getFullYear();
    res.locals.currentPage = req.path;
   
    return next()
})

// execute bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// get the routes
app.use('/', routes())

// port and host for app
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;



app.listen(port, host, () =>{
    console.log('server is running ')
})