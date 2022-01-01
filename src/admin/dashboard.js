import CommonComponent from "../commonsection/common";

const DashboardComponent = () => {
  return (
    <CommonComponent>
      <div className="container-fluid admin-dashboard">
        <h4 className="text-white aos-removal-class text-center" data-aos="fade-up" data-aos-duration="2000">Welcome To Admin Dashboard</h4>
        <p className="mt-5 mt-md-3 fs-2 aos-removal-class" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">Manage Your Portfolio Here</p>
      </div>
    </CommonComponent>
  );
};

export default DashboardComponent;
