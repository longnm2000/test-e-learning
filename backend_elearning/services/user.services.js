const db = require("../utils/database");

const checkEmail = (email) => {
  const checkEmail = db.execute("SELECT email FROM Users WHERE email = ?", [
    email,
  ]);
};

const getOneUser = (id) => {
  return db.execute("CALL GET_ONE_USER(?)", [id]);
};

const signinGoogle = async (username, email, avatar_user) => {
  const pw = "Tu123456";
  try {
    const [checkUser] = await db.execute("SELECT * FROM Users WHERE email =?", [
      email,
    ]);

    if (checkUser.length > 0) {
      const user = {
        user_id: checkUser[0].user_id,
        username: checkUser[0].username,
        email: checkUser[0].email,
        avatar: checkUser[0].avatar,
      };

      return {
        message: "Đăng nhập thành công",
        status: true,
        user,
      };
    } else {
      await db.execute("CALL CREATE_USER(?, ?, ?, ?) ", [
        username,
        email,
        pw,
        avatar_user,
      ]);

      const [newUser] = await db.execute(
        "SELECT * FROM Users WHERE email = ?",
        [email]
      );

      if (newUser.length > 0) {
        const user = {
          user_id: newUser[0].user_id,
          username: newUser[0].username,
          email: newUser[0].email,
          avatar_user: newUser[0].avatar_user,
        };

        return {
          message: "Đăng ký người dùng mới thành công",
          status: true,
          user,
        };
      }
    }
  } catch (error) {
    console.log("errors:", error);
    return {
      errors: error,
    };
  }
};

module.exports = { getOneUser, checkEmail, signinGoogle };
