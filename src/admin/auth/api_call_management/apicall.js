import {API} from "../../../helper/backend_api_root";

export const signin = (user) => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const signout = () => {
  return fetch(`${API}/signout`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
