const   express     = require('express'),
        router      = express.Router(),
        passport    = require('passport'),
        User        = require('../models/user');


//==============================
//Register
//==============================

router.get('/register', (req, res) => {
    res.locals.pageTitle = 'Register';
    res.locals.stylesheet = 'users/register';

    if(req.user){
        res.redirect('/accounts');
    } else {
        res.render('users/register');
    }
});

/* Deals with the post request when user registers. Checks the database if the username already 
   exist, if not then create the new user account. Redirects to account homepage.
*/
router.post('/register', (req, res) => {
    if(req.body.password === req.body.verify){
        User.register(new User({username:req.body.username}), req.body.password, (err, newUser) =>{
            if(err){
                console.log(err);
                return res.render('users/register');
            } else {
                passport.authenticate('local')(req, res, () =>{
                    res.redirect('/accounts');
                });
            }
        });

    } else {
        res.redirect('/register');
    }
});

//==============================
//Login
//==============================
router.get('/login', (req, res) => {
    res.locals.pageTitle = 'Login';
    res.locals.stylesheet = 'users/login';
    res.render('users/login')
});

//Simple Login process. If user login fails, redirect to login page.
//If successful, redirect to accounts page
router.post('/login', passport.authenticate('local',
    {
        successRedirect: '/accounts',
        failureRedirect: '/login'
    }), (req, res) => {

});

//==============================
//Logout
//==============================

router.get('/logout', (req, res) =>{
    req.logout();
    res.redirect('/');
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        res.redirect('/login');
    }
}

module.exports = router;
