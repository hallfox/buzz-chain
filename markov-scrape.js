var request = require('request');
var striptags = require('striptags');

var scraper = function(err, res, body) {
    if (!err && res.statusCode === 200) {
        var feed = JSON.parse(body);
        feed.flow.forEach(function(article) {
            var buzzId = article.content.buzz_id;
            var articleURL = "http://www.buzzfeed.com/api/v2/buzz/" + buzzId;
            request.get(articleURL, function(err, res, body) {
                if (!err && res.statusCode === 200) {
                    var buzz = JSON.parse(body).buzz;
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
                    //console.log(interestingContent);
                }
            });
        });
    }
};

request.get('http://www.buzzfeed.com/api/v2/feeds/lol', scraper);
