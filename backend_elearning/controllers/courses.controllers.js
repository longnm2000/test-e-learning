const coursesService = require("../services/courses.services");

module.exports.findAllCourses = async (req, res) => {
  const { search } = req.query;
  const { category_id } = req.query;
  const [courses] = await coursesService.findAllCourses(
    search || null,
    category_id || null
  );
  res.json({
    message: "success",
    data: courses,
  });
};

module.exports.getCoursesByCategoryId = async (req, res) => {
  const { id } = req.params;
  const [courses] = await coursesService.findCourseByCategory(Number(id));
  res.json({
    message: "success",
    data: courses,
  });
};
