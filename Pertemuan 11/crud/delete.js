const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    { useNewUrlParser: true }
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully Connected");
});

const Member = require("./models/member");

Member.deleteMany({ name: "onta" }, (err, raw) => {

    Member.findOne({ name: "onta" }).exec((error, data) => {
        if (data) console.log("Find One: " + JSON.stringify(data));
    });

});