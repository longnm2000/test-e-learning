const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("./utils/passport");
const session = require("express-session");
const app = express();

const config = require("./api/api");

const port = process.env.SERVER_PORT || 5173;
const url = process.env.SERVER_URL;

const authRoutes = require("./routes/auth.routes");
const usersRoutes = require("./routes/users.routes");
const categoryRoutes = require("./routes/category.routes");
const courseRoutes = require("./routes/courses.routes");
const particiRoutes = require("./routes/partici.routes");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(
  session({
    secret: "hihi",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(`${config.api}/auth`, authRoutes);
app.use(`${config.api}/users`, usersRoutes);
app.use(`${config.api}/categories`, categoryRoutes);
app.use(`${config.api}/courses`, courseRoutes);
app.use(`${config.api}/partici`, particiRoutes);

app.listen(port, () => {
  console.log(`${url}${port}`);
});
