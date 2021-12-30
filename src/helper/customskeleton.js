import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CustomSkeleton = () => {
  return (
    <div className="container">
      <div className="container justify-content-center">
        <div
          className="d-flex flex-wrap justify-content-center fw-bold fs-4 text-center"
          style={{ color: "gray", letterSpacing: "1px" }}
        >
          Hang tight, Data Fetching in Progress...
        </div>

        <div className="row skeleton-container d-flex flex-wrap justify-content-center align-items-center mt-5">
          {[1, 2, 3, 4, 5].map((key, index) => {
            return (
              <div className="col-md-6 col-lg-3 mb-4 mx-md-3" key={index}>
                <Skeleton count={1} style={{ height: "150px" }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomSkeleton;
