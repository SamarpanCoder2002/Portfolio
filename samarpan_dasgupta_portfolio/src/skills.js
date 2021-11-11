import { useState } from "react";
import CommonComponent from "./common";
import CustomSkeleton from "./helper/customskeleton";

const SkillSetComponent = () => {
  const [skillDataSet, setskillDataSet] = useState({
    Frontend: {
      category: 2,
      all_categories: {
        Web: [
          "HTML5",
          "CSS3",
          "Javascript",
          "React.js",
          "Redux-Saga",
          "Bootstrap",
          "Material UI",
        ],
        Mobile: ["Flutter"],
      },
    },
    Backend: {
      category: 2,
      all_categories: {
        Web: ["Node.js", "Express.js", "REST APIs"],
        Mobile: ["Flutter"],
      },
    },
    Database: {
      category: 1,
      all_categories: {
        Database: ["Firebase", "MongoDB", "SQLite"],
      },
    },
    "Tools Used": {
      category: 1,
      all_categories: {
        "Tools Used": ["NPM", "Github", "Coggle", "Jira", "Canva"],
      },
    },
    "Other Skills": {
      category: 1,
      all_categories: {
        "Other Skills": [
          "Mobile First Design",
          "Story Writing",
          "Video Editing",
        ],
      },
    },
  });

  return (
    <CommonComponent>
      {(skillDataSet && <SkillSetSection skillDataSet={skillDataSet} />) || (
        <CustomSkeleton />
      )}
    </CommonComponent>
  );
};

const SkillSetSection = ({ skillDataSet }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Skill Set</h2>
      <div className="row justify-content-center">
        {Object.keys(skillDataSet).map((key, index) => {
          return (
            <div className="col-md-6 col-lg-4" key={index}>
              <SkillContainer
                skillSingleSet={skillDataSet[key]}
                mainTechSkillName={key}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SkillContainer = ({ skillSingleSet, mainTechSkillName }) => {
  return (
    <div className="card w-100 skill-set-card mb-4 mx-md-3 list-group">
      <p className="card-header text-center text-white skill-card-header">
        {mainTechSkillName}
      </p>

      {skillSingleSet.category === 2 ? (
        <ManySkillTypeCollection
          allTypeSkillsCollection={skillSingleSet.all_categories}
        />
      ) : (
        <div className="card-body my-auto">
          <SkillShow
            allCategories={
              skillSingleSet.all_categories[`${mainTechSkillName}`]
            }
          />
        </div>
      )}
    </div>
  );
};

const ManySkillTypeCollection = ({ allTypeSkillsCollection }) => {
  const [currIndex, setcurrIndex] = useState(0);

  const getCardActivationStatusNavItem = (index) => {
    if (index === currIndex) {
      return "nav-link active";
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
          className="nav nav-tabs card-header-tabs"
          id="bologna-list"
          role="tablist"
        >
          {Object.keys(allTypeSkillsCollection).map((key, index) => {
            return (
              <li className="nav-item" onClick={() => setcurrIndex(index)}>
                <a
                  className={getCardActivationStatusNavItem(index)}
                  aria-current="true"
                  href="#domain-navigation-tab"
                >
                  {key}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="card-body">
        {Object.keys(allTypeSkillsCollection).map((key, index) => {
          return (
            <div className="tab-content mt-3" id="myTabContent">
              <div
                className={getCardActivationStatusTabPane(index)}
                id="description"
                role="tabpanel"
                aria-labelledby={index}
              >
                <p className="card-text">
                  <SkillShow allCategories={allTypeSkillsCollection[key]} />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const SkillShow = ({ allCategories }) => {
  return (
    <ol>
      {allCategories.map((category, index) => {
        return <li key={index}>{category}</li>;
      })}
    </ol>
  );
};

export default SkillSetComponent;
