const StepButton = ({ text, handleButtonClick, type }) => {
  let btn_text = String(text).toLowerCase();
  return (
    <button
      type={type}
      onClick={handleButtonClick}
      className={`${
        btn_text === "next"
          ? "bg-versich-blue hover:bg-[#0A6ECD] text-white"
          : "bg-gray-200 text-gray-800 border border-versich-border"
      } rounded-md py-3 px-10 `}
    >
      {btn_text === "next" ? "Next" : "Back"}
    </button>
  );
};

export default StepButton;
