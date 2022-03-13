const express = require("express");
const router = express.Router();
const multer = require("multer");
const { body } = require("express-validator");
const path = require("path");

const { postUser } = require("../Controllers/controllers");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.post(
  "/api/user/new",
  upload.single("avatar"),
  [body("name").isLength({ min: 2 }), body("email").isEmail()],
  postUser
);

module.exports = router;
