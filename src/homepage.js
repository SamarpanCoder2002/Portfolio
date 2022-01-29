import Typewriter from "typewriter-effect";
import CommonComponent from "./commonsection/common";
import samarpan_dasgupta_pic from "./images/samarpan_dasgupta.png";

const HomeComponent = () => {
  return <CommonComponent>{<MiddleSection />}</CommonComponent>;
};

const MiddleSection = () => {
  return (
    <div className="container bg-home-section" align="center">
      <img
        src={samarpan_dasgupta_pic}
        alt="Samarpan Dasgupta Logo"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="1000"
        className="h-25 img-fluid"
      />
      <h3
        className="display-5 fw-bold home-page-my-name mt-2 aos-removal-class"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Samarpan Dasgupta
      </h3>
      <h6
        className="home-page-status aos-removal-class"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Loves To Write Code
      </h6>
      <AutoTypingHelper />
    </div>
  );
};

const AutoTypingHelper = () => {
  return (
    <div
      className="auto-typing aos-removal-class"
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-delay="1000"
      style={{ color: "#0d6efd", fontSize: "1.5rem" }}
    >
      <Typewriter
        options={{
          strings: [
            "Developer From India",
            "Love To Create Android Apps Using Flutter",
            "Also Works on Full Stack Website Development",
            "Love To Create Web App",
            "Worked With Making and Managing APIs",
            "Sometime Also Works as a Youtuber",
          ],
          autoStart: true,
          loop: true,
          delay: 40,
          deleteSpeed: 20,
          typeSpeed: 40,
        }}
      />
    </div>
  );
};

export default HomeComponent;
