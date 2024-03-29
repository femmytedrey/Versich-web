const DashboardStepButton = ({ text, handleButtonClick, type, disabled }) => {
  const btnText = String(text).toLowerCase();

  return (
    <button
      type={type}
      onClick={handleButtonClick}
      disabled={disabled}
      className={`${
        btnText === "back"
          ? "bg-gray-200 text-gray-800 border border-versich-border"
          : "bg-versich-blue hover:bg-[#0A6ECD] text-white"
      } text-xs rounded-md py-2 px-4 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {btnText === "continue"
        ? "Continue"
        : btnText === "submit"
        ? "Submit"
        : "Back"}
    </button>
  );
};

export default DashboardStepButton;
