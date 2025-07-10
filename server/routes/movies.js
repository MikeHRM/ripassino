const Router = require("express").Router;
const db = require("../db");

const router = Router();

router.get("/", (req, res) => {
  const entries = [];
  db.getDb()
    .db("sample_mflix")
    .collection("movies")
    .find()
    .limit(50)
    .forEach((entry) => {
      //   console.log("partner", partner);
      entries.push(entry);
    })
    .then((result) => {
      console.log("Success", result);
      res.status(200).json(entries);
    })
    .catch((error) => {
      res.status(200).json({
        message: "An error has occured",
      });
    });
});

module.exports = router;
