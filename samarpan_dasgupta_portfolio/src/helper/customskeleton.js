import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CustomSkeleton = () => {
  return (
    <div className="container mt-5 ">
      <div className="row justify-content-center">
        {[1, 2, 3, 4, 5].map((key, index) => {
          return (
            <div className="col-md-6 col-lg-3 mb-4 mx-md-3" key={index}>
              <Skeleton count={1} style={{ height: "150px" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomSkeleton;
