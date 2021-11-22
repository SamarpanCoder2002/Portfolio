const MessageSection = ({ isSuccess, isFail }) => {
    return (
      <>
        {isSuccess && (
          <div
            className="text-center text-white py-3 fs-4 mb-5"
            style={{ backgroundColor: "#4DD637" }}
          >
           {isSuccess}
          </div>
        )}
        {isFail && (
          <div
            className="text-center text-white py-3 fs-4 mb-5"
            style={{ backgroundColor: "#FF6666" }}
          >
            {isFail}
          </div>
        )}
      </>
    );
  };

export default MessageSection;  