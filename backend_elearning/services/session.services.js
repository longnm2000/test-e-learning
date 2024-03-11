const pool = require("../utils/database");

module.exports.getSessionPercent = async (user_id) => {
  const [total] = await pool.execute(`CALL GET_SESSION_PERCENT(?)`, [user_id]);
  return total;
};

module.exports.getSessionByCourses = async (courses_id) => {
  const [total] = await pool.execute(`CALL GET_SESSION_BY_COURSES(?)`, [
    courses_id,
  ]);
  return total;
};
