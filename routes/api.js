var express = require('express');
var router = express.Router();
var buzzfeed = require('../util/buzzfeed');
var scraper = require('../util/markov-scrape.js');
var markov = require('markov');
var mongodb = require('mongodb').MongoClient;
var PythonShell = require('python-shell');
var async = require('async');

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

// var chain = markov(1);
// router.get('/markov', function(req, res, next) {
//     collection.find({}).toArray(function(err, result) {
//         // console.log(result);
//         for(var i in result) {
//             result[i].description.forEach(function(doc) {
//                 // chain.seed(doc);
//                 console.log(doc);
//             });
//         }
//         res.send(chain.fill(chain.pick()));
//     });
// });

router.get('/mark', function(req, res, next) {
    genMarkov("", null, res);
});

var genMarkov = function(search, callback2, res) {
    collection.find({}).toArray(function(err, result) {
        var titleString, descriptionString, titleVector, descriptionVector = "";
        for(var i in result) {
            titleString += "\n" + result[i].title;
            descriptionString += "\n" + result[i].buzz_description;
            result[i].description.forEach(function(data) {
                descriptionVector += "\n" + data;
            });
            result[i].headers.forEach(function(data) {
                titleVector += "\n" + data;
            });
        }
        var tchain = dchain = dvchain = hchain = [];
        async.parallel([
            function(callback) {
                var tshell = new PythonShell('testshort.py', {scriptPath: 'markovify/'});
                tshell.send(titleString);
                tshell.on('message', function(message) {
                    tchain.push(message);
                });
                tshell.end(function(err) {
                    if(err) throw err;
                    callback();
                });
            },

            function(callback) {
                var dshell = new PythonShell('test.py', {scriptPath: 'markovify/'});
                dshell.send(descriptionString);
                dshell.on('message', function(message) {
                    dchain.push(message);
                });
                dshell.end(function(err) {
                    if(err) throw err;
                    callback();
                });
            },

            function(callback) {
                var dvshell = new PythonShell('test.py', {scriptPath: 'markovify/'});
                dvshell.send(descriptionVector);
                dvshell.on('message', function(message) {
                    dvchain.push(message);
                });
                dvshell.end(function(err) {
                    if(err) throw err;
                    callback();
                });
            },

            function(callback) {
                var hshell = new PythonShell('test.py', {scriptPath: 'markovify/'});
                hshell.send(titleVector);
                hshell.on('message', function(message) {
                    hchain.push(message);
                });
                hshell.end(function(err) {
                    if(err) throw err;
                    callback();
                });
            }
        ], function(err, result) {
            res.send({
                // tchain + "\t" + dchain + "\n" + dvchain + "\n" + hchain
                'title': tchain[1],
                'author': {
                    'name': 'Richard \'MongoDB\' Stallman',
                    'image': 'http://buzz-chain.jagels.io/RS.png'
                },
                'description': dchain[8],
                'buzzes': [
                    {
                        'title': hchain[0],
                        'desc': dchain[0]
                    },
                    {
                        'title': hchain[9],
                        'desc': dchain[9]
                    },
                    {
                        'title': hchain[2],
                        'desc': dchain[2]
                    },
                    {
                        'title': hchain[3],
                        'desc': dchain[3]
                    },
                    {
                        'title': hchain[4],
                        'desc': dchain[4]
                    },
                    {
                        'title': hchain[5],
                        'desc': dchain[5]
                    },
                    {
                        'title': hchain[6],
                        'desc': dchain[6]
                    },
                    {
                        'title': hchain[7],
                        'desc': dchain[7]
                    },
                ]
            });
            // console.log("tchain:\t " + tchain);
            // console.log("dchain: \t" + dchain);
            // console.log("dvchain: \t" + dvchain);
            // console.log("hchain: \t" + hchain);
        });
    });
}

router.get('/pope', function(req, res, next) {
    res.send(chain.fill(chain.pick()));
});

var getTitle = function(data, callback) {
}

module.exports = router;
