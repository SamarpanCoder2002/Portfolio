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
        height="25%"
        
        style={{ borderRadius: "50%" }}
      />
      <h3 className="display-5 fw-bold home-page-my-name mt-2">Samarpan Dasgupta</h3>
      <h6 className="home-page-status">Loves To Write Code</h6>
      <AutoTypingHelper />
    </div>
  );
};

const AutoTypingHelper = () => {
  return (
    <div className="auto-typing mt-2">
      &nbsp;I am a&nbsp;
      <Typewriter
        options={{
          strings: ["Developer", "Designer", "Freelancer", "Youtuber"],
          autoStart: true,
          loop: true,
          delay: 40,
          deleteSpeed: 20,
          typeSpeed: 40,
        }}
      />
    </div>
  )
};

export default HomeComponent;
