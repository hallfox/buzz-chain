var express = require('express');
var router = express.Router();
var buzzfeed = require('../util/buzzfeed');

router.get('/', function(req, res, next) {
    buzzfeed.buzz({'buzz_id': '4032262'}, function(err, body) {
        //res.setHeader('content-type', 'application/javascript');
        res.send(JSON.parse(body));
    });
});

module.exports = router;
