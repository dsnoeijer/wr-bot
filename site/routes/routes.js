var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Questions = require('../models/questions');


// Getting all
router.get('/questions', async (req, res) => {
    try {
        const questions = await Questions.find();
        res.json(questions);
    } catch {
        res.status(500).json({ message: err.messge });
    }
})
// Getting one
router.get('/question', (req, res) => {
    res.render("home");
})
// Updating one
router.post('/update', (req, res) => {

})
// Deleting one
router.get('/delete/:id', (req, res) => {
    res.send(req.params.id);
})

// Home page
router.get("/", (req, res) => {
    res.render("home");
});


const uploadFiles = (req, res) => {
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Succesfully added question." });
}

// Creating one
router.post("/uploads", upload.array("files"), uploadFiles);

module.exports = router;