import { signout } from "./api_call_management/apicall";

const signoutHandler = () => {
  signout().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data);
      localStorage.removeItem(process.env.REACT_APP_COOKIE_IDENTIFIER);
      window.location.replace("/admin/signin");
    }
  });
};

export default signoutHandler;
