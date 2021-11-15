const {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
} = require("firebase/firestore");

const ProjectModel = require("../models/project");

exports.addProject = (req, res) => {
  // TODO: Uplaod the image to the storage at first

  const projectModel = new ProjectModel(req.body);

  const db = getFirestore();

  try {
    console.log(projectModel.toJSON());

    const project = {};

    project[Date.now()] = projectModel.toJSON();

    setDoc(doc(db, "projects", req.body.projectType), project, {
      merge: true,
    })
      .then((projectRef) => {
        console.log("Document Written with Id: ", projectRef);
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

exports.getAllProject = (req, res) => {
  const db = getFirestore();

  getDocs(collection(db, "projects"))
    .then((querySnapshot) => {
      const projects = [];
      querySnapshot.forEach((doc) => {
        projects.push(doc.data());
      });

      console.log(projects[0].name);

      res.status(200).json(projects);
    })
    .catch((error) => {
      console.error("Error getting documents: ", error);
      res.status(400).json({
        error: "Error getting projects",
      });
    });
};
