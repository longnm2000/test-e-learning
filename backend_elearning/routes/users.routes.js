const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controllers")

router.get("/:id", userController.getOneUser);

module.exports = router;
