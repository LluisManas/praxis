const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const questions = require("./routes/api/questions");

const app = express();

// Body-Parser middleware

app.use(bodyParser.json());

// connecting to Mongo
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Questions", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected.."))
  .catch((err) => console.log(err));

// Use routes
app.use("/api/questions", questions);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("/client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
