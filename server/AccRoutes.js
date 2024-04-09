const express = require("express");
const {
  getAllAccs,
  createAcc,
  getAccById,
  updateAcc,
  deleteAcc,
} = require("/AccController");

const router = express.Router();

router.route("/").get(getAllAccs).post(createAcc);
router.route("/:id").get(getAccById).put(updateAcc).delete(deleteAcc);

module.exports = router;
