// auth.controller.js
const db = require("../utils/database");
const userService = require("../services/user.services");
const passport = require("../utils/passport");

const googleLogin = async (req, res) => {
  passport.authenticate("google", { scope: ["profile", "email"] })(req, res);
};

const googleCallback = async (req, res) => {
  passport.authenticate("google", {
    successRedirect: "/api/v1/auth/protected",
    failureRedirect: "/api/v1/fail",
  })(req, res);
};

const fail = async (req, res) => {
  res.json({
    message: "Error authent",
  });
};

const protected = async (req, res) => {
  const email = req.user.emails[0].value;

  try {
    const [data] = await db.execute("SELECT * FROM Users WHERE email = ?", [
      email,
    ]);

    if (data.length > 0) {
      console.log("Thông tin người dùng từ cơ sở dữ liệu:", data[0].user_id);
      res.json({
        message: "Lấy thông tin người dùng thành công",
        user: {
          id: data[0].user_id,
          name: req.user.displayName,
          email: email,
          avatar: req.user.photos[0].value,
        },
      });
    }
  } catch (error) {
    console.error("Lỗi khi thực hiện truy vấn trong hàm protected:", error);
    res.status(500).json({
      message: "Đã xảy ra lỗi khi xử lý yêu cầu.",
    });
  }
};

const signinGoogle = async (req, res) => {
  console.log("jha");
  const { username, email, avatar_user } = req.body;
  try {
    const signinResult = await userService.signinGoogle(
      username,
      email,
      avatar_user
    );

    res.status(200).json({
      signinResult,
    });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({
      errors: error,
    });
  }
};

module.exports = {
  googleLogin,
  googleCallback,
  fail,
  protected,
  signinGoogle,
};
