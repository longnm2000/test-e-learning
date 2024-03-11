const express = require("express");
const router = express.Router();
const particiController = require("../controllers/partici.controllers");
router.get("/", particiController.getPercentSession);
module.exports = router;
