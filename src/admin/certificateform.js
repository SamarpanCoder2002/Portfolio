import { useState } from "react";
import CommonComponent from "../commonsection/common";
import { addCertificate } from "../certificate/helper/api_call";
import MessageSection from "../commonsection/alertmessage.js/s_f_msg";

const AdminCertificateFormEntryPoint = () => {
  const [isLoading, setisLoading] = useState(false);

  return (
    <CommonComponent isLoading={isLoading}>
      <section className="vh-100 admin-login-bg">
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt="login form"
                      className="img-fluid h-100"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <FormMaker
                        setisLoading={setisLoading}
                        isLoading={isLoading}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CommonComponent>
  );
};

const FormMaker = ({ setisLoading, isLoading }) => {
  const [isSuccess, setisSuccess] = useState(null);
  const [isError, setisError] = useState(null);

  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setisLoading(true);

    addCertificate(form)
      .then((data) => {
        if (data.code === 200) {
          setisSuccess("😸 " + data.message);
          window.location.href = "/admin/certificate-management";
        } else {
          setisError("😔 Certificate Adding Error");
        }
      })
      .catch((err) => {
        setisError("😔 Certificate Adding Error");
      })
      .then(() => {
        setisLoading(false);
      });
  };

  const submitButton = () => {
    if (isLoading) {
      return "btn mt-4 w-100 certificate-add-button text-white fs-5 disabled";
    } else {
      return "btn mt-4 w-100 certificate-add-button text-white fs-5";
    }
  };

  return (
    <div>
      <MessageSection isSuccess={isSuccess} isFail={isError} />
      <h3 className="text-center fw-bold" style={{ color: "#4DD637" }}>
        Add New Certificate
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Name of the Certificate"
            onChange={handleChange}
            required
            onClick={() => {
              isSuccess && setisSuccess(null);
              isError && setisError(null);
            }}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            className="form-control"
            id="image"
            placeholder="Certificate Image Link"
            onChange={handleChange}
            required
            onClick={() => {
              isSuccess && setisSuccess(null);
              isError && setisError(null);
            }}
          />
        </div>

        <button type="submit" className={submitButton()}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminCertificateFormEntryPoint;
