const   express = require('express'),
        router  = express.Router(),
        Account = require('../models/account'),
        User    = require('../models/user'),
        Cryptr = require('cryptr'),
        cryptr = new Cryptr('mySecretKey');


//Index
//Only accessable if a user is logged in. The middleware isLoggedIn redirects users to register page 
//if they try to access this route
router.get('/accounts', isLoggedIn, (req, res) => {

    res.locals.pageTitle = 'Accounts Home';
    res.locals.stylesheet = 'accounts/accounts';

    User.findById(req.user._id).populate('accounts').exec((err, foundUser) =>{

        if(err){
            console.log(err);

        } else {
            res.render('accounts/accounts', {foundUser:foundUser});
        }
    });
});

//Create a new account to be saved in the password manager
router.get('/accounts/new', isLoggedIn, (req, res) =>{
    res.locals.pageTitle = 'Add an Account';
    res.locals.stylesheet = 'accounts/new';
    res.render('accounts/new');
});

//Create
router.post('/accounts', isLoggedIn, (req, res) =>{

    User.findById(req.user._id, (err, foundUser) => {
        if(err){
            console.log(err);
        } else {
            
            //const encryptedPassword = cryptr.encrypt(req.body.account.password);

            Account.create({

                title: req.body.account.title,
                url: req.body.account.url,
                username: req.body.account.username,
                password: cryptr.encrypt(req.body.account.password)
                
            }, (err, createdAccount) =>{
                if(err){
                    console.log(err);
                } else {
                    foundUser.accounts.push(createdAccount);
                    foundUser.save();
                    res.redirect('/accounts')
                }
            });

        }
    });

});

//Show
router.get('/accounts/:id', isLoggedIn, (req, res) => {
    res.locals.pageTitle = 'View Account';
    res.locals.stylesheet = 'accounts/show';

    Account.findById(req.params.id, (err, selectedAccount) =>{
        if(err){
            console.log(err);
        } else {
            const showAccount = {
                id: selectedAccount.id,
                title: selectedAccount.title,
                url: selectedAccount.url,
                username: selectedAccount.username,
                password: cryptr.decrypt(selectedAccount.password)
            }
            res.render('accounts/show', {account: showAccount});
        }
    });
});

//Edit
router.get('/accounts/:id/edit', isLoggedIn, (req, res) => {
    res.locals.pageTitle = 'Edit Account';
    res.locals.stylesheet = 'accounts/edit';

    Account.findById(req.params.id, (err, editAccount) =>{
        if(err){
            console.log(err);
        } else {
            const showAccount = {
                id: editAccount.id,
                title: editAccount.title,
                url: editAccount.url,
                username: editAccount.username,
                password: cryptr.decrypt(editAccount.password)
            }
            res.render('accounts/edit', {account: showAccount});
        }
    });
});

//Update
router.put('/accounts/:id', isLoggedIn, (req, res) => {

    const updatedAccount = {
        title: req.body.title,
        url: req.body.url,
        username: req.body.username,
        password: cryptr.encrypt(req.body.password)
    }

    Account.findByIdAndUpdate(req.params.id, updatedAccount, (err, accountChanged) => {
        if(err){
            console.log(err);
            res.redirect('/accounts');
        } else {
            res.redirect('/accounts/' + req.params.id);
        }
    });

});

//Delete
router.delete('/accounts/:id', isLoggedIn, (req, res) => {

    Account.findByIdAndDelete(req.params.id, (err) =>{
        if(err){
            console.log(err);
        } else {
            res.redirect('/accounts');
        }
    });
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        res.redirect('/login');
    }
}

module.exports = router;
