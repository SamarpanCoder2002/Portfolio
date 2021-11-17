import { useState } from "react";
import isAdminAuthenticated from "./admin/checking/helper";
import CommonComponent from "./commonsection/common";
import CustomSkeleton from "./helper/customskeleton";

const CertificatesComponent = () => {
  return (
    <CommonComponent>{<CertificationCollectionSection />}</CommonComponent>
  );
};

const CertificationCollectionSection = () => {
  const temp = [
    {
      image:
        "https://images.all-free-download.com/images/graphicthumb/certificate_template_elegant_bright_classic_decor_6852680.jpg",
      name: "sample100",
      id: "1637071559090",
    },
    {
      image:
        "https://images.all-free-download.com/images/graphicthumb/certificate_template_elegant_bright_classic_decor_6852680.jpg",
      name: "sample100",
      id: "1637071479849",
    },
    {
      name: "sample100",
      image:
        "https://images.all-free-download.com/images/graphicthumb/certificate_template_elegant_bright_classic_decor_6852680.jpg",
      id: "1637071424173",
    },
    {
      name: "sample100",
      image:
        "https://images.all-free-download.com/images/graphicthumb/certificate_template_elegant_bright_classic_decor_6852680.jpg",
      id: "1637071173041",
    },
  ];

  const [certificates, setcertificates] = useState(temp);

  return (
    <div className="container mt-5">
      <h2 className="fs-2 text-center">Certificates</h2>

      {isAdminAuthenticated() && <AdminCertificateAddButton />}

      <div className="row mt-5">
        {(certificates &&
          certificates.map((certi, index) => {
            const { image, name, id } = certi;
            return (
              <div className="col-md-6 col-lg-4" key={index}>
                <CertificationCard
                  particularCertificate={image}
                  certificateName={name}
                  certificateId={id}
                />
              </div>
            );
          })) || <CustomSkeleton />}
      </div>
    </div>
  );
};

const CertificationCard = ({
  particularCertificate,
  certificateName,
  certificateId,
}) => {
  console.log(particularCertificate);
  return (
    <div className="certificate-container mb-5 mx-0 col-md-12">
      <img
        src={particularCertificate}
        className="card-img-top"
        alt={certificateName}
        data-bs-toggle={isAdminAuthenticated() ? "modal" : ""}
        data-bs-target={isAdminAuthenticated() ? "#modalConfirmDelete" : ""}
        onClick={() => {
          !isAdminAuthenticated() && window.open(particularCertificate);
        }}
      />

      <DeleteCertificate id={certificateId} />
    </div>
  );
};

/// For Admin Certificate Management Section

const DeleteCertificate = ({ id }) => {
  return (
    <div
      className="modal fade"
      id="modalConfirmDelete"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-fullscreen-sm-down modal-notify modal-danger border-0"
        role="document"
      >
        <div className="modal-content text-center">
          <div className="modal-header bg-danger justify-content-center">
            <h4 className="text-center text-white">Delete Confirmation</h4>
          </div>

          <div className="modal-body border-0 justify-content-center align-items-center d-flex">
            This Certifiate Will Delete Forever. Do you want to continue?
          </div>

          <div className="modal-footer flex-center border-0">
            <a
              href="#deletecertificateyes"
              className="btn  btn-outline-danger"
              onClick={() => {
                deleteParticularCertificate(id);
              }}
            >
              Yes
            </a>
            <a
              href="#deletecertificateno"
              type="button"
              className="btn  btn-danger waves-effect"
              data-bs-dismiss="modal"
            >
              No
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminCertificateAddButton = () => {
  return (
    <div className="container my-5 text-center">
      <button className="btn text-white certificate-add-button">
        <i class="fas fa-plus"></i> &nbsp;&nbsp; Add New Certificate
      </button>
    </div>
  );
};

const deleteParticularCertificate = (id) => {
  // TODO: have to implement delete particular certificate with
  // api call
};
export default CertificatesComponent;
