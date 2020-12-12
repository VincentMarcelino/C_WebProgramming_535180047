const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    { useNewUrlParser: true }
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully Connected");
});

const memberSchema = mongoose.Schema({
    name: String,
    email: String,
    credit: Number
});

const Member = mongoose.model("Member", memberSchema);

var member1 = new Member({
    name: "Din Udin",
    email: "udin@untar.com"
});
member1.save((error, savedDocument) => {
    if (error) console.log(error);
    console.log(savedDocument);
});

Member.create(
    {
        name: "Bambang",
        email: "bambang@untar.com",
        credit: 123333
    },
    function (error, savedDocument) {
        if (error) console.log(error);
        console.log(savedDocument);
    }
);
