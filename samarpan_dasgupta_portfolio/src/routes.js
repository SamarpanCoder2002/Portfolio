import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutComponent from "./aboutpage";
import CertificatesComponent from "./certificates";
import ContactComponent from "./contactpage";
import EducationComponent from "./educationpage";
import HomeComponent from "./homepage";
import ProjectComponent from "./project";
import SkillSetComponent from "./skills";
import TutorialComponent from "./tutorial/tutorialpage";

const RoutesEntryPoint = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomeComponent />} />
        <Route path="/about" exact element={<AboutComponent />} />
        <Route path="/certificate" exact element={<CertificatesComponent />} />
        <Route path="/skill" exact element={<SkillSetComponent />} />
        <Route path="/project" exact element={<ProjectComponent />} />
        <Route path="/education" exact element={<EducationComponent />} />
        <Route path="/tutorial" exact element={<TutorialComponent />} />
        <Route path="/contact" exact element={<ContactComponent />} />
      </Routes>
    </Router>
  );
};

export default RoutesEntryPoint;
