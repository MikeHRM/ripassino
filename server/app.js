const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const PORT = 8080;
const bodyParser = require("body-parser");
// const db = require("./db");
const app = express();

require("dotenv").config();
app.disable("x-powered-by");
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

const generatePartner = require("./routes/generate-partner");
app.use("/generate-partner", generatePartner);

const movies = require("./routes/movies");
app.use("/movies", movies);

app.use(function (req, res, next) {
  res.status(404);
  res.type("txt").send("404 - Not found");
});

// db.initDb((err, db) => {
//   if (err) {
//     console.log("error DB", err);
//   } else {
//     app.listen(PORT, () => {
//       console.log(`Listening on port ${8080}`);
//     });
//   }
// });
app.listen(PORT, () => {
  console.log(`Listening on port ${8080}`);
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  return error;
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: error.message,
  });
});

module.exports = app;
