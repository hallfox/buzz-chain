var request = require('request');
var async = require('async');

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
    var el = ["1", "2"," 3", "4","5","6","7","8","9","10"];
    var json = [];
    async.forEachOf(el, function(value, key, callback2) {
        module.exports.get('feeds/' + args.feed + "?p=" + value, args, function(error, body) {
            console.log(json);
            json = json.concat(JSON.parse(body).flow);
            callback2();
        });
    }, function(err) {
        callback(err, json);
    });
}

module.exports.search = function(args, callback) {
    request(SEARCHURL + '?q=' + args.q, function(error, response, body) {
        if(!error)
            body = JSON.parse(body);
        callback(error, body);
    });
}
