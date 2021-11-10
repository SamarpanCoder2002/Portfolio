import CommonComponent from "./common";
import certificate from "./images/certificate.png";
import react_redux_certificate from "./images/react-redux.png";

const CertificatesComponent = () => {
  return (
    <CommonComponent>{<CertificationCollectionSection />}</CommonComponent>
  );
};

const CertificationCollectionSection = () => {
  return (
    <div className="container certificate-collection mt-5">
      <h2 className="text-center mb-5">Certificates</h2>
      <div className="row">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
          return (
            <div className="col-md-6 col-lg-4">
              {i % 2 === 0 ? <CertificationCard2 /> : <CertificationCard />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CertificationCard = () => {
  return (
    <div class="certificate-container mb-5 mx-0 mx-md-3">
      <img src={certificate} class="card-img-top" alt="..." />
    </div>
  );
};
const CertificationCard2 = () => {
  return (
    <div class="certificate-container mb-5 mx-0 mx-md-3">
      <img src={react_redux_certificate} class="card-img-top" alt="..." />
    </div>
  );
};

export default CertificatesComponent;
