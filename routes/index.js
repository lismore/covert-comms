var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Covert-Comms DApp' });
});

module.exports = router;