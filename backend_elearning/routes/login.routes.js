const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("ahihi");
});

module.exports = router;
