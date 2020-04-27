const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const QuestionSchema = new Schema({
  question: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Questions = mongoose.model("questions", QuestionSchema);

const question = new Questions({
  question: "What is a horse?",
});
//question.save();

module.exports = Questions;
