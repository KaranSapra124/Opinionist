const express = require("express");
const {
  addFeedback,
  fetchAllUsers,
  transcribeFile,
} = require("../Controller/userController");
const upload = require("../Utils/multer");
const Router = express.Router();

Router.post("/add-feedback", upload.single("feedbackFile"), addFeedback);
Router.get("/get-users", fetchAllUsers);
Router.post("/translate-file", transcribeFile);
module.exports = Router;
