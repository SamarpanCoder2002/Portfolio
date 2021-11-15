const express = require("express");
const { isSignedIn } = require("../controllers/auth");
const { addProject, getAllProject, getProjectByDomainPreferenceName, updateProject, deleteProject } = require("../controllers/project");
const router = express.Router();

router.post("/project/add", isSignedIn, addProject);
router.get("/project/getallprojects", getAllProject);
router.get("/project/getparticularproject", isSignedIn, getProjectByDomainPreferenceName);
router.put("/project/updateproject", isSignedIn, updateProject);
router.delete("/project/deleteProject", isSignedIn, deleteProject);

module.exports = router;
