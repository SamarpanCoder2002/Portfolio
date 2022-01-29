import "./ipad-style.css";

const IPadContainer = ({ videoLink }) => (
  <div className="container custom-ipad">
    <div className="contain-video">
      <iframe
        width="560"
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

export default IPadContainer;
