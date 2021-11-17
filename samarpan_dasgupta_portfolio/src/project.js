import { useState } from "react";
import isAdminAuthenticated from "./admin/checking/helper";
import CommonComponent from "./commonsection/common";
import CustomSkeleton from "./helper/customskeleton";

const ProjectComponent = () => {
  return (
    <CommonComponent>
      <ProjectBringing />
    </CommonComponent>
  );
};

const ProjectBringing = () => {
  const [projectsCategory, setprojectsCategory] = useState([
    "All Project",
    "Python Projects",
    "Flutter Projects",
    "React Projects",
    "MERN Projects",
  ]);

  /// Project API will update that only
  const [projectsCollection, setprojectsCollection] = useState([
    {
      projectName: "Project 1",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet itaque omnis animi nesciunt facilis odio cum voluptates, iure odit neque obcaecati beatae, maiores impedit doloribus repudiandae unde asperiores laudantium dolor sapiente aperiam, magnam quas ea explicabo! Voluptatibus veniam tempora est corporis qui inventore at, dicta, sint, nulla ipsam a voluptatem!",
      projectImage: "http://i3.ytimg.com/vi/VO_COUhJ3G4/maxresdefault.jpg",
      projectShowCase: "https://samarpandasgupta.com/",
      projectDemoVideo: "https://youtu.be/XadGEZYr5Go",
      projectDownloadLink: null,
      projectTechUsed: ["C", "C++", "Java", "Python", "Dart", "Javascript"],
    },
    {
      projectName: "Project 2",
      projectDescription: "Project 2 Description",
      projectImage: "https://i.ytimg.com/vi/tnz_yuK9qoM/maxresdefault.jpg",
      projectShowCase: "https://samarpandasgupta.com/",
      projectDemoVideo: "https://youtu.be/XadGEZYr5Go",
      projectDownloadLink:
        "https://play.google.com/store/apps/details?id=com.king.candycrushsaga",
      projectTechUsed: ["C", "C++", "Java", "Python", "Dart", "Javascript"],
    },
    {
      projectName: "Project 3",
      projectDescription: "Project 3 Description",
      projectImage:
        "https://i.ytimg.com/vi/nbCFUYTNZl0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAMTbTmJZaqWZ4D1L4hrd1mBsBuRA",
      projectShowCase: "https://samarpandasgupta.com/",
      projectDemoVideo: "https://youtu.be/XadGEZYr5Go",
      projectDownloadLink: null,
      projectTechUsed: ["C", "C++", "Java", "Python", "Dart", "Javascript"],
    },
    {
      projectName: "Project 4",
      projectDescription: "Project 4 Description",
      projectImage: "http://i3.ytimg.com/vi/VO_COUhJ3G4/maxresdefault.jpg",
      projectShowCase: "https://samarpandasgupta.com/",
      projectDemoVideo: "https://youtu.be/XadGEZYr5Go",
      projectDownloadLink:
        "https://play.google.com/store/apps/details?id=com.king.candycrushsaga",
      projectTechUsed: ["C", "C++", "Java", "Python", "Dart", "Javascript"],
    },
  ]);

  return (
    <div className="container certificate-collection mt-5">
      <h2 className="text-center mb-5">Projects</h2>
      {(projectsCollection && (
        <ProjectFilterComponent projectsCategory={projectsCategory} />
      )) || <CustomSkeleton />}

      {projectsCollection && isAdminAuthenticated() && (
        <>
          <AdminProjectAddButton projectsCategory={projectsCategory} />
          <ModalComponent projectsCategory={projectsCategory} />
        </>
      )}

      <div className="row">
        {projectsCollection &&
          projectsCollection.map((project, index) => {
            return (
              <div className="col-lg-4" key={index}>
                <ProjectShowCaseComponent
                  project={project}
                  projectsCategory={projectsCategory}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

const ProjectFilterComponent = ({ projectsCategory }) => {
  const [dropdownIndex, setdropdownIndex] = useState(0);

  return (
    <div className="btn-group mb-5 mx-md-3">
      <button
        type="button"
        className="btn btn-info dropdown-toggle filter-button text-white"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-expanded="false"
      >
        {projectsCategory[dropdownIndex]}
      </button>
      <ul className="dropdown-menu">
        {projectsCategory.map((category, index) => {
          return (
            <li onClick={() => setdropdownIndex(index)} key={index}>
              <a className="dropdown-item" href={`#${category}`}>
                {category}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const ProjectShowCaseComponent = ({ project, projectsCategory }) => {
  return (
    <div className="card mb-5 mx-0 mx-md-3 project-container">
      <img
        src={project.projectImage}
        alt="Project-ImageShow"
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{project.projectName}</h5>
        <p className="card-text">{project.projectDescription}</p>
        {
          <>
            <ProjectMaterial
              project={project}
              projectsCategory={projectsCategory}
            />

            <ModalComponent
              project={project}
              projectsCategory={projectsCategory}
            />
          </>
        }
      </div>
    </div>
  );
};

const ProjectMaterial = ({ project, projectsCategory }) => {
  return (
    <div className="card-inside-hover-body p-3">
      <h2 className="text-center text-white fw-bold">Tech Stack</h2>
      <div
        className="d-flex flex-wrap justify-content-center align-items-center text-white w-100 all-in-one"
        style={{ height: "90%" }}
      >
        <TechStackNameCollection project={project} />
        {isAdminAuthenticated() && (
          <AdminControlSection
            project={project}
            projectsCategory={projectsCategory}
          />
        )}
        <ProjectShowCaseOptionsManagement project={project} />
      </div>
    </div>
  );
};

const TechStackNameCollection = ({ project }) => (
  <div
    style={{ height: "30%" }}
    className=" container-fluid d-flex flex-wrap justify-content-center align-items-center tech-stack"
  >
    {project.projectTechUsed.map((tech, index) => {
      return (
        <div
          className="badge mx-2 tech-stack-name"
          style={{ backgroundColor: "#EDC126" }}
          key={index}
        >
          {tech}
        </div>
      );
    })}
  </div>
);

const ProjectShowCaseOptionsManagement = ({ project }) => (
  <div
    className="container w-100 d-flex flex-wrap justify-content-around align-items-center "
    style={{ height: "70%" }}
  >
    {project.projectShowCase && (
      <MakeButton
        linkToRedirect={project.projectShowCase}
        buttonName={"Visit Site"}
      />
    )}

    {project.projectDemoVideo && (
      <MakeButton
        linkToRedirect={project.projectDemoVideo}
        buttonName={"Video Demo"}
      />
    )}

    {project.projectDownloadLink && (
      <MakeButton
        linkToRedirect={project.projectDownloadLink}
        buttonName={"Download Now"}
      />
    )}
  </div>
);

const MakeButton = ({ linkToRedirect, buttonName }) => (
  <a
    href={linkToRedirect}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-3"
  >
    <button
      className="btn btn-success text-white border-0"
      style={{ backgroundColor: "#00D84A" }}
    >
      {buttonName}
    </button>
  </a>
);

const AdminControlSection = ({ project, projectsCategory }) => {
  return (
    <div
      className="w-100 d-flex justify-content-around align-items-center"
      style={{ height: "5vh" }}
    >
      <button
        className="btn btn-info text-white"
        data-bs-toggle="modal"
        data-bs-target="#modalUpdateProject"
      >
        Update Project
      </button>

      {/* <button className="btn btn-danger text-white">Delete Project</button> */}
    </div>
  );
};

const AdminProjectAddButton = ({ projectsCategory }) => (
  <div className="container mb-5 text-center">
    <button
      className="btn text-white project-add-button"
      data-bs-toggle="modal"
      data-bs-target="#modalAddProject"
    >
      <i className="fas fa-plus"></i> &nbsp;&nbsp; Add New Project
    </button>
  </div>
);

const ModalComponent = ({ project, projectsCategory }) => {
  projectsCategory.shift();
  return (
    <div
      className="modal fade"
      id={project ? "modalUpdateProject" : "modalAddProject"}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-fullscreen modal-notify border-0"
        role="document"
      >
        <div
          className="modal-content text-center"
          style={{ background: "#f6f6f6" }}
        >
          <div
            className="modal-body border-0 justify-content-center align-items-center d-flex"
            style={{ background: "#f6f6f6" }}
          >
            <FormComponent
              project={project}
              projectsCategory={projectsCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FormComponent = ({ project, projectsCategory }) => {
  return (
    <section className="vh-100 admin-login-bg">
      <div className="container-fluid py-5 h-100">
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
                    <form className="form-inline">
                      {<FormHeading project={project} />}

                      <FormType
                        value={project && project.projectName}
                        label="Name"
                      />
                      <FormType
                        value={project && project.projectImage}
                        label="Image"
                      />
                      <FormType
                        value={project && project.projectShowCase}
                        label="Show Case"
                      />
                      <FormType
                        value={project && project.projectDemoVideo}
                        label="Demo Video"
                      />
                      <FormType
                        value={project && project.projectDownloadLink}
                        label="Download Link"
                      />

                      <ProjectTypeComponent
                        projectsCategory={projectsCategory}
                      />

                      <ProjectDescriptionInputComponent project={project} />

                      <FormButton project={project} />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FormType = ({ value, label }) => {
  console.log(label);
  console.log(value);
  return (
    <div className="form-outline mb-4 d-flex flex-wrap">
      <label htmlFor="rg-from">{label} </label>
      <input
        type={"text"}
        id="form2Example17"
        className="form-control form-control-lg"
        value={value}
      />
    </div>
  );
};

const ProjectTypeComponent = ({ projectsCategory }) => (
  <select className="form-select mb-4" aria-label="Default select example">
    {projectsCategory.map((category, index) => {
      return (
        <option value={category} key={index}>
          {category}
        </option>
      );
    })}
  </select>
);

const ProjectDescriptionInputComponent = ({ project }) => (
  <div className="form-outline mb-4 d-flex flex-wrap">
    <label htmlFor="description">Description</label>
    <textarea
      type="text"
      id="form2Example27"
      className="form-control form-control-lg"
    />
  </div>
);

const FormHeading = ({ project }) => (
  <div className="mb-3">
    <span className="h3 fw-bold mb-0" style={{ color: "#4DD637" }}>
      {project ? "Update This Project" : "Add New Project"}
    </span>
  </div>
);

const FormButton = ({ project }) => {
  return (
    <div className="row w-100 ">
      <div className="col-md-6">
        <a
          href="#deletecertificateno"
          type="button"
          className="btn  btn-danger waves-effect w-75 mb-3"
          data-bs-dismiss="modal"
        >
          Close
        </a>
      </div>
      <div className="col-md-6">
        <a
          href="#deletecertificateno"
          type="button"
          className="btn project-add-button waves-effect w-75 text-white"
          data-bs-dismiss="modal"
        >
          {project ? "Update" : "Save"}
        </a>
      </div>
    </div>
  );
};

export default ProjectComponent;
