import { useState } from "react";
import CommonComponent from "./commonsection/common";
import CustomSkeleton from "./helper/customskeleton";
import certificate from "./images/certificate.png";
import react_redux_certificate from "./images/react-redux.png";

const CertificatesComponent = () => {
  return (
    <CommonComponent>{<CertificationCollectionSection />}</CommonComponent>
  );
};

const CertificationCollectionSection = () => {
  const [certificates, setcertificates] = useState([
    certificate,
    react_redux_certificate,
    certificate,
    react_redux_certificate,
    certificate,
    react_redux_certificate,
    certificate,
    react_redux_certificate,
  ]);

  return (
    <div className="container certificate-collection mt-5">
      <h2 className="text-center mb-5">Certificates</h2>
      <div className="row">
        {(certificates && certificates.map((certi, index) => {
          return (
            <div className="col-md-6 col-lg-4" key={index}>
              <CertificationCard particularCertificate={certi} />
            </div>
          );
        })) || <CustomSkeleton />}
      </div>
    </div>
  );
};

const CertificationCard = ({ particularCertificate }) => {
  return (
    <div class="certificate-container mb-5 mx-0 col-md-12" onClick={() => window.open(particularCertificate, "_blank")}>
      <img src={particularCertificate} class="card-img-top" alt="..." />
    </div>
  );
};

export default CertificatesComponent;
