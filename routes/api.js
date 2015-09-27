var express = require('express');
var router = express.Router();
var buzzfeed = require('../util/buzzfeed');
var scraper = require('../util/markov-scrape.js');
var markov = require('markov');
var mongodb = require('mongodb').MongoClient;
var PythonShell = require('python-shell');

var collection;
mongodb.connect('mongodb://localhost:27017/buzz', function(err, db) {
    if(err)
        console.log(err);
    collection = db.collection('stories');
});

router.get('/', function(req, res, next) {
    buzzfeed.buzz({'buzz_id': '4032262'}, function(err, body) {
        //res.setHeader('content-type', 'application/javascript');
        res.send(body);
    });
});

var chain = markov(1);
router.get('/markov', function(req, res, next) {
        collection.find({}).toArray(function(err, result) {
            // console.log(result);
            for(var i in result) {
                result[i].description.forEach(function(doc) {
                    // chain.seed(doc);
                    console.log(doc);
                });
            }
            res.send(chain.fill(chain.pick()));
        });
});

router.get('/pope', function(req, res, next) {
    res.send(chain.fill(chain.pick()));
});

var getTitle = function(data, callback) {
    
}

module.exports = router;
