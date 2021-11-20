import isAdminAuthenticated from "./auth/helper";
import { Navigate, useLocation } from "react-router-dom";
import AdminSignIn from "./auth/adminsignin";
import AdminProjectFormEntryPoint from "./projectform";
import AdminCertificateFormEntryPoint from "./certificateform";

export const AdminPrivateRoute = ({ Component }) => {
  if (
    isAdminAuthenticated() &&
    isAdminAuthenticated().role ===
      process.env.REACT_APP_ADMIN_IDENTIFICATION_ROLE
  ) {
    return <Component />;
  }

  return <Navigate to="/admin/signin" />;
};

export const AdminIsSignedIn = () => {
  if (
    isAdminAuthenticated() &&
    isAdminAuthenticated().role ===
      process.env.REACT_APP_ADMIN_IDENTIFICATION_ROLE
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <AdminSignIn />;
};

export const AdminProjectFormEntry = () => {
  const { state } = useLocation();

  if (state) {
    const { project, projectsCategory } = state;
    return (
      <AdminProjectFormEntryPoint
        project={project}
        projectsCategory={projectsCategory}
      />
    );
  }
  return <Navigate to="/admin/project-management" />;
};

export const AdminCertificateFormEntry = () => {
  const { state } = useLocation();

  if (state) {
    return <AdminCertificateFormEntryPoint />;
  }

  return <Navigate to="/admin/certificate-management" />;
};
