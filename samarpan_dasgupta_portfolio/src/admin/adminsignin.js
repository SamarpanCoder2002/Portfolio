import "../css/style.css";

const AdminSignIn = () => {
  return (
    <section className="vh-100 admin-login-bg">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://images.pexels.com/photos/6894077/pexels-photo-6894077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-user-shield fa-2x me-3"
                          style={{ color: "#4DD637" }}
                        ></i>
                        <span className="h1 fw-bold mb-0">Admin Signin</span>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          placeholder="Email"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          placeholder="Password"
                        />
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn mb-2 mb-md-0 btn-block  w-100"
                          type="button"
                          style={{ backgroundColor: "#4DD637", color: "#fff" }}
                        >
                          Login
                        </button>
                      </div>

                      <p
                        className="fs-6 text-center fw-bold"
                        style={{ color: "#FF6666" }}
                      >
                        This Section is Designed only for Admin of This Website.
                        If You are not admin, Please Go Back.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminSignIn;
