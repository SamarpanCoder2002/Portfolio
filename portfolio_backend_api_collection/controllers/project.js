const {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
} = require("firebase/firestore");

const ProjectModel = require("../models/project");

exports.addProject = (req, res) => {
  const projectModel = new ProjectModel(req.body);

  const db = getFirestore();

  try {
    const project = {};

    project[Date.now().toString()] = projectModel.toJSON();

    setDoc(doc(db, "projects", req.body.projectType), project, {
      merge: true,
    })
      .then(() => {
        res.status(200).json({
          message: "Project Added Successfully",
        });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        res.status(400).json({
          error: "Error adding project",
        });
      });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: "Error adding project",
    });
  }
};

exports.getAllProject = async (req, res) => {
  const db = getFirestore();

  getDocs(collection(db, "projects"))
    .then((querySnapshot) => {
      const projects = [];
      querySnapshot.forEach((doc) => {
        const modifiedData = {};
        modifiedData[doc.id] = doc.data();
        projects.push(modifiedData);
      });

      res.status(200).json(projects);
    })
    .catch((error) => {
      console.error("Error getting documents: ", error);
      res.status(400).json({
        error: "Error getting projects",
      });
    });
};

exports.getProjectsByDomain = (req, res) => {
  const domain = req.params.domainName;

  const db = getFirestore();

  getDoc(doc(db, "projects", domain)).then((doc) => {
    if (doc.exists()) {
      const projectCollection = doc.data();

      if (projectCollection) return res.status(200).json(projectCollection);

      return res.status(404).json({
        error: "Project not found",
      });
    } else {
      return res.status(404).json({
        error: "Project not found",
      });
    }
  });
};

exports.updateProject = (req, res) => {
  const db = getFirestore();

  const id = req.params.projectId;

  const {
    domain,
    projectName,
    projectDescription,
    projectImage,
    projectShowCase,
    projectDemoVideo,
    projectDownloadLink,
    projectTechUsed,
  } = req.body;

  getDoc(doc(db, "projects", domain)).then((docFile) => {
    if (docFile.exists()) {
      let project = docFile.data()[id];

      console.log(project);

      if (project) {
        project = {
          ...project,
          projectName,
          projectDescription,
          projectImage,
          projectShowCase,
          projectDemoVideo,
          projectDownloadLink,
          projectTechUsed,
        };

        const updatedProject = {};

        updatedProject[id] = project;

        setDoc(doc(db, "projects", domain), updatedProject, {
          merge: true,
        })
          .then(() => {
            res.status(200).json({
              message: "Project Updated Successfully",
            });
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
            res.status(400).json({
              error: "Error adding project",
            });
          });
      } else
        return res.status(404).json({
          error: "Project not found",
        });
    } else {
      return res.status(404).json({
        error: "Project not found",
      });
    }
  });
};

exports.deleteProject = (req, res) => {
  const db = getFirestore();

  const id = req.params.projectId;

  const { domain } = req.body;

  getDoc(doc(db, "projects", domain)).then((docFile) => {
    if (docFile.exists()) {
      const projectBundle = docFile.data();

      if (projectBundle[id]) {
        delete projectBundle[id];

        setDoc(doc(db, "projects", domain), projectBundle)
          .then(() => {
            res.status(200).json({
              message: "Project Deleted Successfully",
            });
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
            res.status(400).json({
              error: "Error adding project",
            });
          });
      } else {
        return res.status(404).json({
          error: "Project not found",
        });
      }
    } else {
      return res.status(404).json({
        error: "Project not found",
      });
    }
  });
};

const uploadImage = async (next) => {
  // TODO
};
