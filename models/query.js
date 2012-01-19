getRecent = function(userid, language, callback) {
    if(userid == undefined) {
        // add language support later
        paste.find({}, { sort: [[ "timestamp", "desc"]], limit: 25 }).toArray( function(err, docs) {
            return callback(err, docs);
        });
    }
    else {
        paste.find({ "author": userid }, { sort: [[ "timestamp", "desc" ]], limit: 25 }).toArray( function(err, docs) {
            return callback(err, docs);
        });
    }
}
