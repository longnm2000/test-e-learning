const express = require("express");
const router = express.Router();
const coursesController = require("../controllers/courses.controllers");
router.get("/", coursesController.findAllCourses);
router.get("/:id", coursesController.getCoursesByCategoryId);
module.exports = router;
