import { useState, useEffect } from "react";
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
      projectDownloadLink: null,
      projectTechUsed: ["C", "C++", "Java", "Python", "Dart", "Javascript"],
    },
    {
      projectName: "Project 5",
      projectDescription: "Project 5 Description",
      projectImage: "http://i3.ytimg.com/vi/rr8A7aSobBw/maxresdefault.jpg",
      projectShowCase: "https://samarpandasgupta.com/",
      projectDemoVideo: "https://youtu.be/XadGEZYr5Go",
      projectDownloadLink:
        "https://play.google.com/store/apps/details?id=com.king.candycrushsaga",
      projectTechUsed: ["C", "C++", "Java", "Python", "Dart", "Javascript"],
    },
    {
      projectName: "Project 6",
      projectDescription: "Project 6 Description",
      projectImage: "http://i3.ytimg.com/vi/VO_COUhJ3G4/maxresdefault.jpg",
      projectShowCase: "https://samarpandasgupta.com/",
      projectDemoVideo: "https://youtu.be/XadGEZYr5Go",
      projectDownloadLink: null,
      projectTechUsed: ["C", "C++", "Java", "Python", "Dart", "Javascript"],
    },
    {
      projectName: "Project 7",
      projectDescription: "Project 7 Description",
      projectImage: "http://i3.ytimg.com/vi/rr8A7aSobBw/maxresdefault.jpg",
      projectShowCase: "https://samarpandasgupta.com/",
      projectDemoVideo: "https://youtu.be/XadGEZYr5Go",
      projectDownloadLink:
        "https://play.google.com/store/apps/details?id=com.king.candycrushsaga",
      projectTechUsed: ["C", "C++", "Java", "Python", "Dart", "Javascript"],
    },
    {
      projectName: "Project 8",
      projectDescription: "Project 8 Description",
      projectImage: "http://i3.ytimg.com/vi/VO_COUhJ3G4/maxresdefault.jpg",
      projectShowCase: "https://samarpandasgupta.com/",
      projectDemoVideo: "https://youtu.be/XadGEZYr5Go",
      projectDownloadLink: null,
      projectTechUsed: ["C", "C++", "Java", "Python", "Dart", "Javascript"],
    },
    {
      projectName: "Project 9",
      projectDescription: "Project 9 Description",
      projectImage: "http://i3.ytimg.com/vi/rr8A7aSobBw/maxresdefault.jpg",
      projectShowCase: "https://samarpandasgupta.com/",
      projectDemoVideo: "https://youtu.be/XadGEZYr5Go",
      projectDownloadLink: null,
      projectTechUsed: ["C", "C++", "Java", "Python", "Dart", "Javascript"],
    },
    {
      projectName: "Project 10",
      projectDescription: "Project 10 Description",
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
      {(projectsCategory && (
        <ProjectFilterComponent projectsCategory={projectsCategory} />
      )) || <CustomSkeleton />}
      <div className="row">
        {projectsCategory &&
          projectsCollection &&
          projectsCollection.map((project, index) => {
            return (
              <div className="col-lg-4">
                <ProjectShowCaseComponent project={project} />
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
            <li onClick={() => setdropdownIndex(index)}>
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

const ProjectShowCaseComponent = ({ project }) => {
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
        {<ProjectMaterial project={project} />}
      </div>
    </div>
  );
};

const ProjectMaterial = ({ project }) => {
  return (
    <div className="card-inside-hover-body p-3">
      <h2 className="text-center text-white fw-bold">Tech Stack</h2>
      <div
        className="d-flex flex-wrap justify-content-center align-items-center text-white w-100 all-in-one"
        style={{ height: "90%" }}
      >
        <TechStackNameCollection project={project} />
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
        >
          {tech}
        </div>
      );
    })}
  </div>
);

const ProjectShowCaseOptionsManagement = ({ project }) => (
  <div
    class="container w-100 d-flex flex-wrap justify-content-around align-items-center "
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

export default ProjectComponent;
