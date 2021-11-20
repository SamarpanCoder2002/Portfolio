const express = require("express");
const { isSignedIn } = require("../controllers/auth");
const {
  addProject,
  getAllProject,
  getProjectsByDomain,
  updateProject,
  deleteProject,
} = require("../controllers/project");
const router = express.Router();

router.post("/project/add", isSignedIn, addProject);
router.get("/project/getall", getAllProject);
router.get("/project/getparticulardomain/:domainName", getProjectsByDomain);
router.put("/project/update/:projectId", isSignedIn, updateProject);
router.delete("/project/delete/:projectId", isSignedIn, deleteProject);

module.exports = router;
