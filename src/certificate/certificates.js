import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import isAdminAuthenticated from "../admin/auth/helper";
import CommonComponent from "../commonsection/common";
import CommonNotFoundMessage from "../commonsection/loadingwithstyle/notaddedcontent";
import CustomSkeleton from "../helper/customskeleton";
import { deleteCertificate, getCertificates } from "./helper/api_call";

const CertificatesComponent = () => {
  const [isLoading, setisLoading] = useState(false);
  return (
    <CommonComponent isLoading={isLoading}>
      {
        <CertificationCollectionSection
          setisLoading={setisLoading}
          isLoading={isLoading}
        />
      }
    </CommonComponent>
  );
};

const CertificationCollectionSection = ({ setisLoading, isLoading }) => {
  const [certificates, setcertificates] = useState();

  useEffect(() => {
    getAllCertificates();
  }, []);

  const getAllCertificates = () => {
    setisLoading(true);
    getCertificates()
      .then((data) => {
        if (!data) return;

        if (data.error) {
          console.log(data.error);
        } else {
          if (data.length > 0) setcertificates(data);
        }
      })
      .then(() => {
        setisLoading(false);
      });
  };

  return (
    <div className="container mt-5">
      <h2
        className="fs-2 text-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Certificates
      </h2>

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
                  setisLoading={setisLoading}
                />
              </div>
            );
          })) ||
          (isLoading ? (
            <CustomSkeleton />
          ) : (
            <CommonNotFoundMessage
              message={
                "Admin not added any certificate yet. Please visit after some days."
              }
            />
          ))}
      </div>
    </div>
  );
};

const CertificationCard = ({
  particularCertificate,
  certificateName,
  certificateId,
  setisLoading,
}) => {
  return (
    <div
      className="certificate-container mb-5 mx-0 col-md-12 aos-removal-class"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="500"
    >
      <div className="d-flex flex-wrap justify-content-between align-content-center">
        <img
          src={particularCertificate}
          className="card-img-top"
          alt={certificateName}
          data-bs-toggle={isAdminAuthenticated() ? "modal" : ""}
          data-bs-target={isAdminAuthenticated() ? "#modalConfirmDelete" : ""}
          onClick={() => {
            window.open(particularCertificate);
          }}
        />

        {isAdminAuthenticated() && (
          <img
            src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-delete-miscellaneous-kiranshastry-lineal-color-kiranshastry.png"
            alt="Delete Icon"
            className="position-absolute"
            onClick={() => {
              deleteParticularCertificate(certificateId, setisLoading);
            }}
          ></img>
        )}
      </div>
    </div>
  );
};

/// For Admin Certificate Management Section

const AdminCertificateAddButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="container my-5 text-center"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="1100"
    >
      <button
        className="btn text-white certificate-add-button"
        onClick={() => {
          navigate("/admin/certificate-form-entry", {
            state: true,
          });
        }}
      >
        <i className="fas fa-plus"></i> &nbsp;&nbsp; Add New Certificate
      </button>
    </div>
  );
};

const deleteParticularCertificate = (id, setisLoading) => {
  setisLoading(true);
  console.log(id);

  deleteCertificate(id)
    .then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        window.location.reload();
      }
    })
    .then(() => {
      setisLoading(false);
    });
};
export default CertificatesComponent;
