import HTMLReactParser from "html-react-parser";
import CommonComponent from "../commonsection/common";
import { experienceDataCollection } from "./data/experience_data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceTimelineComponent = () => {
  return (
    <CommonComponent>
      <MakeTimeLine />
    </CommonComponent>
  );
};

const MakeTimeLine = () => {
  return (
    <div className="container">
      <h2
        className="text-center mt-1 mb-3"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Experience
      </h2>

      <VerticalTimeline lineColor="#0d6efd">
        {experienceDataCollection.map((experience, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "linear-gradient(180deg, #538ffb, #5b54fa)",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                {experience.title}
              </h3>
              <h6 className="mt-2">{experience.company}</h6>
              <p>
                {HTMLReactParser(experience.details)}
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceTimelineComponent;
