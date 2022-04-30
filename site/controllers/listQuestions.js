const Question = require('../models/questions');


exports.listQuestions = async (req, res) => {
    try {
        const questions = await Question.find();

        let table = '<table>\n<tr>\n';
        table += '<th>Id</th><th>Question</th><th>Category</th><th>Answer(s)</th><th>First Hint</th><th>Second Hint</th><th>Image</th>';

        for (let question of questions) {
            // console.log(question);
            // let options = {
            //     day: 'numeric',
            //     year: 'numeric',
            //     month: 'long',
            //     hour: 'numeric',
            //     minute: 'numeric',
            //     timeZone: 'Europe/Amsterdam'
            // }

            // addedDateDB = new Date(question.addedDate).toLocaleString('en-GB', options);
            // lastUpdatedDB = new Date(question.addedDate).toLocaleString('en-GB', options);

            table += `<tr><td>${question.id}</td><td>${question.title}</td><td>${question.category}</td><td>${question.answer}</td><td>${question.firstHint}</td><td>${question.secondHint}</td><td>${question.image}</td></tr>`
        }

        table += '</table>'
        res.render('showAllTable', { data: table });

        // return res.send(questions);


    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

}