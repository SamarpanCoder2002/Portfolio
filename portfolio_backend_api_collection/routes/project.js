const express = require("express");
const { isSignedIn } = require("../controllers/auth");
const { addProject, getAllProject, getProjectsByDomain, updateProject, deleteProject } = require("../controllers/project");
const router = express.Router();

router.post("/project/add", isSignedIn, addProject);
router.get("/project/getallprojects", getAllProject);
router.get("/project/getparticularproject/:domainName", isSignedIn, getProjectsByDomain);
router.put("/project/updateproject/:projectId", isSignedIn, updateProject);
router.delete("/project/deleteProject/:projectId", isSignedIn, deleteProject);

module.exports = router;
