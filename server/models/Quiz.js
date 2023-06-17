const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({ 
    mustBeSignedIn: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: true
    },
    questions: [{
        type: Objects,
        contains:   {
            answers: {type:Array},
            correctAnswers: String,
            questionName: String
        }
    }],
    category: {
        type: String,
        required: true
    },
    createdAt: { 
        type: Date, 
        default: new Date() 
    },
    deleted: { 
        type: Boolean, 
        default: false
    }
})

module.exports = mongoose.model('Quizzes', QuizSchema);