const StepButton = ({ text, handleButtonClick, type }) => {
  let btn_text = String(text).toLowerCase();
  
  return (
    <button
      type={type}
      onClick={handleButtonClick}
      className={`${
        btn_text === "back"
          ? "bg-gray-200 text-gray-800 border border-versich-border "
          : "bg-versich-blue hover:bg-[#0A6ECD] text-white"
      } rounded-md py-3 px-10 `}
    >
      {btn_text === "next" ? "Next" : btn_text === "submit" ? "Submit" : "Back"}
    </button>
  );
};

export default StepButton;
