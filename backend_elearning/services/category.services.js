const pool = require("../utils/database");

module.exports.findAllCategory = async () => {
  const [category] = await pool.execute(`CALL GET_ALL_CATEGORY()`);
  return category;
};

module.exports.findOneCategory = async (category_id) => {
  const [category] = await pool.execute(`CALL GET_ONE_CATEGORY(?)`, [
    category_id,
  ]);
  return category;
};
