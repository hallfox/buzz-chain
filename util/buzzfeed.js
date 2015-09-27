var request = require('request');

var BASEURL = 'http://buzzfeed.com/api/v2/';
var SEARCHURL = 'http://buzzfeed.com/buzzfeed/search2_json';

module.exports.get = function(endpoint, args, callback) {
    request(BASEURL + endpoint, function(error, response, body) {
        callback(error, body);
    });
}

module.exports.buzz = function(args, callback) {
    module.exports.get('buzz/' + args.buzz_id, args, function(error, body) {
        if(!error)
            body = JSON.parse(body);
        callback(error, body);
    });
}

module.exports.feeds = function(args,callback) {
    module.exports.get('feeds/' + args.feed, args, function(error, body) {
        if(!error)
            body = JSON.parse(body);
        callback(error, body);
    });
}

module.exports.search = function(args, callback) {
    request(SEARCHURL + '?q=' + args.q, function(error, response, body) {
        callback(error, body);
    });
}
