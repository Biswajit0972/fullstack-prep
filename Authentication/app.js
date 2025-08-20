const express = require('express');
const database = require("./database");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true,   limit: "16kb" }));


app.get('/', function (req, res) {
    res.end("Hello  world  from   authentication")
});

app.get("/parkCar", function (req, res) {
    const {phone, name, carNumber} = {phone: "9067", name: "Roni", carNumber: 1233}


    if (database.has(carNumber)) {
        return res.status(400).send(JSON.stringify({message: "Car already parked"}));
    }

    const token = new Date();

    database.add(token, {phone, name, carNumber});
    console.log(database)


    return res.status(200).send(JSON.stringify({message: "Park Car  parked",database}));
});

module.exports = app;