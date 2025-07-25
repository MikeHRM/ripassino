const Router = require("express").Router;
const db = require("../db");
// const { ObjectId } = require("mongodb");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { data, error } = await db.from("movies").select("*").limit(50);
    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error has occurred" });
  }
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  try {
    const { data, error } = await db
      .from("movies")
      .update({ title })
      .eq("_id", id)
      .select();

    if (error) {
      throw error;
    }

    if (data.length === 0) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json({ message: "Title updated successfully" });
  } catch (error) {
    console.error("Error updating movie:", error);
    res.status(500).json({ message: "An error occurred during update" });
  }
});

module.exports = router;
