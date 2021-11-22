import { API } from "../../helper/backend_api_root";

export const addCertificate = (certificate) => {
  return fetch(`${API}/certificate/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ certificate }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getCertificates = () => {
  return fetch(`${API}/certificate/getall`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export const deleteCertificate = (id) => {
  console.log("Certificate id: ", id);
  return fetch(`${API}/certificate/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
