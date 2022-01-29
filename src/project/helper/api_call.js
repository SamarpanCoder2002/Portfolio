import { API } from "../../helper/backend_api_root";

export const getAllProjectCategory = () => {
  return fetch(`${API}/project/getAllProjectCategory`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const addNewProject = (project) => {
  return fetch(`${API}/project/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ project }),
  })
    .then((res) => res.json())
    .catch((error) => console.error("Project Add Error:", error));
};

export const updateProject = (project) => {
  return fetch(`${API}/project/update/${project.projectId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ project }),
  })
    .then((res) => res.json())
    .catch((error) => console.error("Project Update Error:", error));
};

export const getAllProject = () => {
  return fetch(`${API}/project/getall`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => console.error("Project All Error:", error));
};

export const getParticularDomainProjects = (domain) => {
  return fetch(`${API}/project/getparticulardomain/${domain}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Project All Error:", error));
};

export const deleteProject = (projectId, projectType) => {
  return fetch(`${API}/project/delete/${projectId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ projectType }),
  })
    .then((res) => res.json())
    .catch((error) => console.error("Project Delete Error:", error));
};
