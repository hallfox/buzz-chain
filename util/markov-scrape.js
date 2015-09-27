var striptags = require('striptags');
var buzzfeed = require('./buzzfeed');
var mongodb = require('mongodb').MongoClient;
var async = require('async');
var unescape = require('unescape');

var sanatize = function(string) {
    return unescape(striptags(string)).replace(/((?! |\w|\.|\,|\?).)/ig, "");
}


module.exports.scraper = function(err, body) {
    var feed = body;
    async.each(feed, function(article, callback) {
        var buzzId = article.content.buzz_id;
        buzzfeed.buzz({'buzz_id': buzzId}, function(error, body) {
            var buzz = body.buzz;
            var interestingContent = {
                _id: buzzId,
                title: sanatize(article.content.feed.title),
                buzz_description: sanatize(buzz.description),
                headers: [],
                description: []
            };
            buzz.sub_buzzes.forEach(function(d) {
                if (d.header) {
                    interestingContent.headers.push(sanatize(d.header));
                }
                if (d.description) {
                    interestingContent.description.push(sanatize(d.description));
                }
            });
            // Insert into db
            collection.insert(interestingContent, callback);
            // console.log(JSON.stringify(interestingContent));
        });
    }, function(err) {
        if(err)
            console.log(err);
        database.close()
    });
}

module.exports.searchScraper = function(err, body) {
    // console.log(body);
    async.each(body.response.results, function(article, callback) {
        var buzzId = article.buzz_id;
        buzzfeed.buzz({'buzz_id': buzzId}, function(error, body) {
            var buzz = body.buzz;
            console.log(buzz);
            var interestingContent = {
                _id: buzzId,
                title: buzz.title,
                buzz_description: buzz.description,
                headers: [],
                description: []
            };
            buzz.sub_buzzes.forEach(function(d) {
                if (d.header) {
                    interestingContent.headers.push(striptags(d.header));
                }
                if (d.description) {
                    interestingContent.description.push(striptags(d.description));
                }
            });
            // Insert into db
            collection.insert(interestingContent, callback);
            // console.log(interestingContent);
        });
    }, function(err) {
        if(err)
            console.log(err);
        // database.close()
    });
}

var collection, database;
mongodb.connect('mongodb://localhost:27017/buzz', function(err, db) {
    database = db;
    collection = db.collection('stories');
    // buzzfeed.feeds({'feed': 'lol'}, module.exports.scraper);
    // buzzfeed.search({'q': 'the pope'}, module.exports.searchScraper);
});
