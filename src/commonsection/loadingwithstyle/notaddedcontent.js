const CommonNotFoundMessage = ({ message }) => {
  return (
    <div
      className="d-flex flex-wrap justify-content-center mt-5 fw-bold fs-4 text-center"
      style={{ height: "80vh", color: "gray", letterSpacing: "1px" }}
    >
      {message}
    </div>
  );
};

export default CommonNotFoundMessage;