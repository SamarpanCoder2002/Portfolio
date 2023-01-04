import Masonry from "react-masonry-css";
import IPadContainer from "../ipad-design/ipad-container";

const tutorialVideosCollection = [
 
];

const PopularVideosCollection = () => {
  const defaultItemsGrid = () => (tutorialVideosCollection?.length > 0 ? 2 : 1);
  const midItemsGrid = () => (tutorialVideosCollection?.length > 0 ? 1 : 1);

  const breakpointColumnsObj = {
    default: defaultItemsGrid(),
    1300: midItemsGrid(),
    640: 1,
  };

  return (
    <div className="youtube_tutorial_videos ">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        align="center"
      >
        {tutorialVideosCollection.map((tutorialVideoData) => {
          return (
            <div
              className="mt-3 mb-5 aos-removal-class"
              data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-delay="600"
            >
              <IPadContainerCommon
                videoLink={tutorialVideoData.embed_link}
              />
            </div>
          );
        })}
      </Masonry>
    </div>
  );
};

const IPadContainerCommon = ({ videoLink }) => (
    <div className="container custom-ipad">
      <div className="contain-video">
        <iframe
          width="410"
          height="315"
          src={videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );


export default PopularVideosCollection;