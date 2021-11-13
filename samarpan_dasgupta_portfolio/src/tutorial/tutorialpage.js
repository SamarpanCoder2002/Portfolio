import { useState } from "react";
import CommonComponent from "../commonsection/common";
import SocialMediaFlutterApp from "./social_media_flutter_app";

const TutorialComponent = () => {
  return (
    <CommonComponent>
      <TutorialPage />
    </CommonComponent>
  );
};

const tutorialNameCollection = [
  "Flutter Social Media Chat App",
  "Flutter Social Media Chat App",
  "Flutter Social Media Chat App",
];

const TutorialPage = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-3">Tutorial</h2>
      <div className="card w-100 skill-set-card mb-4 mx-md-3 list-group mt-3">
        <TutorialCollection />
      </div>
    </div>
  );
};

const TutorialCollection = () => {
  const [currIndex, setcurrIndex] = useState(0);

  const getCardActivationStatusNavItem = (index) => {
    if (index === currIndex) {
      return "nav-link active fw-bold";
    } else {
      return "nav-link";
    }
  };

  const getCardActivationStatusTabPane = (index) => {
    if (index === currIndex) {
      return "tab-pane active";
    } else {
      return "tab-pane";
    }
  };

  return (
    <>
      <div className="card-header ">
        <ul
          className="nav nav-tabs card-header-tabs pb-1"
          id="bologna-list"
          role="tablist"
        >
          {Object.keys(tutorialNameCollection).map((key, index) => {
            return (
              <li className="nav-item" onClick={() => setcurrIndex(index)}>
                <a
                  className={getCardActivationStatusNavItem(index)}
                  aria-current="true"
                  href="#domain-navigation-tab"
                  style={{ backgroundColor: "#f6f6f6", border: "none" }}
                >
                  {tutorialNameCollection[key]}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="card-body">
        {Object.keys(tutorialNameCollection).map((key, index) => {
          return (
            <div className="tab-content mt-3" id="myTabContent">
              <div
                className={getCardActivationStatusTabPane(index)}
                id="description"
                role="tabpanel"
                aria-labelledby={index}
              >
                <p className="card-text">
                  <Decider index={index} />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Decider = ({ index }) => {
  switch (index) {
    case 0:
      return <SocialMediaFlutterApp />;
    default:
      return <div>No tutorial found</div>;
  }
};

export default TutorialComponent;
