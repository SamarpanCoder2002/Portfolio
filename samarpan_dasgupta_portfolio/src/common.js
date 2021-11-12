import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import { useLocation } from "react-router";

const CommonComponent = ({ children }) => {
  const location = useLocation();

  return (
    <div className="container-fluid m-0 p-0">
      {<NavigationBarSection />}
      {location.pathname === "/" && <ConnectWithMe />}
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
            <Link className="nav-link text-center" to="/project">
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

const ConnectWithMe = () => (
  <ul className="list-unstyled position-absolute social-links">
    <div className="social-media-container" rel="noreferrer">
      <a
        href="https://www.facebook.com/samarpan.dasgupta.3"
        target="_blank"
        className="social-media-container-item mb-5"
        rel="noreferrer"
      >
        facebook
      </a>
      <a
        href="https://www.instagram.com/samarpan_dasgupta/"
        target="_blank"
        className="social-media-container-item mb-5"
        rel="noreferrer"
      >
        instagram
      </a>
      <a
        href="https://www.linkedin.com/in/samarpan-dasgupta-4aa1061b0/"
        target="_blank"
        className="social-media-container-item mb-5"
        rel="noreferrer"
      >
        linkedIn
      </a>
      <a
        href="https://github.com/SamarpanCoder2002"
        target="_blank"
        className="social-media-container-item mb-5"
        rel="noreferrer"
      >
        github
      </a>
    </div>
  </ul>
);

export default CommonComponent;
