const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const index = require('./routes/index')
const keys = require('./config/keys');
require('./models/user');

const app = express();


// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));


//Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.engine('handlebars', exphbs)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');


app.use(cookieParser());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
}));
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.use('/',index);

//Set port for the App
const PORT = process.env.PORT || 4000

app.listen(PORT, function(){
    console.log('Server Started')
})