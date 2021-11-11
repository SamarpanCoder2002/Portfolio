import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CertificatesComponent from "./certificates";
import HomePage from "./homepage";
import ProjectComponent from "./project";
import SkillSetComponent from "./skills";

const RoutesEntryPoint =()=> {

    
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/certificate" exact element={<CertificatesComponent />}/>
                <Route path="/skill" exact element={<SkillSetComponent />}/>
                <Route path="/project" exact element={<ProjectComponent />}/>
            </Routes>
        </Router>
    );
}


export default RoutesEntryPoint;