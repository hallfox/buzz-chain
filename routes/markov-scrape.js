var striptags = require('striptags');
var buzzfeed = require('../util/buzzfeed');
var mongodb = require('mongodb').MongoClient;


var scraper = function(err, body) {
    var feed = body;
    feed.flow.forEach(function(article) {
        var buzzId = article.content.buzz_id;
        buzzfeed.buzz({'buzz_id': buzzId}, function(error, body) {
            var buzz = body.buzz;
            var interestingContent = {
                buzz_id: buzzId,
                title: article.content.feed.title,
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
            collection.insert(interestingContent);
            // console.log(interestingContent);
        });
    });
}

mongodb.connect('mongodb://localhost:27017/buzz', function(err, db) {
    var collection = db.collection('stories');
    buzzfeed.feeds({'feed': 'lol'}, scraper);
});
