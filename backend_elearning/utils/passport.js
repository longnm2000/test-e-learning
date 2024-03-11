const passport = require("passport");
// const dotenv = require("dotenv");
const db = require("./database");
// dotenv.config();

const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CLIENT_URL,
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      const email = profile.emails[0].value;
      const name = profile.displayName;
      const password = profile.id;
      const avatar = profile.photos[0].value;

      const checkEmail = await db.execute(
        "SELECT email FROM Users WHERE email = ?",
        [email]
      );

      const [rows] = checkEmail;
      if (rows.length === 0) {
        db.execute("CALL CREATE_USER(?, ?, ?, ?) ", [
          name,
          email,
          password,
          avatar,
        ]);
      }
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
