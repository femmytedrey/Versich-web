const DashboardConfirmBtn = ({ text, btnAction }) => {
  return (
    <div>
      <button
        onClick={btnAction}
        className="px-5 py-3 bg-versich-blue hover:bg-versich-blue-hover font-medium text-white text-sm rounded-xl"
      >
        {text}
      </button>
    </div>
  );
};

export default DashboardConfirmBtn;
