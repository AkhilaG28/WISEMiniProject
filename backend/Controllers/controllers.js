const express = require("express");
const User = require("../Models/userData");
const postUser = (req, res) => {
  console.log("user");

  console.log(req.body);

  // console.log(req.file);
  // console.log(req.body.avatar);

  let name = req.body.name;
  let email = req.body.email;
  let avatar = req.file.path;

  let newUser = new User({ name, email, avatar });
  console.log(newUser, "new user");
  newUser
    .save()
    .then((newUser) =>
      res
        .status(200)
        .json({ message: "User added successfully", data: newUser })
    )
    .catch((err) => res.status(400).json({ err: err }));
};

module.exports = {
  postUser,
};
