const Question = require('../models/questions');

exports.addQuestion = async (req, res) => {
    const addQuestionDB = new Question({
        id: 1,
        category: 'wow',
        title: req.body.name,
        question: req.body.question,
        firstHint: req.body.firstHint,
        secondHint: req.body.secondHint,
        answer: req.body.answers
    })

    // try {
    //     const newQuestion = await addQuestionDB.save();
    //     console.log("Question added to database");
    //     return res.status(201).json(newQuestion);

    // } catch (err) {
    //     console.log(err);
    //     return res.status(400).json({ message: err.message });
    // }





    // console.log(answers);

    // console.log(req.body);
    // console.log(req.files);
    res.json({ message: "Succesfully added question." });
}