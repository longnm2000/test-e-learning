const categoryService = require("../services/category.services");
module.exports.findAllCategory = async (req, res) => {
  const [category] = await categoryService.findAllCategory();
  res.json({
    message: "success",
    data: category,
  });
};

module.exports.findOneCategory = async (req, res) => {
  const { category_id } = req.params;
  const [category] = await categoryService.findOneCategory(Number(category_id));
  res.json({
    message: "success",
    data: category,
  });
};
