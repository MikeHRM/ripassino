const Router = require("express").Router;
const db = require("../db");

const router = Router();

const GENERATE_PARTNER = "generate-partner";

router.get("/", (req, res) => {
  const partners = [];
  db.getDb()
    .db()
    .collection(GENERATE_PARTNER)
    .find()
    .forEach((partner) => {
      console.log("partner", partner);
      partners.push(partner);
    })
    .then((result) => {
      console.log("Success", result);
      res.status(200).json(partners);
    })
    .catch((error) => {
      res.status(200).json({
        message: "An error has occured",
      });
    });
});

/**
 * @description Add new partner
 * @param name string; name of the new partner
 */
router.post("/add-partner", (req, res, next) => {
  const partnerName = req.body.name;

  // Check if partner with given id exists
  db.getDb()
    .db()
    .collection(GENERATE_PARTNER)
    .findOne({ name: partnerName })
    .then((partner) => {
      console.log("partner", partner);

      // Check if partner with that name already exists
      if (!!partner) {
        res.status(500).json({
          message: "provided name already exists",
        });
      } else {
        db.getDb()
          .db()
          .collection(GENERATE_PARTNER)
          .insertOne({
            name: partnerName,
            lastDateOfPartnership: new Date(),
            numbersOfPartnership: 0,
          })
          .then((result) => {
            console.log("success!", result);
            res.status(200).json({
              message: "Done!",
            });
          })
          .catch((error) => {
            console.log("error!", error);
            res.status(500).json({
              message: "An error has occured",
              error,
            });
          });
      }
    })
    .catch((error) => {
      console.log("error!", error);
      res.status(500).json({
        message: "An error has occured",
        error,
      });
    });
});

/**
 * @description Update partner condition
 * @param _id string; id of the user to update
 */
router.post("/update-partner", (req, res, next) => {
  const partnerId = req.body.id;

  // Check if partner with given id exists
  db.getDb()
    .db()
    .collection(GENERATE_PARTNER)
    .findOne({ id: partnerId })
    .then((partner) => {
      console.log("partner", partner);

      // perform the real update
      if (!!partner) {
        db.getDb()
          .db()
          .collection(GENERATE_PARTNER)
          .findOneAndUpdate(
            { id: partnerId },
            { $inc: { numbersOfPartnership: 1 } },
            { $set: { lastDateOfPartnership: new Date() } }
          )
          .then((result) => {
            console.log("success!", result);
            res.status(200).json({
              message: "Done!",
            });
          })
          .catch((error) => {
            console.log("error!", error);
            res.status(500).json({
              message: "An error has occured",
              error,
            });
          });
      } else {
        res.status(404).json({
          message: "id not found",
        });
      }
    })
    .catch((error) => {
      console.log("error!", error);
      res.status(500).json({
        message: "An error has occured",
        error,
      });
    });
});

module.exports = router;
