const Router = require("express").Router;
const db = require("../db");
const { ObjectId } = require("mongodb");

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

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  try {
    const result = await db
      .getDb()
      .db("sample_mflix")
      .collection("movies")
      .updateOne({ _id: new ObjectId(id) }, { $set: { title } });

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json({ message: "Title updated successfully" });
  } catch (error) {
    console.error("Error updating movie:", error);
    res.status(500).json({ message: "An error occurred during update" });
  }
});

module.exports = router;
