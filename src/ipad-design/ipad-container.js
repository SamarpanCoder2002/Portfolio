import "./ipad-style.css";

const IPadContainer = ({ videoLink }) => (
  <div class="container custom-ipad">
    <div class="contain-video">
      <iframe
        width="560"
        height="315"
        src={videoLink}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
);

export default IPadContainer;
