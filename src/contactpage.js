import Typewriter from "typewriter-effect";
import CommonComponent from "./commonsection/common";
import ContactPageImage from "./images/conatact-page-image.jpg";

const ContactComponent = () => {
  return (
    <CommonComponent>
      <ContactSection />
    </CommonComponent>
  );
};

const ContactSection = () => {
  return (
    <div className="container mt-3 contact-page py-5">
      <h2
        className="text-center aos-removal-class"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Contact
      </h2>
      <div className="row mt-4">
        <div className="col-lg-6 d-none d-lg-block">
          <ImageInLargeScreen />
        </div>
        <div className="col-lg-6 col-12">
          <ConatctForFreelancing />
        </div>
      </div>
    </div>
  );
};

const ImageInLargeScreen = () => {
  return (
    <div
      className="container mt-3 image aos-removal-class"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="500"
    >
      <img src={ContactPageImage} alt="contact" className="img-fluid rounded-3" />
    </div>
  );
};

const ConatctForFreelancing = () => {
  return (
    <div className="container mt-3 contact-for-freelancing">
      <p
        className="fs-5 text-center  aos-removal-class"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        Want to Hire me as a Freelancer? Send me an email with relevant
                information and I will get back to you as soon as possible!
      </p>

      <p
        className="fw-bold mt-5 services-heading aos-removal-class"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="800"
      >
        {" "}
        <img
          src="https://img.icons8.com/doodle/48/000000/star--v1.png"
          alt="star-smooth"
          width="30px"
          className="pb-1"
        />{" "}
        Services I provide
      </p>
      <ol
        className="aos-removal-class"
        style={{ lineHeight: "2rem" }}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="800"
      >
        <li>Web Design</li>
        <li>Frontend Web App Using React</li>
        <li>Full Stack Web App Using MERN Stack</li>
        <li>Android App Design Using Flutter</li>
        <li>Full Stack Android App Using Flutter</li>
      </ol>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=contactsamarpandev@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="aos-removal-class contact-page-aos-button"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="1000"
      >
        <button type="submit" className="btn btn-primary w-100 mt-5">
          Send Email to Samarpan
        </button>
      </a>
    </div>
  );
};

export default ContactComponent;
