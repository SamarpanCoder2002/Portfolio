import Typewriter from "typewriter-effect";
import CommonComponent from "./common";
import samarpan_dasgupta_pic from "./images/samarpan_dasgupta.jpg";

const HomePage = () => {
  return <CommonComponent>{<MiddleSection />}</CommonComponent>;
};

const MiddleSection = () => {
  return (
    <div className="container bg-img-middle-section" align="center">
      <img
        src={samarpan_dasgupta_pic}
        alt="Samarpan Dasgupta Logo"
        width="150px"
        style={{ borderRadius: "50%" }}
      />
      <h3 className="display-5 fw-bold">Samarpan Dasgupta</h3>
      <h6 className="fs-5">Loves To Write Code</h6>
      <AutoTypingHelper />
    </div>
  );
};

const AutoTypingHelper = () => {
  return (
    <p className="auto-typing mt-2">
      &nbsp;I am&nbsp;
      <Typewriter
        options={{
          strings: ["a Developer", "a Designer", "a Freelancer", "a Youtuber"],
          autoStart: true,
          loop: true,
          delay: 40,
          deleteSpeed: 20,
          typeSpeed: 40,
        }}
      />
    </p>
  );
};

export default HomePage;
