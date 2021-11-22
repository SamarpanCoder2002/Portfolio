import CommonComponent from "../commonsection/common";
import { useState } from "react";
import { addNewProject, updateProject } from "../project/helper/api_call";
import MessageSection from "../commonsection/alertmessage.js/s_f_msg";

const AdminProjectFormEntryPoint = ({ project, projectsCategory }) => {
  projectsCategory.shift(); // remove first element from array

  const [isLoading, setisLoading] = useState(false);

  return (
    <CommonComponent isLoading={isLoading}>
      <section className="vh-150 admin-login-bg">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-12">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-lg-6 d-none d-lg-block">
                    <img
                      src="https://images.pexels.com/photos/7191989/pexels-photo-7191989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt="login form"
                      className="img-fluid h-100"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-lg-6 d-flex align-items-center">
                    <div className="card-body p-4 text-black">
                      <FormMaker
                        project={project}
                        projectsCategory={projectsCategory}
                        isLoading={isLoading}
                        setisLoading={setisLoading}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CommonComponent>
  );
};

const FormMaker = ({ project, projectsCategory, isLoading, setisLoading }) => {
  const [isSuccess, setIsSuccess] = useState(null);
  const [isFail, setIsFail] = useState(null);

  const [newForm, setnewForm] = useState({
    projectName: project ? project.projectName : "",
    projectDescription: project ? project.projectDescription : "",
    projectDemoVideo: project ? project.projectDemoVideo : "",
    projectShowCase: project ? project.projectShowCase : "",
    projectDownloadLink: project ? project.projectDownloadLink : "",
    projectImage: project ? project.projectImage : "",
    projectId: project ? project.projectId : 0,
    projectTechUsed:
      project && project.projectTechUsed ? project.projectTechUsed : [],
    projectType: project ? project.projectType : projectsCategory[0],
    projectGithubLink: project ? project.projectGithubLink : "",
  });

  const {
    projectName,
    projectDescription,
    projectImage,
    projectShowCase,
    projectDemoVideo,
    projectDownloadLink,
    projectType,
    projectGithubLink,
  } = newForm;

  const handleChange = (name) => (e) => {
    setnewForm({ ...newForm, [name]: e.target.value });
  };

  return (
    <div className="form-input-take">
      <MessageSection isSuccess={isSuccess} isFail={isFail} />
      {<FormHeading project={project} />}

      <div className="form-outline mb-4 d-flex flex-wrap">
        <label htmlFor="rg-from">Name * </label>
        <input
          id="form2Example17"
          className="form-control form-control-lg"
          value={projectName}
          name="projectName"
          placeholder="Enter Project Name"
          onChange={handleChange("projectName")}
          onClick={() => {
            if (isFail) {
              setIsFail(null);
            }
          }}
        />
      </div>
      <div className="form-outline mb-4 d-flex flex-wrap">
        <label htmlFor="rg-from">Image * </label>
        <input
          id="form2Example17"
          className="form-control form-control-lg"
          value={projectImage}
          name="projectImage"
          placeholder="Enter Project Image Link"
          onChange={handleChange("projectImage")}
          onClick={() => {
            if (isFail) {
              setIsFail(null);
            }
          }}
        />
      </div>
      <div className="form-outline mb-4 d-flex flex-wrap">
        <label htmlFor="rg-from">Show Case </label>
        <input
          id="form2Example17"
          className="form-control form-control-lg"
          value={projectShowCase}
          name="projectShowCase"
          placeholder="Enter Project ShowCase Link"
          onChange={handleChange("projectShowCase")}
          onClick={() => {
            if (isFail) {
              setIsFail(null);
            }
          }}
        />
      </div>
      <div className="form-outline mb-4 d-flex flex-wrap">
        <label htmlFor="rg-from">Github Link </label>
        <input
          id="form2Example17"
          className="form-control form-control-lg"
          value={projectGithubLink}
          name="projectGithubLink"
          placeholder="Enter Github Repo Link"
          onChange={handleChange("projectGithubLink")}
          onClick={() => {
            if (isFail) {
              setIsFail(null);
            }
          }}
        />
      </div>
      <div className="form-outline mb-4 d-flex flex-wrap">
        <label htmlFor="rg-from">Demo Video * </label>
        <input
          id="form2Example17"
          className="form-control form-control-lg"
          value={projectDemoVideo}
          name="projectDemoVideo"
          placeholder="Enter Demo Video Link"
          onChange={handleChange("projectDemoVideo")}
          onClick={() => {
            if (isFail) {
              setIsFail(null);
            }
          }}
        />
      </div>
      <div className="form-outline mb-4 d-flex flex-wrap">
        <label htmlFor="rg-from">Download Link </label>
        <input
          id="form2Example17"
          className="form-control form-control-lg"
          value={projectDownloadLink}
          name="projectDownloadLink"
          placeholder="Enter Download Link"
          onChange={handleChange("projectDownloadLink")}
          onClick={() => {
            if (isFail) {
              setIsFail(null);
            }
          }}
        />
      </div>

      <ProjectTypeComponent
        projectsCategory={projectsCategory}
        setnewForm={setnewForm}
        newForm={newForm}
        oldProject={project}
      />

      <div className="form-outline mb-4 d-flex flex-wrap">
        <label htmlFor="description">Description *</label>
        <textarea
          maxLength="300"
          type="text"
          id="form2Example27"
          className="form-control form-control-lg"
          value={projectDescription}
          name="projectDescription"
          onChange={handleChange("projectDescription")}
          placeholder="About This Project"
          onClick={() => {
            if (isFail) {
              setIsFail(null);
            }
          }}
        />
      </div>

      <TechUsedSection
        name="projectTechUsed"
        project={project}
        setnewForm={setnewForm}
        newForm={newForm}
        isFail={isFail}
        setIsFail={setIsFail}
      />

      <FormButton
        newForm={newForm}
        oldProject={project}
        isLoading={isLoading}
        setisLoading={setisLoading}
        setIsSuccess={setIsSuccess}
        setIsFail={setIsFail}
      />
    </div>
  );
};

const FormHeading = ({ project }) => (
  <div className="mb-3 text-center">
    <span className="h3 fw-bold mb-0" style={{ color: "#4DD637" }}>
      {project ? "Update This Project" : "Add New Project"}
    </span>
  </div>
);

const ProjectTypeComponent = ({
  projectsCategory,
  setnewForm,
  oldProject,
  newForm,
}) => {
  const [projectTypeTemp, setprojectTypeTemp] = useState(
    oldProject ? oldProject.projectType : projectsCategory[0]
  );

  return (
    <>
      <label htmlFor="rg-from">Project Category * </label>
      <select
        className="form-select mb-4"
        aria-label="Default select example"
        value={projectTypeTemp}
        onChange={(e) => {
          setnewForm({ ...newForm, projectType: e.target.value });
          setprojectTypeTemp(e.target.value);
        }}
      >
        {projectsCategory.map((category, index) => {
          return (
            <option value={category} key={index}>
              {category}
            </option>
          );
        })}
      </select>
    </>
  );
};

const TechUsedSection = ({
  name,
  project,
  setnewForm,
  newForm,
  isFail,
  setIsFail,
}) => {
  const [projectTechUsedTemp, setProjectTechUsedTemp] = useState(
    project && project.projectTechUsed ? project.projectTechUsed : []
  );

  const handleDelete = (index) => {
    setProjectTechUsedTemp(projectTechUsedTemp.filter((tag, i) => i !== index));
  };

  return (
    <div>
      <div className="form-outline mb-4 d-flex flex-wrap">
        <label htmlFor="rg-from">Tech and Tools Used *</label>
        <input
          type="text"
          id="form2Example17"
          className="form-control form-control-lg"
          placeholder="Write Tech Name and Enter"
          onClick={() => {
            if (isFail) {
              setIsFail(null);
            }
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              const temp = projectTechUsedTemp;
              temp.push(e.target.value);

              setnewForm({ ...newForm, [name]: temp });
              setProjectTechUsedTemp(temp);

              e.target.value = "";
            }
          }}
        />
      </div>

      <div className="tags-collection d-flex flex-wrap justify-content-start align-items-center mb-3">
        {projectTechUsedTemp.map((tag, index) => {
          return (
            <span key={index} className="tag mx-3 px-2 py-1 mb-2 text-white">
              {tag}
              <i
                className="fa fa-times px-2"
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(index)}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

const FormButton = ({
  newForm,
  oldProject,
  isLoading,
  setisLoading,
  setIsSuccess,
  setIsFail,
}) => {
  const submitButtonClassName = () => {
    if (isLoading) {
      return "btn project-add-button w-100 text-white disabled";
    } else {
      return "btn project-add-button w-100 text-white";
    }
  };

  const backButtonClassName = () => {
    if (isLoading) {
      return "btn  btn-danger waves-effect w-100 mb-3 disabled";
    } else {
      return "btn  btn-danger waves-effect w-100 mb-3";
    }
  };

  const handleSubmit = () => {
    window.scrollTo(0, 0);

    setisLoading(true);

    if (oldProject) {
      updateProject(newForm).then((data) => {
        setisLoading(false);
        if (data.error) {
          setIsFail("😔 Project Updating Error");
        } else {
          setIsSuccess("😇 Project Updated Successfully");
          window.location.replace("/admin/project-management");
        }
      });
    } else {
      addNewProject(newForm).then((data) => {
        setisLoading(false);
        if (data.error) {
          setIsFail("😔 Project Adding Error");
        } else {
          setIsSuccess("😸 Project Added Successfully");

          window.location.replace("/admin/project-management");
        }
      });
    }
  };
  return (
    <div className="row w-100 mx-1">
      <div className="col-md-6">
        <a
          href="#deletecertificateno"
          type="button"
          className={backButtonClassName()}
          onClick={() => {
            window.history.go(-1);
          }}
        >
          Back
        </a>
      </div>
      <div className="col-md-6">
        <button
          className={submitButtonClassName()}
          onClick={() => {
            handleSubmit();
          }}
        >
          {oldProject ? "Update" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default AdminProjectFormEntryPoint;
