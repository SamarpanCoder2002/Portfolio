import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const CommonComponent = ({ children }) => {
  return (
    <div className="container-fluid m-0 p-0">
      {<NavigationBarSection />}
      {children}
    </div>
  );
};

const NavigationBarSection = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light top-nav-bar sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          <div className="row w-50">
            <div className="col-md-6">
              <img src={logo} alt="Logo" width="50px" />
            </div>
            <div className="col-md-6 d-none d-md-block mt-2 my-name">
              Samarpan Dasgupta
            </div>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "none" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fw-bold">
            <Link className="nav-link text-center" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link text-center" to="/skill">
              Skills
            </Link>
            <Link className="nav-link text-center" to="#">
              Projects
            </Link>
            <Link className="nav-link text-center" to="/certificate">
              Certificates
            </Link>
            <Link className="nav-link text-center" to="#">
              Education
            </Link>
            <Link className="nav-link text-center" to="#">
              Tutorial
            </Link>
            <Link className="nav-link text-center" to="#">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CommonComponent;
