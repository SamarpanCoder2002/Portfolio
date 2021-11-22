import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AboutComponent from "./aboutpage";
import isAdminAuthenticated from "./admin/auth/helper";
import DashboardComponent from "./admin/dashboard";
import {
  AdminPrivateRoute,
  AdminCertificateFormEntry,
  AdminIsSignedIn,
  AdminProjectFormEntry,
} from "./admin/privateroute";
import CertificatesComponent from "./certificate/certificates";
import ContactComponent from "./contactpage";
import EducationComponent from "./educationpage";
import ErrorPath from "./errorpage";
import HomeComponent from "./homepage";
import ProjectComponent from "./project/project";
import SkillSetComponent from "./skills";
import TutorialComponent from "./tutorial/tutorialpage";

const RoutesEntryPoint = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomeComponent />} />
        <Route path="/about" exact element={<AboutComponent />} />
        <Route
          path="/certificate"
          exact
          element={
            isAdminAuthenticated() ? (
              <Navigate to="/admin/certificate-management" />
            ) : (
              <CertificatesComponent />
            )
          }
        />
        <Route path="/skill" exact element={<SkillSetComponent />} />
        <Route
          path="/project"
          exact
          element={
            isAdminAuthenticated() ? (
              <Navigate to="/admin/project-management" />
            ) : (
              <ProjectComponent />
            )
          }
        />
        <Route path="/education" exact element={<EducationComponent />} />
        <Route path="/tutorial" exact element={<TutorialComponent />} />
        <Route path="/contact" exact element={<ContactComponent />} />
        <Route path="admin">
          <Route path="signin" exact element={AdminIsSignedIn()} />
          <Route
            path="dashboard"
            exact
            element={<AdminPrivateRoute Component={DashboardComponent} />}
          />
          <Route
            path="certificate-management"
            exact
            element={<AdminPrivateRoute Component={CertificatesComponent} />}
          />
          <Route
            path="project-management"
            exact
            element={<AdminPrivateRoute Component={ProjectComponent} />}
          />
          <Route
            path="project-form-entry"
            exact
            element={<AdminProjectFormEntry />}
          />
          <Route
            path="certificate-form-entry"
            exact
            element={<AdminCertificateFormEntry />}
          />
          <Route path="*" element={<ErrorPath />} />
        </Route>
        <Route path="*" element={<ErrorPath />} />
      </Routes>
    </Router>
  );
};

export default RoutesEntryPoint;
