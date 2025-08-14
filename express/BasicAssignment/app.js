const express = require('express');
const customMiddleware = require("./middleware");
const app = express();
const DataArray = require("./DataBase")
const PORT = 3000;

app.listen(PORT, () => console.log(`Server is listening on port http://localhost:${PORT}`));

app.use(express.json());
app.use(express.urlencoded({extended: true, limit: `2kb`}));
app.use(customMiddleware);

/*
* {
*   userId: 1,
*   postId: 1,
*   note: 1,
* }
* */

app.get('/', (req, res) => {
    res.send("Welcome to my notes  app");
});

app.post('/notes', (req, res) => {
    if (!req.body) {
        return res.status(400).json("Bad request");
    }

    const {postId, note} = req.body;

    const isExist = getInfo(postId);
    if (isExist) {
        return res.status(400).json("Note already exist");
    }

    DataArray.push({postId, note});

    res.status(201).json("ok notes add")
});

app.get("/notes", (req, res) => {
    res.status(200).json(DataArray);
});

app.get("/notes/:id", (req, res) => {
    const {id} = req.params;
    console.log(id)

    const note = DataArray.find((note) => note.postId === Number(id));
    console.log(note)

    if (!note) {
        return res.status(404).json("Note not found");
    }
    res.status(200).json(note);
})

app.put("/notes/:id", (req, res) => {
    const {id} = req.params;
    const note = DataArray.find((note) => note.postId === Number(id));
    if (!note) {
        return res.status(404).json("Note not found");
    }
    const { note: newNote} = req.body;
    note.note = newNote;
    res.status(200).json("ok notes updated");
});

app.delete("/notes/:id", (req, res) => {
    const {id} = req.params;
    const note = DataArray.find((note) => note.postId === Number(id));
    if (!note) {
        return res.status(404).json("Note not found");
    }
    const index = DataArray.indexOf(note);
    DataArray.splice(index, 1);
    res.status(200).json("ok notes deleted");
});

function getInfo(postId) {

    for (let i = 0; i < DataArray.length; i++) {
        if (DataArray[i].postId === postId) {
            return true;
        }
    }
    return false;
}