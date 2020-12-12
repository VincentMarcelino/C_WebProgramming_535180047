const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/db-untar-cafe";

MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("Connected!");
    }
    db.close();
});