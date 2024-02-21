const ConfirmButton = ({ text, type }) => {
  return (
    <button type={type} className="bg-versich-blue hover:bg-versich-blue-hover w-full text-white rounded-lg py-4 font-medium ">{text ? text : null}</button>
  );
}

export default ConfirmButton;