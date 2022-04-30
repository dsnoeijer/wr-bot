var express = require('express');
var router = express.Router();
const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
const addQuestions = require('../controllers/addQuestion');
const listQuestions = require('../controllers/listQuestions');
const getQuestion = require('../controllers/getQuestion');


const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `/${file.originalname}`);
    },
});

const upload = multer({
    storage: multerStorage
})

// Home page
router.get("/", (req, res) => {
    res.render("home");
});

// Getting all questions
router.get('/questions', listQuestions.listQuestions);

// Getting one question
router.get('/question', getQuestion.getQuestion);

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