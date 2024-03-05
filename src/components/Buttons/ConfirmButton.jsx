import { PropagateLoader } from "react-spinners";

const ConfirmButton = ({ text, type, clickHandler, loading }) => {
  const handleClick = () => {
    clickHandler();
  };

  return (
    <div>
      <button
        type={type}
        onClick={handleClick}
        className="bg-versich-blue hover:bg-versich-blue-hover w-full text-white rounded-lg py-4 font-medium "
      >
        {text ? text : null}
      </button>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-15">
          <div className="w-full h-screen absolute flex justify-center pt-40">
            <PropagateLoader
              loading={loading}
              color="#1F71BE"
              height={3}
              width="40%"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmButton;
