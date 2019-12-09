const   express = require('express'),
        router  = express.Router();

//Landing page
router.get('/', (req, res) => {
    res.locals.pageTitle = 'Password Manager';
    res.locals.stylesheet = 'landing';
    res.render('landing', {currentUser: req.user});
});


//Page-Not-Found
router.get('*', (req, res) => {
    res.locals.pageTitle = 'Page not Found';
    res.locals.stylesheet = 'not-found';
    res.render('not-found', {notFound: req.path});
});

module.exports = router;
