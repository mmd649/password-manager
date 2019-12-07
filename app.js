const
    express                 = require('express'),
    bodyParser              = require('body-parser'),
    methodOverride          = require('method-override'),
    mongoose                = require('mongoose'),
    passport                = require('passport'),
    LocalStrategy           = require('passport-local'),
    User                    = require('./models/user'),
    app                     = express();


const   authenticationRoutes    = require('./routes/authentication'),
        accountRoutes           = require('./routes/accounts'),
        defaultRoutes           = require('./routes/default');

mongoose.connect('mongodb://localhost:27017/password_manager', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));


//Passport Configuration

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

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});


app.use(accountRoutes);
app.use(authenticationRoutes);
app.use(defaultRoutes);


app.listen(3000, ()=>{
    console.log('App is running.');
});
