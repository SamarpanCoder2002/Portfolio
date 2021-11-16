import CommonComponent from "../commonsection/common";

const DashboardComponent = () => {
  return (
    <CommonComponent>
      <div className="container-fluid admin-dashboard">
        <h4 className="text-white">Welcome To Admin Dashboard</h4>
        <p className="mt-5 mt-md-3 fs-2">Manage Your Portfolio Here</p>
      </div>
    </CommonComponent>
  );
};

export default DashboardComponent;
