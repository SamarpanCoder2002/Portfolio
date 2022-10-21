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
        What you seek is seeking you
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
      style={{ color: "#000000" }}
    >
      <Typewriter
        options={{
          strings: [
            "Developer From India",
            "I am a full-time Software Developer",
            "Love to create apps using Flutter",
            "Also works on full stack Web Development",
            "Love to create Web App",
            "Works with making and managing APIs",
            "Creating content as Youtuber",
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
