import CommonComponent from "./commonsection/common";

const ErrorPath = () => (
  <CommonComponent>
    <main
      class="fs-4 d-flex flex-wrap justify-content-center align-items-center w-100"
      style={{ height: "80vh" }}
    >
      <div class="text-center py-5">
        <h1 class="display-1">404</h1>
        <h2>😔 Found Nothing Here</h2>
      </div>
    </main>
  </CommonComponent>
);

export default ErrorPath;
