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
    <div className="container mt-5 about-page">
      <h2 className="text-center">About Myself</h2>
      <p className="mt-5">
        Myself <a href="https://samarpandasgupta.com">Samarpan Dasgupta</a>, a
        Web and Mobile App Designer with MERN Stack and Flutter Developer from
        Kolkata, India. I am 19 years old with having a great passion for learning
        new technologies.<br /><br />
        
        Love to create Websites, Android App with Mobile And Web
        app designing. I am second year student persuing BSC Computer
        Science Hons. I help my clients to build and grow their business with the help of
        the best web and mobile app design and development.
      </p>
    </div>
  );
};

export default AboutComponent;
