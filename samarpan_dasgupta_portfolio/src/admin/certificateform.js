import { useState } from "react";
import CommonComponent from "../commonsection/common";

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
    console.log(form);
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
          />
        </div>

        <button
          type="submit"
          className={submitButton()}
          onClick={() => {
            setisLoading(true);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminCertificateFormEntryPoint;
