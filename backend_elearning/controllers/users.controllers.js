const usersService = require("../services/user.services")

const getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await usersService.getOneUser(id);
    const [rows] = data;
    if (rows.length === 0) {
      res.json({
        message: "Không tìm thấy người dùng",
      });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({
      error,
    });
  }
};

module.exports = { getOneUser };
