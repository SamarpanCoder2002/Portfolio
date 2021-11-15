const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signin, signout} = require("../controllers/auth");

router.post(
  "/signin",
  [
    check("email").isEmail().withMessage("Email is Required"),
    check("password")
      .isLength({ min: 3 })
      .withMessage("Password must be at least 3 characters"),
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;