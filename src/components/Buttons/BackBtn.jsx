import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();

  const backBtnHandler = () => {
    navigate(-1);
  };
  return (
    <div>
      <button
        onClick={backBtnHandler}
        className="flex items-center gap-x-2 cursor-pointer font-medium text-versich-dark-blue"
      >
        <IoIosArrowBack className="text-xl" />
        Back
      </button>
    </div>
  );
};

export default BackBtn;
