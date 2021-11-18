import "./loadingstyle.css";

const LoadingBar = ({ isLoading }) => {
  return isLoading ? (
    <div class="loader">
      <div class="loaderBar"></div>
    </div>
  ) : (
    <></>
  );
};

export default LoadingBar;
