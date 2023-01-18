import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useLocation } from "react-router";
import isAdminAuthenticated from "../admin/auth/helper";
import LoadingBar from "./loadingwithstyle/loadingbar";
import signoutHandler from "../admin/auth/adminsignout";
import AOS from "aos";
import "aos/dist/aos.css";

const CommonComponent = ({ children, isLoading }) => {
  const location = useLocation();

  return (
    <div className="container-fluid m-0 p-0">
      {<NavigationBarSection isLoading={isLoading} />}
      {location.pathname === "/" && <ConnectWithMe />}

      {children}

      {location.pathname !== "/" && !isAdminAuthenticated() && <Footer />}
    </div>
  );
};

const NavigationBarSection = ({ isLoading }) => {
  const [isOpenMenu, setisOpenMenu] = useState(false);

  useEffect(() => {
    AOS.init();
  });

  const focusedNavBarClass = (path) => {
    if (window.location.pathname === path) {
      return "nav-link text-center active";
    } else {
      return "nav-link text-center";
    }
  };

  return (
    <div
      className="sticky-top"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="1200"
    >
      <LoadingBar isLoading={isLoading} />
      <nav className="navbar navbar-expand-lg navbar-light top-nav-bar">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            <div className="row w-50">
              <div className="col-md-6">
                <img
                  src={logo}
                  alt="Samarpan Dasgupta Portfolio Logo"
                  width="50px"
                  className="img-fluid"
                />
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
            onClick={() => {
              setisOpenMenu(!isOpenMenu);

              dataAOSremoval();
            }}
          >
            {isOpenMenu ? (
              <img
                src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-cancel-mintab-for-ios-becris-lineal-becris.png"
                alt="close menu"
                width="30"
              />
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav fw-bold">
              {!isAdminAuthenticated() && (
                <Link
                  className={focusedNavBarClass("/")}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              )}
              {!isAdminAuthenticated() && (
                <Link
                  className={focusedNavBarClass("/about")}
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              )}
              {!isAdminAuthenticated() && (
                <Link className={focusedNavBarClass("/skill")} to="/skill">
                  Skills
                </Link>
              )}

              {!isAdminAuthenticated() && (
                <Link
                  className={focusedNavBarClass("/experience")}
                  to="/experience"
                >
                  Experience
                </Link>
              )}

              {!isAdminAuthenticated() && (
                <Link className={focusedNavBarClass("/project")} to="/project">
                  Projects
                </Link>
              )}
              {!isAdminAuthenticated() && (
                <Link
                  className={focusedNavBarClass("/certificate")}
                  to="/certificate"
                >
                  Certificates
                </Link>
              )}

              {!isAdminAuthenticated() && (
                <Link
                  className={focusedNavBarClass("/education")}
                  to="/education"
                >
                  Education
                </Link>
              )}
              {!isAdminAuthenticated() && (
                <Link
                  className={focusedNavBarClass("/tutorial")}
                  to="/tutorial"
                >
                  Tutorial
                </Link>
              )}
              {/* {!isAdminAuthenticated() && (
                <Link className={focusedNavBarClass("/contact")} to="/contact">
                  Contact
                </Link>
              )} */}
              {!isAdminAuthenticated() && (
                <a
                  className={focusedNavBarClass("/blog")}
                  href="https://blog.tech.samarpandasgupta.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blog
                </a>
              )}
              {isAdminAuthenticated() && (
                <Link
                  className={focusedNavBarClass(
                    "/admin/certificate-management"
                  )}
                  to="/admin/certificate-management"
                >
                  Certificate Management
                </Link>
              )}
              {isAdminAuthenticated() && (
                <Link
                  className={focusedNavBarClass("/admin/project-management")}
                  to="/admin/project-management"
                >
                  Project Management
                </Link>
              )}
              {isAdminAuthenticated() && (
                <span
                  className={focusedNavBarClass("/signout")}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    signoutHandler();
                  }}
                >
                  Signout
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const ConnectWithMe = () => (
  <ul
    className="list-unstyled position-absolute social-links"
    data-aos="fade-right"
    data-aos-duration="2000"
    data-aos-delay="1400"
  >
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
    color: "#2867B2",
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
  <div
    className="container-fluid mt-5 footer d-block sticky-bottom aos-removal-class"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div className="container py-5 px-4">
      <div className="row">
        <div className="col-lg-8">
          <h2 className="fs-2 fw-bold">
            <img
              src="https://img.icons8.com/emoji/96/ffffff/person-raising-hand.png"
              width="40px"
              className="pb-3"
              alt="raising hand"
            />{" "}
            Connect With Me at
          </h2>
          <a
            className="email"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=samarpanofficial2021@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            samarpanofficial2021@gmail.com
          </a>

          <ul className="social-icons list-unstyled d-flex flex-wrap w-100 justify-content-between align-items-center mt-5">
            {socialMediaInformation.map((item, index) => (
              <SocialMediaIcons
                icon={item.icon}
                link={item.link}
                color={item.color}
                key={index}
              />
            ))}
          </ul>

          <div className="copy fw-bold mt-5">
            © {new Date().getFullYear()}, Designed and Developed by &nbsp;
            <a href="https://samarpandasgupta.com/">Samarpan Dasgupta</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SocialMediaIcons = ({ icon, link, color }) => (
  <li>
    <a href={link} target="_blank" rel="noreferrer">
      <i className={icon} style={{ color: `${color}` }}></i>
    </a>
  </li>
);

const dataAOSremoval = () => {
  /// For AOS Removal
  const aosRemovalSection =
    document.getElementsByClassName("aos-removal-class");

  aosRemovalSection &&
    Object.keys(aosRemovalSection).forEach((key, index) => {
      if (aosRemovalSection[key].hasAttribute("data-aos")) {
        aosRemovalSection[key].removeAttribute("data-aos");
      }
    });
};

export default CommonComponent;
