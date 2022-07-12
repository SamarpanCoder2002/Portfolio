import Typewriter from "typewriter-effect";
import CommonComponent from "./commonsection/common";

const AboutComponent = () => {
  return (
    <CommonComponent>
      <AboutPage />
    </CommonComponent>
  );
};

const AboutPage = () => {
  return (
    <div className="container mt-3 about-page">
      <h2 className="text-center" data-aos="zoom-in" data-aos-duration="1000">
        About Myself
      </h2>
      <p
        className="mt-4 about-me"
        data-aos="fade-out"
        data-aos-duration="2000"
        data-aos-delay="800"
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `Myself <a href="https://www.linkedin.com/in/samarpan-dasgupta-4aa1061b0/" target="_blank">Samarpan Dasgupta</a>, a
                  MERN/FERN Stack and Flutter Developer from
                  Kolkata, India. I am 20 years old with having a great passion for learning
                  new technologies.<br /><br />
  
                  Love to create Website, Web App, Android App with Making and Managing APIs. Having Experience to Work in Full Stack Projects. 
                  I am now working as a full-time Software Developer in a startup. Beside that, working on some of my personal projects and learning new technologies.`
              )
              .start();
          }}
          options={{
            delay: 20,
            typeSpeed: 40,
          }}
        />
      </p>
    </div>
  );
};

export default AboutComponent;
