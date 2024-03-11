const pool = require("../utils/database");

module.exports.findAllCourses = async (search, category_id) => {
  const [courses] = await pool.execute(`CALL GET_ALL_COURSES(?,?)`, [
    search,
    category_id,
  ]);
  return courses;
};

module.exports.findCourseByCategory = async (category_id) => {
  const [rows] = await pool.execute(`CALL GET_COURSES_BY_CATEGORY(?)`, [
    category_id,
  ]);
  return rows;
};
