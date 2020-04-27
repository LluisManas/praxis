const express = require("express");
const router = express.Router();

const Questions = require("../../models/Questions");

router.get("/", (req, res) => {
  Questions.find()
    .sort({ date: 1 })
    .then((questions) => res.json(questions))
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  const newQuestions = new Questions({
    question: req.body.question,
  });

  newQuestions.save().then((questions) => res.json(questions));
});

module.exports = router;
