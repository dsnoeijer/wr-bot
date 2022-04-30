const Question = require('../models/questions');
const database = require('../mdb');


exports.getQuestion = async (req, res) => {

    try {
        const questions = await Question.find();
        let total = await Question.find().count();
        let randomize = Math.floor(Math.random() * total);

        const cursor = await Question.find();

        console.log(cursor);

        res.send(cursor);
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

}