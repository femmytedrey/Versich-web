import { BarLoader } from "react-spinners";

const ConfirmButton = ({ text, type, clickHandler, loading }) => {
  const handleClick = () => {
    clickHandler();
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className="bg-versich-blue hover:bg-versich-blue-hover w-full text-white rounded-lg py-4 font-medium relative"
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <BarLoader color="#FF0000" loading={loading} />
        </div>
      )}
      {text ? text : null}
    </button>
  );
};

export default ConfirmButton;
