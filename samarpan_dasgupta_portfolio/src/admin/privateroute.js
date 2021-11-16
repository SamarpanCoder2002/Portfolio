import isAdminAuthenticated from "./checking/helper";
import { Navigate } from "react-router-dom";
import AdminSignIn from "./adminsignin";

require("dotenv").config();

const AdminPrivateRoute = ({ Component }) => {
  if (
    isAdminAuthenticated() &&
    isAdminAuthenticated().role === process.env.ADMIN_IDENTIFICATION_ROLE
  ) {
    return <Component />;
  }

  return <Navigate to="/admin/signin" />;
};

export default AdminPrivateRoute;

export const AdminIsSignedIn = () => {
  console.log(isAdminAuthenticated());

  if (
    isAdminAuthenticated() &&
    isAdminAuthenticated().role === process.env.ADMIN_IDENTIFICATION_ROLE
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <AdminSignIn />;
};
