const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controllers");

router.get("/google", authController.googleLogin);
router.get("/google/callback", authController.googleCallback);
router.get("/fail", authController.fail);
router.get("/protected", authController.protected);
router.post("/signIn", authController.signinGoogle);
module.exports = router;
