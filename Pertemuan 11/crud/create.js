const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    { useNewUrlParser: true }
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully Connectes");
});

const Member = require("./models/member");

var member_to_insert = new Member({
    name: "Onta",
    email: "onta@untar.com",
    credit: 321223
});

member_to_insert.save((err, product) => {
    if (err) console.log(err);
    console.log(JSON.stringify(product));
});
