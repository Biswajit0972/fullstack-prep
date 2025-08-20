const express = require('express');
const database = require("./src/db/index");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "16kb"}));

app.get('/', function (req, res) {
    res.status(200)
        .end("Hello  world  from   authentication session")
});

app.po

app.listen(3000, () => console.log("Server is listening on port 3000"));
