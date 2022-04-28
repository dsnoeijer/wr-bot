var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const addQuestions = require('../controllers/addQuestion');


// Home page
router.get("/", (req, res) => {
    res.render("home");
});

// Getting all questions
router.get('/questions', async (req, res) => {
    try {
        const questions = await Questions.find();
        res.json(questions);
    } catch {
        res.status(500).json({ message: err.messge });
    }
})

// Getting one question
router.get('/question', (req, res) => {
    res.render("home");
})

// Updating a question
router.post('/update', (req, res) => {

})
// Deleting a question
router.get('/delete/:id', (req, res) => {
    res.send(req.params.id);
})

// Creating a question
router.get("/add", (req, res) => {
    res.render("add")
})

// Adding a question
router.post("/uploads", upload.array("files"), addQuestions.addQuestion);

module.exports = router;