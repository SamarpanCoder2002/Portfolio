import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import isAdminAuthenticated from "../admin/auth/helper";
import CommonComponent from "../commonsection/common";
import CommonNotFoundMessage from "../commonsection/loadingwithstyle/notaddedcontent";
import CustomSkeleton from "../helper/customskeleton";
import {
  deleteProject,
  getAllProject,
  getParticularDomainProjects,
} from "./helper/api_call";

const ProjectComponent = () => {
  const [isLoading, setisLoading] = useState(false);
  return (
    <CommonComponent isLoading={isLoading}>
      <ProjectBringing setisLoading={setisLoading} isLoading={isLoading} />
    </CommonComponent>
  );
};

const ProjectBringing = ({ setisLoading, isLoading }) => {
  const projectsCategory = [
    "Show All",
    "Flutter Projects",
    "React Projects",
    "MERN Projects",
    "Python Projects",
  ];

  const [dropdownIndex, setdropdownIndex] = useState(0);

  /// Project API will update that only
  const [projectsCollection, setprojectsCollection] = useState();

  useEffect(() => {
    if (dropdownIndex === 0) {
      callGetAllProjects();
    } else {
      callGetParticularTypeProjects(projectsCategory[dropdownIndex]);
    }
  }, [dropdownIndex]);

  const callGetParticularTypeProjects = (type) => {
    setisLoading(true);
    getParticularDomainProjects(type.split(" ")[0])
      .then((data) => {
        if (!data) return;

        if (data.error) {
          setprojectsCollection([]);
        } else {
          const projectsCollection = [];

          Object.entries(data).sort(([firstKey], [secondKey]) => {
            firstKey = parseInt(firstKey);
            secondKey = parseInt(secondKey);

            if (firstKey < secondKey) {
              return 1;
            } else {
              return -1;
            }
          });

          Object.keys(data).forEach((key, index) => {
            projectsCollection.push(data[key]);
          });

          setprojectsCollection(projectsCollection);
        }
      })
      .then(() => {
        setisLoading(false);
      });
  };

  const callGetAllProjects = () => {
    setisLoading(true);
    getAllProject()
      .then((data) => {
        if (!data) return;
        const projectsCollection = [];

        if (data.error) {
          setprojectsCollection([]);
        } else {
          data.forEach((domain, index) => {
            Object.keys(domain).forEach((key, index) => {
              projectsCollection.push({ [key]: domain[key] });
            });
          });

          projectsCollection.sort((firstElement, secondElement) => {
            const firstKey = Number.parseInt(Object.keys(firstElement)[0]);
            const secondKey = Number.parseInt(Object.keys(secondElement)[0]);

            if (firstKey < secondKey) {
              return 1;
            } else {
              return -1;
            }
          });

          const modifiedOrderProjectsCollection = [];
          Object.values(projectsCollection).forEach((project, index) => {
            Object.keys(project).forEach((projectId, index) => {
              modifiedOrderProjectsCollection.push(project[projectId]);
            });
          });

          setprojectsCollection(modifiedOrderProjectsCollection);
        }
      })
      .then(() => {
        setisLoading(false);
      });
  };

  return (
    <div className="container certificate-collection mt-5">
      <h2
        className="text-center mb-4 aos-removal-class"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        {dropdownIndex === 0 ? "Projects" : projectsCategory[dropdownIndex]}
      </h2>
      {projectsCollection && projectsCollection.length > 0 && (
        <ProjectFilterComponent
          projectsCategory={projectsCategory}
          dropdownIndex={dropdownIndex}
          setdropdownIndex={setdropdownIndex}
        />
      )}

      {projectsCollection && isAdminAuthenticated() && (
        <AdminProjectAddButton projectsCategory={projectsCategory} />
      )}

      <div className="row mt-5">
        {(projectsCollection &&
          projectsCollection.length > 0 &&
          projectsCollection.map((project, index) => {
            return (
              <div className="col-lg-4" key={index}>
                <ProjectShowCaseComponent
                  project={project}
                  projectsCategory={projectsCategory}
                  setisLoading={setisLoading}
                />
              </div>
            );
          })) ||
          (isLoading ? (
            <CustomSkeleton />
          ) : (
            <CommonNotFoundMessage message={"This Website till in beta mode. Admin not added any project yet. Please visit after some days."} />
          ))}
      </div>
    </div>
  );
};

const ProjectFilterComponent = ({
  projectsCategory,
  dropdownIndex,
  setdropdownIndex,
}) => {
  return (
    <ul
      className="list-unstyled d-flex flex-wrap justify-content-center align-items-center mt-5 aos-removal-class"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="1000"
    >
      {projectsCategory.map((category, index) => {
        return (
          <li
            onClick={() => {
              setdropdownIndex(index);
            }}
            key={index}
            className="btn project-domain-type border-0 mx-3 mb-3"
          >
            <a href={`#${category}`} className="text-white">
              {category}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const ProjectShowCaseComponent = ({
  project,
  projectsCategory,
  setisLoading,
}) => {
  return (
    <div
      className="card mb-5 mx-0 mx-md-3 project-container aos-removal-class"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="500"
      style={{ borderRadius: "5px" }}
    >
      <img
        src={project.projectImage}
        alt="Project-ImageShow"
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{project.projectName}</h5>
        <p className="card-text">{project.projectDescription}</p>
        {
          <ProjectMaterial
            project={project}
            projectsCategory={projectsCategory}
            setisLoading={setisLoading}
          />
        }
      </div>
    </div>
  );
};

const ProjectMaterial = ({ project, projectsCategory, setisLoading }) => {
  return (
    <div className="card-inside-hover-body">
      <div
        className="d-flex flex-wrap justify-content-center align-items-center text-white w-100 all-in-one p-3"
        style={{ height: "100%" }}
      >
        <TechStackNameCollection project={project} />
        {isAdminAuthenticated() && (
          <AdminControlSection
            project={project}
            projectsCategory={projectsCategory}
            setisLoading={setisLoading}
          />
        )}
        <ProjectShowCaseOptionsManagement project={project} />
      </div>
      <ProjectGithubLink project={project} />
    </div>
  );
};

const ProjectGithubLink = ({ project }) => {
  return (
    (project.projectGithubLink && (
      <img
        src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
        className="position-absolute top-0 left-0 project-github-link p-1"
        alt="github-logo"
        onClick={() => {
          window.open(project.projectGithubLink);
        }}
      />
    )) || <></>
  );
};

const TechStackNameCollection = ({ project }) => (
  <div
    style={{ height: "40%" }}
    className=" container-fluid d-flex flex-wrap justify-content-center align-items-center tech-stack"
  >
    {project.projectTechUsed.map((tech, index) => {
      return (
        <div
          className="badge mx-2 tech-stack-name mb-md-1"
          style={{
            backgroundColor: "#EDC126",
            fontSize: "0.9rem",
            letterSpacing: "1px",
          }}
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
    style={{ height: isAdminAuthenticated() ? "30%" : "60%" }}
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
      className="btn btn-success text-white border-0 fs-6"
      style={{ backgroundColor: "#00D84A" }}
    >
      {buttonName}
    </button>
  </a>
);

const AdminControlSection = ({ project, projectsCategory, setisLoading }) => {
  const navigate = useNavigate();
  // Modify Projects Category
  const filteredProjectsCategory = projectsCategory.map(
    (category, index) => category.split(" ")[0]
  );

  const handleDelete = () => {
    setisLoading(true);
    deleteProject(project.projectId, project.projectType)
      .then((data) => {
        setisLoading(false);
        navigate("/project");
      })
      .catch((error) => {
        setisLoading(false);
      });
  };

  return (
    <div
      className="w-100 d-flex justify-content-around align-items-center"
      style={{ height: "5vh" }}
    >
      <button
        className="btn btn-info text-white"
        onClick={() => {
          navigate("/admin/project-form-entry", {
            state: {
              project: project,
              projectsCategory: filteredProjectsCategory,
            },
          });
        }}
      >
        <img
          src="https://img.icons8.com/pastel-glyph/64/ffffff/loop.png"
          alt="Update Icon"
          width="20px"
          className="pb-1"
        ></img>
        &nbsp;Update
      </button>

      <button
        className="btn btn-danger text-white"
        onClick={() => handleDelete()}
      >
        <img
          src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/ffffff/external-delete-miscellaneous-kiranshastry-lineal-kiranshastry.png"
          width="20px"
          alt="Delete Icon"
          className="pb-1"
        ></img>
        &nbsp;Delete
      </button>
    </div>
  );
};

const AdminProjectAddButton = ({ projectsCategory }) => {
  // Modify Projects Category
  const filteredProjectsCategory = projectsCategory.map(
    (category, index) => category.split(" ")[0]
  );

  const navigate = useNavigate();
  return (
    <div className="container my-3 text-center">
      <button
        className="btn text-white new-project-add-button aos-removal-class"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="1300"
        onClick={() => {
          navigate("/admin/project-form-entry", {
            state: { projectsCategory: filteredProjectsCategory },
          });
        }}
      >
        <i className="fas fa-plus"></i> &nbsp;&nbsp; Add New Project
      </button>
    </div>
  );
};

export default ProjectComponent;
