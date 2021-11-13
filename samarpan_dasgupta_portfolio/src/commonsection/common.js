import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useLocation } from "react-router";

const CommonComponent = ({ children }) => {
  const location = useLocation();

  return (
    <div className="container-fluid m-0 p-0">
      {<NavigationBarSection />}
      {location.pathname === "/" && <ConnectWithMe />}
      {children}
      {location.pathname !== "/" && <Footer />}
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
            <Link className="nav-link text-center" to="/education">
              Education
            </Link>
            <Link className="nav-link text-center" to="/tutorial">
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

const socialMediaInformation = [
  {
    icon: "fab fa-youtube fa-2x",
    link: "https://www.youtube.com/channel/UCafv0dsb4Xp8sSWoKdmw5BQ",
    color: "red",
  },

  {
    icon: "fab fa-github fa-2x",
    link: "https://www.github.com/SamarpanCoder2002",
    color: "#1d1a1a",
  },
  {
    icon: "fab fa-linkedin-in fa-2x",
    link: "https://www.linkedin.com/in/samarpan-dasgupta-4aa1061b0/",
    color: "#3b5998",
  },

  {
    icon: "fab fa-facebook-f fa-2x",
    link: "https://www.facebook.com/samarpan.dasgupta.3/",
    color: "#3b5998",
  },
  {
    icon: "fab fa-instagram fa-2x",
    link: "https://www.instagram.com/samarpan_dasgupta/",
    color: "#e4405f",
  },

  {
    icon: "fab fa-twitter fa-2x",
    link: "https://twitter.com/SamarpanDasgup1",
    color: "#1da1f2",
  },
];

const Footer = () => (
  <div className="container-fluid mt-5 footer d-block sticky-bottom">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="fs-4 fw-bold">🙋 Connect With Me at</h2>
          <a
            class="email"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=samarpanofficial2021@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            samarpanofficial2021@gmail.com
          </a>

          <ul class="social-icons list-unstyled d-flex flex-wrap w-100 justify-content-between align-items-center mt-3">
            {socialMediaInformation.map((item) => (
              <SocialMediaIcons
                icon={item.icon}
                link={item.link}
                color={item.color}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const SocialMediaIcons = ({ icon, link, color }) => (
  <li>
    <a href={link} target="_blank" rel="noreferrer">
      <i class={icon} style={{ color: `${color}` }}></i>
    </a>
  </li>
);

export default CommonComponent;
