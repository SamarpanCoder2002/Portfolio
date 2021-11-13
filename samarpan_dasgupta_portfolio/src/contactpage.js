import CommonComponent from "./commonsection/common";

const ContactComponent = () => {
  return (
    <CommonComponent>
      <ContactSection />
    </CommonComponent>
  );
};

const ContactSection = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Contact</h2>
      <div className="row">
        <div className="col-lg-6 mb-5">
          <ConatctForFreelancing />
        </div>
        <div className="col-lg-6">
          <ContactForPersonalProject />
        </div>
      </div>
    </div>
  );
};

const ConatctForFreelancing = () => {
  return (
    <div className="container mt-3">
      <p className="fs-6 text-center">
        Want to Hire me as a Freelancer? Send me an email with relevant
        information and I will get back to you as soon as possible!
      </p>

        <p className="fs-5 fw-bold mt-5">🌟 Services I provide</p>
        <ol style={{lineHeight: "2rem"}}>
            <li className="fs-6">Web Design</li>
            <li className="fs-6">Frontend Web App Using React</li>
            <li className="fs-6">Full Stack Web App Using MERN Stack</li>
            <li className="fs-6">Android App Design Using Flutter</li>
            <li className="fs-6">Full Stack Android App Using Flutter</li>
        </ol>
        

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=contactsamarpandev@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="submit" className="btn btn-primary w-100 mt-5">
          Send Email to Samarpan
        </button>
      </a>
    </div>
  );
};

const ContactForPersonalProject = () => {
  return (
    <div className="container mt-3">
      <p className="fs-6 text-center">
        Help Required in your personal project? Send me an email with relevant
        information and I will contact you soon!
      </p>

      <a
        href="https://mail.yahoo.com/mail/?view=cm&fs=1&to=samarpanofficial2021@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="submit" className="btn btn-primary w-100">
          Request Help From Samarpan
        </button>
      </a>
    </div>
  );
};

export default ContactComponent;
