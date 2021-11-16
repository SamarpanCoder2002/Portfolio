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

    project[req.body.projectDomainRank] = projectModel.toJSON();

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

exports.getProjectByDomainPreferenceName = (req, res) => {
  const { domain, preference } = req.body;

  const db = getFirestore();

  getDoc(doc(db, "projects", domain)).then((doc) => {
    if (doc.exists()) {
      const project = doc.data()[preference];

      if (project) return res.status(200).json(project);

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

  const {
    domain,
    oldPreference,
    newPreference,
    name,
    description,
    image,
    showCase,
    demoVideo,
    downloadLink,
    projectTechUsed,
  } = req.body;

  getDoc(doc(db, "projects", domain)).then((docFile) => {
    if (docFile.exists()) {
      const project = docFile.data();

      if (project[oldPreference]) {
        

        console.log(project[oldPreference]);

        delete project[oldPreference];

        console.log(project);

        if (!project[newPreference]) {
          project[newPreference] = {
            name,
            description,
            image,
            showCase,
            demoVideo,
            downloadLink,
            projectTechUsed,
          };

          setDoc(doc(db, "projects", domain), project)
            .then((projectRef) => {
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
        } else {
          return res.status(403).json({
            error: "Another Project Exist in this new preference",
          });
        }
      } else {
        return res.status(404).json({
          error: "Project not found in old reference",
        });
      }
    } else {
      return res.status(404).json({
        error: "Project not found",
      });
    }
  });
};

exports.deleteProject = (req, res) => {
  const db = getFirestore();

  const { domain, preference } = req.body;

  getDoc(doc(db, "projects", domain)).then((docFile) => {
    if (docFile.exists()) {
      const project = docFile.data();

      if (project[preference]) {
        delete project[preference];

        setDoc(doc(db, "projects", domain), project)
          .then((projectRef) => {
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
