const express = require("express");
const { isSignedIn } = require("../controllers/auth");
const { addProject, getAllProject } = require("../controllers/project");
const router = express.Router();

router.post("/project/add", isSignedIn, addProject);

router.get("/project/getallprojects", getAllProject);

module.exports = router;
