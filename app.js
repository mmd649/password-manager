const
    express                 = require('express'),
    bodyParser              = require('body-parser'),
    methodOverride          = require('method-override'),
    mongoose                = require('mongoose'),
    passport                = require('passport'),
    LocalStrategy           = require('passport-local'),
    User                    = require('./models/user'),
    app                     = express();

//=================================================
//Require the routes saved in a seperate space.
//================================================
const   authenticationRoutes    = require('./routes/authentication'),
        accountRoutes           = require('./routes/accounts'),
        defaultRoutes           = require('./routes/default');


//Set up the database connection
mongoose.connect('mongodb://localhost:27017/password_manager', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));

//==========================
//Passport Configuration
//==========================

app.use(require('express-session')({
    secret: 'A personal password manager for internet users',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/*=================
    Set user for every routes available
======================*/
app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

/* Use the routes that was required in the beggining.
   defaultRoutes contains the * route so its important to use it after evey route has been defined
   to avoid other routed being override. */
app.use(accountRoutes);
app.use(authenticationRoutes);
app.use(defaultRoutes);

//Listen using the port 3000.
app.listen(3000, ()=>{
    console.log('App is running.');
});
