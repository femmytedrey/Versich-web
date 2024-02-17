const ConfirmButton = ({ text }) => {
  return (
    <button className="bg-versich-blue w-full text-white rounded-lg py-4 font-medium ">{text ? text : null}</button>
  );
}

export default ConfirmButton;