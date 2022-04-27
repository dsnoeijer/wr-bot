require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const port = process.env.PORT || 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Questions = require('./models/questions');


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('uploads'));
// app.use(cors());

// DB Stuff
mongoose.connect('mongodb://127.0.0.1/27017', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DB'));

// Getting all
app.get('/questions', async (req, res) => {
    try {
        const questions = await Questions.find();
        res.json(questions);
    } catch {
        res.status(500).json({ message: err.messge });
    }
})
// Getting one
app.get('/question', (req, res) => {
    res.render("home");
})
// Updating one
app.post('/update', (req, res) => {

})
// Deleting one
app.get('/delete/:id', (req, res) => {
    res.send(req.params.id);
})

app.get("/", (req, res) => {
    res.render("home");
});


const uploadFiles = (req, res) => {
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Succesfully added question." });
}

app.post("/uploads", upload.array("files"), uploadFiles);

app.listen(port, () => {
    console.log(`Server is listening`);
});