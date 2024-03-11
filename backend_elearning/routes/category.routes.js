const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category.controllers");
router.get("/", categoryController.findAllCategory);
router.get("/:category_id", categoryController.findOneCategory);
module.exports = router;
